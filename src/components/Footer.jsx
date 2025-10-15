import React, { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const formRef = useRef();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const firstName = form[0].value;
    const email = form[1].value;
    const country = form[2].value;
    const phone = form[3].value;
    const problem = form[4].value;
    // Compose message
    const message = `Name: ${firstName}%0AEmail: ${email}%0ACountry: ${country}%0APhone: ${phone}%0AProblem: ${problem}`;
    // WhatsApp API link
    window.open(`https://wa.me/9344746861?text=${message}`, '_blank');
  };

  return (
    <footer className="footer" data-aos="fade-up">
      {!isContactPage &&   (
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
      )}
      <div className="footer-inner">
        
        <section className="footer-info">
          <strong className="footer-business">Viyugaa Technologies</strong>
          <p className="muted">
            Viyugaa Technologies is your trusted partner for innovative web and mobile solutions. We blend creativity, technology, and strategy to help businesses grow and succeed in the digital age. Our team is dedicated to delivering high-quality products, excellent support, and a seamless experience for every client. Connect with us to start your next project and unlock new possibilities for your business.
          </p>
        </section>
        <nav className="footer-menu">
          <h4>Menu</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Policy</a></li>
          </ul>
        </nav>
        <section className="footer-policy">
          <h4>Policy</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </section>
        <section className="footer-social">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </section>
      </div>
      <div className="copyright">
        © 2025 by Viyugaa Technologies. 
      </div>
    </footer>
  );
}
