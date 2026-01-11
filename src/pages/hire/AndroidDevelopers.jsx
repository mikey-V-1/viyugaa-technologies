import React from 'react';
import { useNavigate } from 'react-router-dom';   
import '../../styles/hire/hire-android.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { FaAndroid, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function AndroidDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-android">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title">
            <FaAndroid className="hero-icon" /> Hire Android Developers
          </h1>
          <p className="hero-sub">
            Unlock the power of mobile innovation with our expert Android developers. We build scalable, secure, and user-friendly Android apps tailored to your business needs, leveraging the latest tools and frameworks for optimal performance and seamless user experiences.
          </p>
          <ul className="hire-feature-list">
            <li><FaRocket className="hire-icon" /> Native Performance</li>
            <li><FaCogs className="hire-icon" /> Scalable Solutions</li>
            <li><FaBolt className="hire-icon" /> Modern Tech Stack</li>
            <li><FaUserGraduate className="hire-icon" /> Expert Team</li>
          </ul>
        </div>
      </section>

      {/* Job Roles & Services */}
      <section>
        <h2 className="hire-section-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> Android Developer</h3>
            <p>
              As an Android Developer, you will design and develop custom Android applications using Kotlin and Java. Your responsibilities include building enterprise solutions, optimizing app performance, and ensuring secure, scalable deployments to the Play Store. You’ll collaborate on UI/UX, integrate APIs, and provide ongoing support for app maintenance and updates.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p className="hire-card-desc">
              Our team utilizes Android Studio, Kotlin, Java, Jetpack libraries, Firebase, and RESTful APIs to deliver robust mobile solutions. We leverage modern design patterns, automated testing, and CI/CD pipelines for efficient development and deployment.
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
              College students should have completed at least two mini Android projects and one main project, demonstrating proficiency in core Android concepts, UI design, and basic app deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p>
              Passout students must have 1–3 years of experience in Android development, a portfolio of published apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
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
            <p>Our Android developers have deep expertise in mobile app development, ensuring innovative and reliable solutions for every business need.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaBolt className="hire-icon" /> Cost Savings</h3>
            <p>Flexible engagement models and competitive rates make it easy to access top talent for any project size.</p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCogs className="hire-icon" /> Quality & Speed</h3>
            <p>Agile development, rapid delivery, and high-quality standards ensure your app launches on time and performs flawlessly.</p>
          </div>
        </div>
      </section>

  {/* Hiring Process */}
  <section className="hire-process">
        <h2 className="dev-title">Hiring Process</h2>
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
            <span>Screen and select from our pool of talented Android developers.</span>
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
      <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="hire-animation-demo">
        <h2 className="hire-demo-title">Animated Demo</h2>
        <p className="hire-demo-desc">Our Android developers deliver innovative, secure, and scalable mobile experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-demo-cta">Get Started with Android</Button>
      </motion.div>
    </div>
  );
}
