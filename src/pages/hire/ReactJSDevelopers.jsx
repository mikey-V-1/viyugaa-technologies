
import React from 'react';
import '../../styles/hire/hire-reactjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaReact, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ReactJSDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-reactjs">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title">
            <FaReact className="hero-icon" /> Hire React JS Developers
          </h1>
          <p className="hero-sub">
            Are you looking to elevate your business with cutting-edge web applications? Our ReactJS developers bring years of experience and deep technical expertise to craft dynamic, scalable, and maintainable solutions tailored to your needs. From building interactive user interfaces to integrating complex APIs and optimizing performance, our team ensures your project stands out in today’s competitive digital landscape.
          </p>
          <ul className="hire-feature-list">
            <li><FaRocket className="hire-icon" /> Fast Delivery</li>
            <li><FaCogs className="hire-icon" /> Scalable Solutions</li>
            <li><FaBolt className="hire-icon" /> Cutting-edge Tech</li>
            <li><FaUserGraduate className="hire-icon" /> Expert Team</li>
          </ul>
        </div>
        <div className="hire-illustration" aria-hidden="true" />
      </section>

      {/* Job Roles & Services */}
      <section>
        <h2 className="hire-section-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> ReactJS Developer</h3>
            <p>
              As a ReactJS Developer, you will be responsible for building single-page applications (SPA) that deliver seamless user experiences. You’ll leverage component-based architecture to create reusable, maintainable code, integrate APIs for dynamic data, and optimize performance for fast, responsive interfaces.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p>
              Our developers are proficient in a wide range of tools and frameworks, including ReactJS, Redux, Zustand, and React Router. We utilize Framer Motion for engaging animations and ensure code quality with testing tools such as Jest and React Testing Library.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="hire-candidate-reqs">
        <h2 className="hire-section-title">Candidate Requirements</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserGraduate className="hire-icon" /> College Students</h3>
            <p>
              College students interested in ReactJS roles should have completed at least two mini projects and one main project, demonstrating their ability to apply ReactJS fundamentals in real-world scenarios.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p>
              Passout students should bring 1–3 years of hands-on experience in ReactJS development, supported by a portfolio of completed projects that showcase their technical abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hire-benefits">
        <h2 className="hire-section-title">Why Hire From Us?</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaRocket className="hire-icon" /> Specialized Skills</h3>
            <p>Our team consists of highly experienced ReactJS developers who possess deep expertise in both web and mobile app development.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
            <p>We offer flexible engagement models tailored to your requirements, whether you need a dedicated team or individual experts.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
            <p>By adopting agile methodologies, we ensure faster turnaround times and maintain high standards of quality throughout the development process.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="hire-process">
        <h2 className="hire-process-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-process-step-icon" />
            <span>Start your hiring journey by sending us an inquiry. Our team will promptly respond to understand your requirements and guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-process-step-icon" />
            <span>Choose the engagement model that best fits your project needs, whether it’s hourly, part-time, or full-time hiring.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-process-step-icon" />
            <span>Review and screen our pool of talented ReactJS developers. We assist you in selecting candidates who match your technical and cultural requirements.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-process-step-icon" />
            <span>We ensure confidentiality and security by signing a Non-Disclosure Agreement (NDA) before project commencement.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-process-step-icon" />
            <span>Easily scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission (common) */}
      <ResumeForm />

      {/* Super Styled Animated Demo Section */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="hire-animation-demo"
        style={{ textAlign: "center" }}
      >
        <h2 className="hire-demo-title" style={{ textAlign: "center" }}>Animated Demo</h2>
        <p className="hire-demo-desc" style={{ textAlign: "center" }}>
          ReactJS developers deliver fast, interactive, and scalable web experiences for modern businesses.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <Button onClick={() => navigate('/contact')} className="hire-demo-cta">
            Get Started with ReactJS
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
