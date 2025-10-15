import React, { useEffect, useState } from 'react'

// Dynamically import the lottie-react component to keep it out of the main bundle.
// Supports either passing `animationData` directly or `animationLoader` which
// is a function returning a dynamic import for the JSON (so JSONs are code-split).
export default function LazyLottie({ animationData, animationLoader, style, ...rest }) {
  const [LottieComp, setLottieComp] = useState(null)
  const [data, setData] = useState(animationData || null)

  useEffect(() => {
    let mounted = true
    import('lottie-react')
      .then((mod) => {
        if (mounted) setLottieComp(() => mod.default || mod)
      })
      .catch(() => {})

    if (!animationData && typeof animationLoader === 'function') {
      animationLoader()
        .then((m) => {
          if (mounted) setData(m.default || m)
        })
        .catch(() => {})
    }

    return () => {
      mounted = false
    }
  }, [animationData, animationLoader])

  if (!LottieComp) {
    return <div style={{ width: style?.width || '100%', height: style?.height || '100%' }} />
  }

  const C = LottieComp
  return <C animationData={data} style={style} {...rest} />
}
