import React from 'react';
import '../../styles/hire/hire-nodejs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaServer, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NodeJSDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-nodejs">
      {/* Hero Section */}
      <section className="hire-hero">
          <div className="hire-hero-text">
            <h1 className="hero-title">
              <FaServer className="hero-icon" /> Hire Node.js Developers
            </h1>
            <p className="hero-sub">
              Our Node.js developers build scalable backend solutions, APIs, and real-time applications. Get high-performance server-side development for your web and mobile projects, leveraging the latest Node.js tools and best practices.
            </p>
            <ul className="hire-feature-list">
              <li><FaRocket className="hire-icon" /> Scalable APIs</li>
              <li><FaCogs className="hire-icon" /> Real-time Apps</li>
              <li><FaBolt className="hire-icon" /> High Performance</li>
              <li><FaUserGraduate className="hire-icon" /> Expert Team</li>
            </ul>
          </div>
      </section>

      {/* Job Roles & Services */}
      <section className="hire-job-roles">
          <h2 className="hire-section-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> Node.js Developer</h3>
            <p className="hire-card-desc">
              As a Node.js Developer, you will build RESTful APIs, real-time apps with Socket.io, architect microservices, and integrate databases. You’ll optimize for performance, security, and scalability, collaborating on backend and full-stack solutions.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p className="hire-card-desc">
              Our team uses Node.js, Express, Socket.io, MongoDB, PostgreSQL, Redis, and RESTful APIs to deliver robust backend solutions. We leverage automated testing, CI/CD, and modern design patterns for efficient development and deployment.
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
            <p className="hire-card-desc">
              College students should have completed at least two mini Node.js projects and one main project, demonstrating proficiency in backend concepts, API design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p className="hire-card-desc">
              Passout students must have 1–3 years of experience in Node.js development, a portfolio of completed backend projects, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
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
            <p className="hire-card-desc">Our Node.js developers have deep expertise in scalable backend and API development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
            <p className="hire-card-desc">Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
            <p className="hire-card-desc">Agile development, rapid delivery, and high-quality standards ensure your backend launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

  {/* Hiring Process */}
  <section className="hire-process">
        <h2 className="hire-section-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-icon" />
            <span className="hire-process-desc">Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-icon" />
            <span className="hire-process-desc">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-icon" />
            <span className="hire-process-desc">Screen and select from our pool of talented Node.js developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-icon" />
            <span className="hire-process-desc">Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-icon" />
            <span className="hire-process-desc">Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission */}
        {/* Resume Submission (common) */}
        <ResumeForm />

      

      {/* Animated Demo Section */}
      <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="hire-animation-demo">
  <h2 className="hire-demo-title">Animated Demo</h2>
        <p className="hire-demo-desc">Our Node.js developers deliver scalable, high-performance, and secure backend experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-btn">Get Started with Node.js</Button>
      </motion.div>
    </div>
  );
}
