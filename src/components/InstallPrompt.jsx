import React, { useEffect, useState } from 'react'
import '../styles/install-prompt.css'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function beforeInstallHandler(e) {
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', beforeInstallHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    // Optionally react to the user's choice
    setVisible(false)
    setDeferredPrompt(null)
  }

  if (!visible) return null

  return (
    <button className="install-btn" onClick={handleInstallClick} aria-label="Install app">
      Install
    </button>
  )
}
