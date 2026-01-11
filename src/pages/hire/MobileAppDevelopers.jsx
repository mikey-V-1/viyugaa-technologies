import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/hire/hire-mobile-app.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaMobileAlt, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function MobileAppDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-mobile-app">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1>
            <FaMobileAlt style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Hire Mobile App Developers
          </h1>
          <p>
            Accelerate your business growth with our mobile app development experts. We create innovative, high-performance apps for Android, iOS, and cross-platform needs, ensuring seamless user experiences and robust functionality.
          </p>
          <ul className="hire-feature-list" style={{ justifyContent: "center" }}>
            <li><FaRocket style={{ color: "#0ea5a4", marginRight: "0.4em" }} /> Fast Delivery</li>
            <li><FaCogs style={{ color: "#0ea5a4", marginRight: "0.4em" }} /> Scalable Solutions</li>
            <li><FaBolt style={{ color: "#0ea5a4", marginRight: "0.4em" }} /> Cutting-edge Tech</li>
            <li><FaUserGraduate style={{ color: "#0ea5a4", marginRight: "0.4em" }} /> Expert Team</li>
          </ul>
        </div>
      </section>

      {/* Developer Roles & Services */}
      <section style={{ textAlign: "center" }}>
        <h2 className="dev-title" style={{ textAlign: "center" }}>Job Roles & Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="hire-card" style={{ textAlign: "center" }}>
            <div className="dev-title" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaCode style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Mobile App Developer
            </div>
            <p style={{ textAlign: "center" }}>
              As a Mobile App Developer, you will design and build custom mobile applications for iOS and Android, as well as cross-platform solutions using Flutter and React Native. Your responsibilities include UI/UX design, app optimization, and ongoing maintenance and support.
            </p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaTools style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Tools & Frameworks</div>
            <p>
              Our team leverages Swift, Kotlin, Flutter, React Native, Firebase, RESTful APIs, and CI/CD pipelines to deliver robust and scalable mobile solutions. We use modern design patterns and automated testing for reliable deployments.
            </p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaLayerGroup style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Platforms Supported</div>
            <p>
              We build apps for Android, iOS, tablets, and wearables, ensuring seamless performance and native-like experiences across all devices.
            </p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaEnvelope style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Support & Maintenance</div>
            <p>
              Our support team provides ongoing maintenance, updates, and troubleshooting to keep your app running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      

      {/* Candidate Requirements - Redesigned */}
      <section className="hire-candidate-reqs">
        <h2 className="dev-title">Candidate Requirements</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="hire-card">
            <div className="dev-title"><FaUserGraduate style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> College Students</div>
            <p>
              College students should have completed at least two mini mobile app projects and one main project, demonstrating proficiency in core mobile concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaUserTie style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Passout Students</div>
            <p>
              Passout students must have 1–3 years of experience in mobile app development, a portfolio of published apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits - Redesigned */}
      <section className="hire-benefits">
        <h2 className="dev-title">Why Hire From Us?</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="hire-card">
            <div className="dev-title"><FaRocket style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Specialized Skills</div>
            <p>Our mobile app developers have deep expertise in native and cross-platform development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaBolt style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Cost Savings</div>
            <p>Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <div className="dev-title"><FaCogs style={{ color: "var(--accent-color)", marginRight: "0.5em" }} /> Quality & Speed</div>
            <p>Agile development, rapid delivery, and high-quality standards ensure your app launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process - Redesigned */}
      <section className="hire-process">
        <h2 className="hire-process-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-process-step-icon" />
            <span>Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-process-step-icon" />
            <span>Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-process-step-icon" />
            <span>Screen and select from our pool of talented mobile app developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-process-step-icon" />
            <span>Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-process-step-icon" />
            <span>Scale your team as your project grows with flexible resource options.</span>
          </div>
        </div>
      </section>

      {/* Resume Submission (common) */}
      <ResumeForm />

      

      {/* Animated Demo Section */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="hire-animation-demo"
        style={{ textAlign: "center" }}
      >
        <h2 className="hire-demo-title" style={{ textAlign: "center" }}>Animated Demo</h2>
        <p className="hire-demo-desc" style={{ textAlign: "center" }}>Our mobile app developers deliver innovative, high-performance, and scalable mobile experiences for every business.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <Button onClick={() => navigate('/contact')} className="hire-demo-cta">Get Started with Mobile Apps</Button>
        </div>
      </motion.div>
    </div>
  );
}
