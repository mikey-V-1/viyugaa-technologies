import React from 'react';
import '../../styles/hire/hire-web.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaGlobe, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function WebDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-web">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title">
            <FaGlobe className="hero-icon" /> Hire Web Developers
          </h1>
          <p className="hero-sub">
            Our web developers create exceptional websites and web applications tailored to your business needs. From landing pages to complex platforms, we deliver quality, performance, and engaging user experiences.
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
      <section className="hire-job-roles">
        <h2 className="hire-section-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode /> Web Developer</h3>
            <p className="hire-card-desc">
              As a Web Developer, you will build custom websites, architect web applications, design responsive layouts, and optimize for SEO and performance. You’ll collaborate on UI/UX, integrate APIs, and ensure ongoing support and maintenance.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools /> Tools & Frameworks</h3>
            <p className="hire-card-desc">
              Our team leverages HTML5, CSS3, JavaScript, React, Angular, Vue, Node.js, and RESTful APIs to deliver robust web solutions. We use modern design patterns, automated testing, and CI/CD pipelines for efficient development and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="hire-candidate-reqs">
        <h2 className="hire-section-title">Candidate Requirements</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserGraduate /> College Students</h3>
            <p className="hire-card-desc">
              College students should have completed at least two mini web projects and one main project, demonstrating proficiency in core web concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie /> Passout Students</h3>
            <p className="hire-card-desc">
              Passout students must have 1–3 years of experience in web development, a portfolio of completed websites or apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hire-benefits">
        <h2 className="hire-section-title">Why Hire From Us?</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaRocket /> Specialized Skills</h3>
            <p className="hire-card-desc">Our web developers have deep expertise in custom website and web app development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt /> Cost Savings</h3>
            <p className="hire-card-desc">Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs /> Quality & Speed</h3>
            <p className="hire-card-desc">Agile development, rapid delivery, and high-quality standards ensure your site launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="hire-process">
        <h2 className="hire-section-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-process-icon" />
            <span className="hire-process-desc">Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-process-icon" />
            <span className="hire-process-desc">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-process-icon" />
            <span className="hire-process-desc">Screen and select from our pool of talented web developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-process-icon" />
            <span className="hire-process-desc">Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-process-icon" />
            <span className="hire-process-desc">Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission (common) */}
      <ResumeForm />

      

      {/* Animated Demo Section */}
      <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="hire-animation-demo">
        <h2 className="hire-section-title">Animated Demo</h2>
        <p className="hire-demo-desc">Our web developers deliver exceptional, high-performance, and scalable web experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-btn">Get Started with Web</Button>
      </motion.div>
    </div>
  );
}
