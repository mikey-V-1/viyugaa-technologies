import React, { useEffect, useState } from 'react'

// Dynamically import the lottie-react component to keep it out of the main bundle.
export default function LazyLottie(props) {
  const [LottieComp, setLottieComp] = useState(null)

  useEffect(() => {
    let mounted = true
    import('lottie-react')
      .then((mod) => {
        if (mounted) setLottieComp(() => mod.default || mod)
      })
      .catch(() => {
        // swallow import errors; component can render fallback
      })
    return () => {
      mounted = false
    }
  }, [])

  if (!LottieComp) {
    // lightweight placeholder to preserve layout while library loads
    return <div style={{ width: props.style?.width || '100%', height: props.style?.height || '100%' }} />
  }

  const C = LottieComp
  return <C {...props} />
}
