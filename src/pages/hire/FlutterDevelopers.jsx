import React from 'react';
import '../../styles/hire/hire-flutter.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import ResumeForm from '../../components/ResumeForm';
import { SiFlutter } from 'react-icons/si';
import { FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function FlutterDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-flutter">
      {/* Hero Section */}
      <section className="hire-hero">
        <div className="hire-hero-text">
          <h1 className="hero-title">
            <SiFlutter className="hero-icon" /> Hire Flutter Developers
          </h1>
          <p className="hero-sub">
            Build beautiful, cross-platform mobile apps with our expert Flutter developers. We combine creative design and technical excellence to deliver high-performance, scalable solutions for startups and enterprises alike.
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
            <h3 className="hire-card-title"><FaCode className="hire-icon" /> Flutter Developer</h3>
            <p>
              As a Flutter Developer, you will create high-performance mobile apps from a single codebase for both iOS and Android. Your responsibilities include custom widget development, animations, rapid prototyping, and seamless deployment.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaTools className="hire-icon" /> Tools & Frameworks</h3>
            <p>
              Our team uses Flutter, Dart, Firebase, RESTful APIs, and CI/CD pipelines to deliver scalable and visually stunning mobile solutions.
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
              College students should have completed at least two mini Flutter projects and one main project, demonstrating proficiency in core Flutter concepts, UI design, and basic deployment.
            </p>
          </div>
          <div className="hire-card">
            <h3 className="hire-card-title"><FaUserTie className="hire-icon" /> Passout Students</h3>
            <p>
              Passout students must have 1–3 years of experience in Flutter development, a portfolio of published apps, and expertise in modern tools and frameworks.
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
            <p>Our Flutter developers have deep expertise in cross-platform mobile app development, ensuring innovative and reliable solutions for every business need.</p>
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
            <span>Screen and select from our pool of talented Flutter developers.</span>
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
        <p className="hire-demo-desc">Our Flutter developers deliver beautiful, high-performance, and scalable mobile experiences for every business.</p>
        <Button onClick={() => navigate('/contact')} className="hire-demo-cta">Get Started with Flutter</Button>
      </motion.div>
    </div>
  );
}
