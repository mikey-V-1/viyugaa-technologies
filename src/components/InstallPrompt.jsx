import React, { useEffect, useState } from 'react'
import '../styles/install-prompt.css'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)
  const promptTimerRef = React.useRef(null)
  const deferredPromptRef = React.useRef(null)
  const gestureListenerRegistered = React.useRef(false)
  const promptShownRef = React.useRef(false)

  useEffect(() => {
    function beforeInstallHandler(e) {
      e.preventDefault()
      // Store the event so we can trigger prompt() later from a genuine user gesture
      // If we've already shown/triggered a prompt, ignore
      if (promptShownRef.current) return
      deferredPromptRef.current = e
      setDeferredPrompt(e)
      setVisible(true)
      // Attach a one-time user-gesture listener (pointerup) once so we can prompt safely
      if (!gestureListenerRegistered.current) {
        gestureListenerRegistered.current = true
        function onFirstUserGesture() {
          if (promptShownRef.current) return
          const installEvt = deferredPromptRef.current
          if (!installEvt) return
          try {
            installEvt.prompt()
            promptShownRef.current = true
          } catch (err) {
            // prompt can fail if browser disallows it; ignore
          }
          // Clean up after prompting
          deferredPromptRef.current = null
          setDeferredPrompt(null)
          setVisible(false)
          window.removeEventListener('pointerup', onFirstUserGesture)
          gestureListenerRegistered.current = false
        }
        window.addEventListener('pointerup', onFirstUserGesture, { once: true })
      }
    }

    window.addEventListener('beforeinstallprompt', beforeInstallHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler)
      if (promptTimerRef.current) clearTimeout(promptTimerRef.current)
      deferredPromptRef.current = null
    }
  }, [])

  const handleInstallClick = async () => {
    const installEvt = deferredPromptRef.current || deferredPrompt
    if (!installEvt) return
    
    try {
      // Call prompt() to show the install banner
      installEvt.prompt()
      const choiceResult = await installEvt.userChoice
      // Optionally react to the user's choice
      if (choiceResult.outcome === 'accepted') {
        // App was installed
      }
    } catch (err) {
      // prompt can fail if not available; ignore silently
    } finally {
      promptShownRef.current = true
      setVisible(false)
      setDeferredPrompt(null)
      deferredPromptRef.current = null
      if (promptTimerRef.current) { 
        clearTimeout(promptTimerRef.current)
        promptTimerRef.current = null 
      }
    }
  }

  if (!visible) return null

  return (
    <button className="install-btn" onClick={handleInstallClick} aria-label="Install app">
      Install
    </button>
  )
}
