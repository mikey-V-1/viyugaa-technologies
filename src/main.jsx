import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/loader.css'

AOS.init({ duration: 700, easing: 'ease-out-quart', once: true })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Register service worker in production to enable PWA install prompt on supported browsers
if (import.meta.env && import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      // registration successful
      // console.log('Service worker registered:', reg);
    }).catch(err => {
      // registration failed
      // console.warn('Service worker registration failed:', err);
    });
  });
}
