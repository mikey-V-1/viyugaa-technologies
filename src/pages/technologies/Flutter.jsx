
import React from 'react';
import '../../styles/technologies/tech-flutter.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools } from 'react-icons/fa';

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.6 }
  }),
};

export default function Flutter() {
  const navigate = useNavigate();
  return (
    <div className="flutter-modern-page">
      {/* Hero Section */}
      <section className="flutter-hero">
        <motion.div
          className="flutter-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/flutter.png" alt="Flutter" className="flutter-hero-image" />
        </motion.div>
        <motion.h1
          className="flutter-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaMobileAlt className="flutter-hero-icon" /> Flutter App Development
        </motion.h1>
        <motion.p
          className="flutter-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build beautiful, high-performance cross-platform apps with our expert Flutter team.<br />
          We specialize in custom mobile, web, and desktop solutions using Flutter.<br />
          From startups to enterprises, our Flutter apps are designed for speed, flexibility, and stunning UI.
        </motion.p>
        <motion.div
          className="flutter-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="flutter-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="flutter-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flutter-features-header">
          <h2 className="flutter-about-title">Why Choose Our Flutter Developers?</h2>
          <p>
            We deliver robust, high-performance Flutter solutions tailored to your business needs.<br />
            Our team leverages the latest tools and best practices to ensure your app stands out.<br />
            Partner with us for a collaborative, transparent, and results-driven development process.
          </p>
        </div>
        <div className="flutter-features-cards">
          {[
            {
              icon: <FaCogs className="flutter-feature-icon" />, 
              title: "Modern Tech Stack",
              desc: "Flutter, Dart, Firebase, and the latest cross-platform APIs.<br />We leverage modern tools to build future-ready apps that are easy to maintain and scale."
            },
            {
              icon: <FaLayerGroup className="flutter-feature-icon" />, 
              title: "Custom UI/UX",
              desc: "Stunning, intuitive interfaces for every device.<br />Our designers focus on usability and aesthetics to create delightful user experiences."
            },
            {
              icon: <FaBolt className="flutter-feature-icon" />, 
              title: "Performance",
              desc: "Fast, reliable, and beautiful apps.<br />We optimize every layer for speed, responsiveness, and native feel."
            },
            {
              icon: <FaTools className="flutter-feature-icon" />, 
              title: "Full Lifecycle",
              desc: "From concept to app store launch and ongoing support.<br />We guide you through every stage for a smooth journey."
            }
          ].map((feature, i) => (
            <motion.div
              className="flutter-feature-card"
              key={feature.title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureCardVariants}
            >
              <div>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.desc }} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="flutter-about flutter-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="flutter-about-title">About Flutter Development</h2>
        <p className="flutter-about-text">
          Flutter is Google's open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.<br />
          Our team leverages Flutter for beautiful, fast, and scalable apps across platforms.<br />
          Whether you need a consumer app or a complex business solution, we have the expertise to deliver.<br />
          Let us help you achieve your goals with a world-class Flutter application.
        </p>
        <div className="flutter-about-extra flutter-about-extra-accent">
          <h3 className="flutter-why-title">Why Flutter?</h3>
          <ul className="flutter-why-list">
            <li>Single codebase for all platforms</li>
            <li>Rich widget library and expressive UI</li>
            <li>Fast development and hot reload</li>
            <li>Strong community and ecosystem</li>
          </ul>
        </div>
      </motion.section>

      {/* Our Flutter Expertise Section */}
      <motion.section
        className="flutter-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="flutter-about-title">Our Flutter Expertise</h2>
        <ul>
          <li>Cross-platform app development (iOS, Android, Web, Desktop)</li>
          <li>Custom UI/UX design and animation</li>
          <li>Integration with Firebase, APIs, and cloud services</li>
          <li>App modernization and migration</li>
          <li>Automated testing, CI/CD, and app store deployment</li>
        </ul>
      </motion.section>

      {/* Client Success Stories Section */}
      <motion.section
        className="flutter-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="flutter-about-title">Client Success Stories</h2>
        <div className="flutter-stories-cards">
          <div className="flutter-story-card">
            <h3>Fintech Mobile App</h3>
            <p>We built a cross-platform fintech app with real-time data, secure authentication, and beautiful UI for both iOS and Android.</p>
          </div>
          <div className="flutter-story-card">
            <h3>Healthcare Dashboard</h3>
            <p>Our team delivered a Flutter web dashboard for a healthcare provider, enabling real-time analytics and patient management.</p>
          </div>
          <div className="flutter-story-card">
            <h3>Retail Loyalty Platform</h3>
            <p>We developed a loyalty app for a retail chain, integrating with POS systems and providing seamless rewards for customers.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
