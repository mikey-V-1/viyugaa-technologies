import React from 'react';
import '../../styles/hire/hire-web.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaGlobe, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope } from 'react-icons/fa';

export default function WebDevelopers() {
  return (
    <div className="hire-web-super">
      {/* Super Styled Hero Section */}
      <section className="super-hero-section">
        <h1 className="super-title">
          <FaGlobe className="super-icon" /> Hire Web Developers
        </h1>
        <p className="super-desc">
          Our web developers create exceptional websites and web applications tailored to your business needs. From landing pages to complex platforms, we deliver quality, performance, and engaging user experiences.
        </p>
      </section>

      {/* Job Roles & Services */}
      <section className="super-job-roles">
        <h2 className="super-section-title">Job Roles & Services</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaCode /> Web Developer</h3>
            <p className="super-card-desc">
              As a Web Developer, you will build custom websites, architect web applications, design responsive layouts, and optimize for SEO and performance. You’ll collaborate on UI/UX, integrate APIs, and ensure ongoing support and maintenance.
            </p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaTools /> Tools & Frameworks</h3>
            <p className="super-card-desc">
              Our team leverages HTML5, CSS3, JavaScript, React, Angular, Vue, Node.js, and RESTful APIs to deliver robust web solutions. We use modern design patterns, automated testing, and CI/CD pipelines for efficient development and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="super-candidate-reqs">
        <h2 className="super-section-title">Candidate Requirements</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaUserGraduate /> College Students</h3>
            <p className="super-card-desc">
              College students should have completed at least two mini web projects and one main project, demonstrating proficiency in core web concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaUserTie /> Passout Students</h3>
            <p className="super-card-desc">
              Passout students must have 1–3 years of experience in web development, a portfolio of completed websites or apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="super-benefits">
        <h2 className="super-section-title">Why Hire From Us?</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaRocket /> Specialized Skills</h3>
            <p className="super-card-desc">Our web developers have deep expertise in custom website and web app development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaBolt /> Cost Savings</h3>
            <p className="super-card-desc">Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaCogs /> Quality & Speed</h3>
            <p className="super-card-desc">Agile development, rapid delivery, and high-quality standards ensure your site launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="super-hiring-process">
        <h2 className="super-section-title">Hiring Process</h2>
        <div className="super-process-steps">
          <div className="super-process-step">
            <FaEnvelope className="super-process-icon" />
            <span className="super-process-desc">Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="super-process-step">
            <FaLayerGroup className="super-process-icon" />
            <span className="super-process-desc">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="super-process-step">
            <FaUserTie className="super-process-icon" />
            <span className="super-process-desc">Screen and select from our pool of talented web developers.</span>
          </div>
          <div className="super-process-step">
            <FaCode className="super-process-icon" />
            <span className="super-process-desc">Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="super-process-step">
            <FaRocket className="super-process-icon" />
            <span className="super-process-desc">Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission */}
      <section className="super-resume-section">
        <h2 className="super-section-title">Submit Your Resume</h2>
        <form className="super-resume-form">
          <input type="text" placeholder="Full Name" className="super-form-input" required />
          <input type="email" placeholder="Email" className="super-form-input" required />
          <input type="text" placeholder="Phone Number" className="super-form-input" required />
          <textarea placeholder="Brief your experience or requirements" className="super-form-textarea" rows={4} required />
          <input type="file" className="super-form-input" />
          <Button className="super-btn">Submit Resume</Button>
        </form>
      </section>

      

      {/* Animated Demo Section */}
      <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="super-animation-demo">
        <h2 className="super-section-title">Animated Demo</h2>
        <p className="super-demo-desc">Our web developers deliver exceptional, high-performance, and scalable web experiences for every business.</p>
        <Button onClick={() => alert('Web powers your next project!')} className="super-btn">Get Started with Web</Button>
      </motion.div>
    </div>
  );
}
