import React from 'react';
import '../../styles/hire/hire-php.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaPhp, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import ResumeForm from '../../components/ResumeForm';
import { useNavigate } from 'react-router-dom';

export default function PHPDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-php">
      {/* Hero Section */}
      <section className="hire-section hire-hero">
        <div className="hire-hero-text">
          <h1 className="hire-hero-title">
            <FaPhp className="hire-icon" /> Hire PHP Developers
          </h1>
          <p className="hire-hero-desc">
            Hire PHP developers for custom web solutions, CMS, and eCommerce platforms. We deliver secure, scalable, and high-performing PHP applications tailored to your business needs.
          </p>
          <ul className="hire-feature-list">
            <li className="hire-feature-item"><FaRocket className="hire-icon" /> CMS & eCommerce</li>
            <li className="hire-feature-item"><FaCogs className="hire-icon" /> Scalable Backends</li>
            <li className="hire-feature-item"><FaBolt className="hire-icon" /> Performance & Security</li>
            <li className="hire-feature-item"><FaUserGraduate className="hire-icon" /> Skilled Team</li>
          </ul>
        </div>
      </section>

      {/* Job Roles & Services */}
      <section className="hire-job-roles">
        <h2 className="dev-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> PHP Developer</h3>
            <p>
              As a PHP Developer, you will build custom web applications, develop CMS and eCommerce solutions, integrate APIs and backends, and provide ongoing maintenance and support. You’ll optimize for performance, security, and scalability, collaborating on full-stack solutions.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p>
              Our team uses PHP, Laravel, CodeIgniter, WordPress, WooCommerce, MySQL, and RESTful APIs to deliver robust web solutions. We leverage automated testing, CI/CD, and modern design patterns for efficient development and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="hire-section hire-candidate-reqs">
        <h2 className="hire-section-title">Candidate Requirements</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserGraduate className="hire-icon" /> College Students</h3>
            <p className="hire-card-desc">
              College students should have completed at least two mini PHP projects and one main project, demonstrating proficiency in backend concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p className="hire-card-desc">
              Passout students must have 1–3 years of experience in PHP development, a portfolio of completed web projects, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hire-section hire-benefits">
        <h2 className="hire-section-title">Why Hire From Us?</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaRocket className="hire-icon" /> Specialized Skills</h3>
            <p className="hire-card-desc">Our PHP developers have deep expertise in custom web and eCommerce development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
            <p className="hire-card-desc">Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
            <p className="hire-card-desc">Agile development, rapid delivery, and high-quality standards ensure your web solution launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

  {/* Hiring Process */}
  <section className="hire-section hire-process">
        <h2 className="hire-section-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-icon" />
            <span className="hire-step-text">Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-icon" />
            <span className="hire-step-text">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-icon" />
            <span className="hire-step-text">Screen and select from our pool of talented PHP developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-icon" />
            <span className="hire-step-text">Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-icon" />
            <span className="hire-step-text">Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission */}
          <ResumeForm />

      {/* Animated Demo Section */}
      <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="hire-section hire-demo">
        <h2 className="hire-section-title">Animated Demo</h2>
        <p className="hire-section-desc">Our PHP developers deliver secure, scalable, and high-performing web experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-cta">Get Started with PHP</Button>
      </motion.div>
    </div>
  );
}
