import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/hire/hire-angularjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { SiAngular } from 'react-icons/si';
import { FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function AngularJSDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-angularjs">
      {/* Hero Section */}
      <section className="hire-hero">
        <h1>
          <SiAngular style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Hire AngularJS Developers
        </h1>
        <p>
          Empower your web applications with our skilled AngularJS developers. We deliver robust, maintainable, and high-performance solutions using the latest AngularJS tools and best practices, ensuring your business stays ahead in the digital era.
        </p>
        <ul className="hire-feature-list">
          <li><FaRocket style={{ color: "var(--accent-color)", marginRight: "0.4em" }} /> Fast Delivery</li>
          <li><FaCogs style={{ color: "var(--accent-color)", marginRight: "0.4em" }} /> Scalable Solutions</li>
          <li><FaBolt style={{ color: "var(--accent-color)", marginRight: "0.4em" }} /> Cutting-edge Tech</li>
          <li><FaUserGraduate style={{ color: "var(--accent-color)", marginRight: "0.4em" }} /> Expert Team</li>
        </ul>
      </section>

      {/* Job Roles & Services */}
      <section>
        <h2 className="dev-title">Job Roles & Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="hire-card">
            <div className="dev-title"><FaCode style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> AngularJS Developer</div>
            <p>
              As an AngularJS Developer, you will build enterprise-grade web applications, create custom components, manage application state, and ensure seamless performance. You’ll collaborate on UI/UX, integrate APIs, and maintain code quality through testing and deployment best practices.
            </p>
          </div>
          <div className="hire-card">
            <div className="hire-hero-text">
              <h1 className="hero-title">
                <SiAngular className="hero-icon" /> Hire AngularJS Developers
              </h1>
              <p className="hero-sub">
                Empower your web applications with our skilled AngularJS developers. We deliver robust, maintainable, and high-performance solutions using the latest AngularJS tools and best practices, ensuring your business stays ahead in the digital era.
              </p>
              <ul className="hire-feature-list">
                <li><FaRocket className="hire-icon" /> Fast Delivery</li>
                <li><FaCogs className="hire-icon" /> Scalable Solutions</li>
                <li><FaBolt className="hire-icon" /> Cutting-edge Tech</li>
                <li><FaUserGraduate className="hire-icon" /> Expert Team</li>
              </ul>
            </div>
            <div className="hire-illustration" aria-hidden="true" />
            <div className="dev-title"><FaTools style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Tools & Frameworks</div>
            <p>
              Our team leverages AngularJS, TypeScript, RxJS, NgRx, Jasmine, Karma, and RESTful APIs to deliver scalable and maintainable solutions. We use modern design patterns and automated testing for reliable deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="hire-candidate-reqs">
        <h2 className="dev-title">Candidate Requirements</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
              <div className="hire-card">
                <h3 className="hire-card-title"><FaCode className="hire-icon" /> AngularJS Developer</h3>
                <p className="hire-card-desc">
                  As an AngularJS Developer, you will build enterprise-grade web applications, create custom components, manage application state, and ensure seamless performance. You’ll collaborate on UI/UX, integrate APIs, and maintain code quality through testing and deployment best practices.
                </p>
              </div>
          <div className="hire-card">
            <div className="dev-title"><FaUserGraduate style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> College Students</div>
            <p>
              College students should have completed at least two mini AngularJS projects and one main project, demonstrating proficiency in core AngularJS concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
                <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
                <p className="hire-card-desc">
                  Our team leverages AngularJS, TypeScript, RxJS, NgRx, Jasmine, Karma, and RESTful APIs to deliver scalable and maintainable solutions. We use modern design patterns and automated testing for reliable deployments.
                </p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaUserTie style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Passout Students</div>
            <p>
              Passout students must have 1–3 years of experience in AngularJS development, a portfolio of completed web apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hire-benefits">
        <h2 className="dev-title">Why Hire From Us?</h2>
                <h3 className="hire-card-title"><FaUserGraduate className="hire-icon" /> College Students</h3>
                <p className="hire-card-desc">
                  College students should have completed at least two mini AngularJS projects and one main project, demonstrating proficiency in core AngularJS concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
                </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="hire-card">
            <div className="dev-title"><FaRocket style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Specialized Skills</div>
            <p>Our AngularJS developers have deep expertise in scalable web app development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
                <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
                <p className="hire-card-desc">
                  Passout students must have 1–3 years of experience in AngularJS development, a portfolio of completed web apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
                </p>
            <div className="dev-title"><FaBolt style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Cost Savings</div>
            <p>Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaCogs style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Quality & Speed</div>
            <p>Agile development, rapid delivery, and high-quality standards ensure your app launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="hire-process">
              <div className="hire-card">
                <h3 className="hire-card-title"><FaRocket className="hire-icon" /> Specialized Skills</h3>
                <p className="hire-card-desc">
                  Our AngularJS developers have deep expertise in scalable web app development, ensuring innovative and reliable solutions for every business need.
                </p>
              </div>
        <h2 className="hire-process-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-process-step-icon" />
              <div className="hire-card">
                <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
                <p className="hire-card-desc">
                  Flexible engagement models and competitive rates make it easy to access top talent for any project size.
                </p>
              </div>
            <span>Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-process-step-icon" />
              <div className="hire-card">
                <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
                <p className="hire-card-desc">
                  Agile development, rapid delivery, and high-quality standards ensure your app launches on time and performs flawlessly.
                </p>
              </div>
            <span>Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-process-step-icon" />
            <span>Screen and select from our pool of talented AngularJS developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-process-step-icon" />
            <span>Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
              <div className="hire-process-step">
                <FaEnvelope className="hire-icon" />
                <span className="hire-process-desc">Send your inquiry and our team will guide you through the next steps.</span>
              </div>
            <FaRocket className="hire-process-step-icon" />
            <span>Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
              <div className="hire-process-step">
                <FaLayerGroup className="hire-icon" />
                <span className="hire-process-desc">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
              </div>
      </section>

      {/* Resume Submission (common) */}
      <ResumeForm />

      {/* Animated Demo Section */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="hire-section hire-demo"
      >
        <h2 className="hire-section-title">Animated Demo</h2>
        <p className="hire-section-desc">Our AngularJS developers deliver robust, scalable, and high-performance web experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-cta">Get Started with AngularJS</Button>
      </motion.div>

      
    </div>
  );
}
