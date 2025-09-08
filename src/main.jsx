import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 700, easing: 'ease-out-quart', once: true })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
