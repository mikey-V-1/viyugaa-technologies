import React from 'react';
import '../../styles/technologies/tech-android.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { FaAndroid, FaCogs, FaLayerGroup, FaBolt, FaTools } from 'react-icons/fa';

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const features = [
  {
    icon: <FaBolt className="android-feature-icon" />,
    title: 'Performance Optimized',
    desc: 'High-performance native apps using Kotlin and best practices.'
  },
  {
    icon: <FaCogs className="android-feature-icon" />,
    title: 'Device Integration',
    desc: 'Access sensors, camera, GPS, background services, and platform APIs.'
  },
  {
    icon: <FaLayerGroup className="android-feature-icon" />,
    title: 'Scalable Architecture',
    desc: 'Modular, maintainable codebases with clean architecture patterns.'
  },
  {
    icon: <FaTools className="android-feature-icon" />,
    title: 'Testing & CI/CD',
    desc: 'Automated testing, build pipelines, and Play Store deployment support.'
  }
];

export default function Android() {
  const navigate = useNavigate();
  return (
    <div className="android-modern-page">
      {/* Hero Section */}
      <section className="android-hero">
        
        <motion.h1
          className="android-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaAndroid className="android-hero-icon" /> Android App Development
        </motion.h1>
        <motion.p
          className="android-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Reliable native Android solutions for every business.<br />
          We deliver maintainable, scalable, and secure Android applications.
        </motion.p>
        <motion.div
          className="android-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="android-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="android-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="android-features-header">
          <h2 className="android-about-title">Why Choose Android?</h2>
          <p>
            We build reliable, scalable native Android apps.<br />
            Our team delivers maintainable, secure, and high-performance solutions.
          </p>
        </div>
        <div className="android-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="android-feature-card"
              key={feature.title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureCardVariants}
            >
              <div>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
  </motion.section>

      {/* About Section */}
      <motion.section
        className="android-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="android-about-title">About Android Development</h2>
        <p className="android-about-text">
          Android powers billions of devices worldwide, from smartphones and tablets to wearables and smart TVs.<br />
          Our team leverages the latest tools and best practices to deliver secure, scalable, and user-friendly apps for every industry.<br />
          Whether you need a consumer-facing app or a complex enterprise solution, we have the expertise to turn your vision into reality.<br />
          Let us help you reach your audience and achieve your business goals with a world-class Android application.
        </p>
        <div className="android-about-extra">
          <h3 className="android-why-title">Why Android?</h3>
          <ul className="android-why-list">
            <li>Largest global user base and market share</li>
            <li>Open ecosystem and rapid innovation</li>
            <li>Rich device integration: phones, tablets, wearables, TVs, cars</li>
            <li>Flexible monetization and distribution options</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="android-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="android-about-title">Our Android Expertise</h2>
        <ul>
          <li>Native Android app development using Kotlin and Java</li>
          <li>Cross-platform solutions with React Native and Flutter</li>
          <li>Custom UI/UX design for all device sizes</li>
          <li>Integration with cloud services, APIs, and IoT devices</li>
          <li>App modernization, migration, and legacy support</li>
          <li>Automated testing, CI/CD, and Play Store deployment</li>
        </ul>
      </motion.section>

      {/* Client Success Stories Section */}
      <motion.section
        className="android-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="android-about-title">Client Success Stories</h2>
        <div className="android-stories-cards">
          <div className="android-story-card">
            <h3>Retail App for Fast-Growing Startup</h3>
            <p>We built a scalable eCommerce app that now serves 100k+ users, with real-time inventory, push notifications, and seamless checkout.</p>
          </div>
          <div className="android-story-card">
            <h3>Healthcare IoT Solution</h3>
            <p>Our team delivered a HIPAA-compliant Android app for remote patient monitoring, integrating with wearables and cloud analytics.</p>
          </div>
          <div className="android-story-card">
            <h3>Enterprise Field Service Platform</h3>
            <p>We modernized a legacy field service system, enabling offline-first Android apps for 500+ technicians across the country.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
