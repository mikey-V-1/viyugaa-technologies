import React, { useEffect, useState } from 'react'

export default function LazyPlayer(props) {
  const [PlayerComp, setPlayerComp] = useState(null)

  useEffect(() => {
    let mounted = true
    import('@lottiefiles/react-lottie-player')
      .then((mod) => {
        if (mounted) setPlayerComp(() => mod.Player || mod)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  if (!PlayerComp) {
    return <div style={{ width: props.style?.width || '100%', height: props.style?.height || '100%' }} />
  }

  const P = PlayerComp
  return <P {...props} />
}
