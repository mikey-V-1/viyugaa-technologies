import React, { useRef } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const formRef = useRef();

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const firstName = form[0].value;
    const email = form[1].value;
    const country = form[2].value;
    const phone = form[3].value;
    const problem = form[4].value;
    const message = `Name: ${firstName}%0AEmail: ${email}%0ACountry: ${country}%0APhone: ${phone}%0AProblem: ${problem}`;
    window.open(`https://wa.me/9344746861?text=${message}`, '_blank');
  };

  return (
    <section className="super-cta-section">
      <h2 className="super-section-title">Let’s Build It!</h2>
      <p className="super-desc">One stop solution for all your mobile app development related inquiries. Fill up the form below and one of our representatives will contact you shortly.</p>
      <form className="super-resume-form" ref={formRef} onSubmit={handleWhatsAppSubmit}>
        <input type="text" placeholder="First Name" className="super-form-input" required />
        <input type="email" placeholder="Your Email" className="super-form-input" required />
        <input type="text" placeholder="Your Country" className="super-form-input" required />
        <input type="text" placeholder="Phone Number" className="super-form-input" required />
        <textarea placeholder="Describe your problem" className="super-form-textarea" rows={4} required />
        <button type="submit" className="super-btn">Send Message</button>
      </form>
      <div className="super-contact-details">
        <p><strong>Contact Us:</strong> 9043236861</p>
        <p><strong>Email:</strong> viyugaatechnologies@gmail.com</p>
      </div>
    </section>
  );
}