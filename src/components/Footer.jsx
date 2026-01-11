import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import '../styles/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>Viyugaa Technologies</h3>
          <p className="company-desc">We deliver innovative web and software solutions that transform your business. From custom development to enterprise software, we partner with you to build tomorrow's digital future.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61585837926479" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/viyugaa_technologies" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/viyugaa80242" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/viyugaa-technologies-7a880b3a2/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h4>Company</h4>
          <nav>
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/career" onClick={scrollToTop}>About Us</Link>
            <Link to="/career" onClick={scrollToTop}>Our Work</Link>
            <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
            <Link to="/career" onClick={scrollToTop}>Careers</Link>
          </nav>
        </div>

        <div className="footer-section products">
          <h4>Services & Solutions</h4>
          <nav>
            <Link to="/services/web-development" onClick={scrollToTop}>Web Development</Link>
            <Link to="/services/mobile-app-development" onClick={scrollToTop}>Mobile App Development</Link>
            <Link to="/services/custom-software-development" onClick={scrollToTop}>Custom Software</Link>
            <Link to="/services/erp-software-development" onClick={scrollToTop}>ERP Solutions</Link>
            <Link to="/services/software-product-development" onClick={scrollToTop}>Product Development</Link>
            <Link to="/services/uiux-design" onClick={scrollToTop}>UI/UX Design</Link>
            <Link to="/services/software-maintenance-support" onClick={scrollToTop}>Maintenance & Support</Link>
          </nav>
        </div>

        <div className="footer-section contact-info">
          <h4>Get In Touch</h4>
          <div className="contact-details">
            <p>
              <MdLocationOn />
              Near by EURO Kids Playschool, Peelamedu, Lakshmi Ammal Layout, Hopes College, Coimbatore- 641014, Tamil Nadu
            </p>
            <p>
              <MdPhone />
              <a href="tel:+919043236861">+91 9043236861</a>
            </p>
            <p>
              <MdEmail />
              <a href="mailto:viyugaatechnologies@gmail.com">viyugaatechnologies@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© {new Date().getFullYear()} Viyugaa Technologies. All rights reserved.</p>
        </div>
        </div>
      </div>
    </footer>
  )
}
