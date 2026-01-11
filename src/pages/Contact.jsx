import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import seoData from '../lib/seoData';
import '../styles/Contact.css';

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  // Read EmailJS keys from Vite env (set in .env or .env.local)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID

  useEffect(() => {
    // initialize EmailJS if user id available
    if (USER_ID) {
      try {
        emailjs.init(USER_ID)
      } catch (err) {
        // some emailjs versions expose init differently; ignore if already initialized
        console.warn('EmailJS init warning', err)
      }
    }
  }, [USER_ID])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setErrorMsg('EmailJS keys are not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_USER_ID in your .env file.')
      setStatus('error')
      return
    }

    const form = formRef.current
    const formData = new FormData(form)
    const name = formData.get('from_name')
    const reply = formData.get('reply_to')
    const message = formData.get('message')

    if (!name || !reply || !message) {
      setErrorMsg('Please fill name, email and message.')
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      // sendForm returns a Promise
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('EmailJS send error', err)
      setErrorMsg(err?.text || 'Failed to send message. Check console for details.')
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <SEO {...seoData.contact} />

      {/* Floating background elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">Have Some Questions?</h1>
          <p className="contact-subtitle">
            Thank you for your interest in our services. Please fill out the form below or email us at{' '}
             and we will get back to you promptly regarding your request.
          </p>

         

          <div className="contact-details">
            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              viyugaatechnologies@gmail.com
            </motion.div>

            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              9043236861
            </motion.div>

            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Near by EURO Kids Playschool, Peelamedu, Lakshmi Ammal Layout, Hopes College, Coimbatore- 641014, Tamil Nadu
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                className="form-input"
                name="from_name" 
                placeholder="First Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                className="form-input"
                name="last_name" 
                placeholder="Last Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                className="form-input"
                type="email" 
                name="reply_to" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                className="form-input"
                type="tel" 
                name="phone" 
                placeholder="Phone" 
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-input"
                name="message" 
                rows={6} 
                placeholder="Message" 
                required 
              />
            </div>
            <motion.button 
              className="submit-button"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={status === 'sent' ? 'success-message' : 'error-message'}
              >
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message sent successfully!'}
                {status === 'error' && `Error: ${errorMsg}`}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
