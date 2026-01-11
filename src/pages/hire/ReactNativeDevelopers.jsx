import React from 'react';
import '../../styles/hire/hire-react-native.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaMobileAlt, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ReactNativeDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-react-native">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title">
            <FaMobileAlt className="hero-icon" /> Hire React Native Developers
          </h1>
          <p className="hero-sub">
            Leverage React Native for fast, cost-effective mobile app development. Our team builds robust cross-platform apps with native performance and seamless user experience, helping you reach both iOS and Android users efficiently.
          </p>
          <ul className="hire-feature-list">
            <li><FaRocket className="hire-icon" /> Fast Development</li>
            <li><FaCogs className="hire-icon" /> Cross-Platform</li>
            <li><FaBolt className="hire-icon" /> Native Performance</li>
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
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> React Native Developer</h3>
            <p className="hire-card-desc">
              As a React Native Developer, you will build cross-platform mobile apps using reusable components, integrate native modules, and optimize for performance. You’ll work with live and hot reloading, app store publishing, and collaborate on UI/UX for seamless experiences.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p className="hire-card-desc">
              Our team uses React Native, Expo, Redux, TypeScript, Firebase, and RESTful APIs to deliver scalable mobile solutions. We leverage automated testing and CI/CD for efficient development and deployment.
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
              College students should have completed at least two mini React Native projects and one main project, demonstrating proficiency in cross-platform concepts, UI design, and basic deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p className="hire-card-desc">
              Passout students must have 1–3 years of experience in React Native development, a portfolio of published apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
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
            <p className="hire-card-desc">Our React Native developers have deep expertise in cross-platform mobile app development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
            <p className="hire-card-desc">Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
            <p className="hire-card-desc">Agile development, rapid delivery, and high-quality standards ensure your app launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="hire-process">
        <h2 className="hire-section-title">Hiring Process</h2>
        <div className="hire-process-steps">
          <div className="hire-process-step">
            <FaEnvelope className="hire-process-step-icon" />
            <span className="hire-process-desc">Send your inquiry and our team will guide you through the next steps.</span>
          </div>
          <div className="hire-process-step">
            <FaLayerGroup className="hire-process-step-icon" />
            <span className="hire-process-desc">Select the engagement model that fits your needs—hourly, part-time, or full-time.</span>
          </div>
          <div className="hire-process-step">
            <FaUserTie className="hire-process-step-icon" />
            <span className="hire-process-desc">Screen and select from our pool of talented React Native developers.</span>
          </div>
          <div className="hire-process-step">
            <FaCode className="hire-process-step-icon" />
            <span className="hire-process-desc">Sign NDA for confidentiality and security before project kickoff.</span>
          </div>
          <div className="hire-process-step">
            <FaRocket className="hire-process-step-icon" />
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
        <p className="hire-demo-desc">Our React Native developers deliver robust, cross-platform, and high-performance mobile experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-demo-cta">Get Started with React Native</Button>
      </motion.div>
    </div>
  );
}
