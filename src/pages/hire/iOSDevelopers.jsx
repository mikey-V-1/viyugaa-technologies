import React from 'react';
import '../../styles/hire/hire-ios.css';
import { FaApple, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResumeForm from '../../components/ResumeForm';
import { useNavigate } from 'react-router-dom';

export default function iOSDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-ios">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title hero-title--center">
            <FaApple className="hero-icon" /> Hire iOS Developers
          </h1>
          <p className="hero-sub hero-sub--center">
            Transform your ideas into stunning iOS applications with our experienced developers. We deliver secure, scalable, and user-centric iOS solutions, leveraging the latest Apple technologies and design principles for maximum impact.
          </p>
          <ul className="hire-feature-list hire-feature-list--center">
            <li><FaRocket className="hire-icon" /> Native iOS</li>
            <li><FaCogs className="hire-icon" /> Scalable Solutions</li>
            <li><FaBolt className="hire-icon" /> Optimized Performance</li>
            <li><FaUserGraduate className="hire-icon" /> Expert Team</li>
          </ul>
        </div>
      </section>
      {/* Job Roles & Services */}
      <section className="hire-job-roles">
        <h2 className="dev-title">Job Roles & Services</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> iOS Developer</h3>
            <p className="hire-card-desc">
              As an iOS Developer, you will craft elegant, high-performance apps for iPhone and iPad. Your responsibilities include custom iOS app development, UI/UX design, App Store submission, and ongoing maintenance and updates. You’ll work with Swift & Objective-C, integrate APIs, and optimize for security and scalability.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Technologies</h3>
            <p className="hire-card-desc">
              Our team leverages Swift, Objective-C, Xcode, UIKit, SwiftUI, Core Data, Firebase, and RESTful APIs to deliver robust iOS solutions. We use automated testing, CI/CD pipelines, and Apple’s Human Interface Guidelines for quality and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Requirements */}
      <section className="hire-candidate-reqs">
        <h2 className="dev-title">Candidate Requirements</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserGraduate className="hire-icon" /> College Students</h3>
            <p className="hire-card-desc">
              College students should have completed at least two mini iOS projects and one main project, demonstrating proficiency in Swift, UI design, and basic app deployment. Strong communication and teamwork skills are essential.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p className="hire-card-desc">
              Passout students must have 1–3 years of experience in iOS development, a portfolio of published apps, and expertise in modern tools and frameworks. Experience in collaborative environments and problem-solving is highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hire-benefits">
        <h2 className="dev-title">Why Hire From Us?</h2>
        <div className="hire-cards">
          <div className="hire-card">
            <h3 className="hire-card-title"><FaRocket className="hire-icon" /> Specialized Skills</h3>
            <p className="hire-card-desc">Our iOS developers have deep expertise in Apple technologies, ensuring innovative and reliable solutions for every business need.</p>
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
            <span>Screen and select from our pool of talented iOS developers.</span>
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
        <p className="hire-demo-desc">Our iOS developers deliver elegant, high-performance, and secure mobile experiences for every business.</p>
        <button onClick={() => navigate('/contact')} className="hire-demo-cta">Get Started with iOS</button>
      </motion.div>
    </div>
  );
}
