import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/components/resume-form.css'

export default function ResumeForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [exp, setExp] = useState('')
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !phone || !exp) {
      alert('Please fill all required fields')
      return
    }

    setSending(true)

    try {
      // Use EmailJS to send the form. Replace the placeholders with your actual IDs.
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      alert('Resume submitted — we will contact you soon.')
      // reset form fields
      if (formRef.current) formRef.current.reset()
      setName('')
      setEmail('')
      setPhone('')
      setExp('')
    } catch (err) {
      console.error('Email send error:', err)
      alert('Failed to submit. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="hire-resume-common">
      <h2 className="dev-title">Submit Your Resume</h2>
      <form ref={formRef} className="resume-form" onSubmit={onSubmit}>
        <label htmlFor="name">Full Name</label>
        <input name="name" id="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" required />

        <label htmlFor="email">Email</label>
        <input name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />

        <label htmlFor="phone">Phone Number</label>
        <input name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Phone Number" required />

        <label htmlFor="exp">Brief your experience or requirements</label>
        <textarea name="exp" id="exp" value={exp} onChange={e => setExp(e.target.value)} placeholder="Brief your experience or requirements" rows={4} required />

        <label htmlFor="resume">Resume File</label>
        <input name="resume" id="resume" type="file" />

        <button type="submit" className="resume-submit-btn" disabled={sending}>{sending ? 'Submitting...' : 'Submit Resume'}</button>
      </form>
    </section>
  )
}
