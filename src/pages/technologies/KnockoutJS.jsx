

import React from 'react';
import '../../styles/technologies/tech-knockoutjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaCode, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

export default function KnockoutJS() {
  const navigate = useNavigate();
  return (
    <div className="knockoutjs-modern-page">
      {/* Hero Section */}
      <section className="knockoutjs-hero">
        
        <motion.h1
          className="knockoutjs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaCode className="knockoutjs-hero-icon" /> Knockout.js Development
        </motion.h1>
        <motion.p
          className="knockoutjs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our team leverages MVVM architecture for seamless data binding and UI updates.<br />
          We deliver robust, maintainable Knockout.js solutions for modern businesses.
        </motion.p>
        <motion.div
          className="knockoutjs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="knockoutjs-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="knockoutjs-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="knockoutjs-features-header">
          <h2 className="knockoutjs-about-title">Why Choose Knockout.js?</h2>
          <p>
            We build dynamic, responsive web apps using Knockout.js and the MVVM pattern.<br />
            Our team ensures maintainable code, seamless UI updates, and integration with modern tools.<br />
            Partner with us for scalable, future-ready solutions.
          </p>
        </div>
        <div className="knockoutjs-features-cards">
          {[
            {
              icon: <FaCogs className="knockoutjs-feature-icon" />, 
              title: "MVVM Pattern",
              desc: "Separation of concerns for maintainable code.<br />Declarative bindings and automatic UI updates."
            },
            {
              icon: <FaLayerGroup className="knockoutjs-feature-icon" />, 
              title: "Custom Components",
              desc: "Reusable, modular UI components for scalable apps."
            },
            {
              icon: <FaBolt className="knockoutjs-feature-icon" />, 
              title: "Performance",
              desc: "Lightweight, fast, and efficient for real-time apps."
            },
            {
              icon: <FaTools className="knockoutjs-feature-icon" />, 
              title: "Ecosystem",
              desc: "Validation, mapping, and integration with jQuery and other libraries."
            }
          ].map((feature, i) => (
            <motion.div
              className="knockoutjs-feature-card knockoutjs-feature-card-border"
              key={feature.title}
              custom={i}
              variants={featureCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.desc }} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="knockoutjs-about knockoutjs-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="knockoutjs-about-title">About Knockout.js</h2>
        <p className="knockoutjs-about-text">
          Knockout.js is a lightweight JavaScript library for building rich, responsive user interfaces with a clean data model.<br />
          It uses the MVVM pattern, declarative bindings, and custom components for maintainable, testable code.<br />
          We leverage Knockout.js to deliver interactive dashboards, real-time apps, and seamless integrations.
        </p>
        <div className="knockoutjs-about-extra knockoutjs-about-extra-accent">
          <h3 className="knockoutjs-why-title">Why Knockout.js?</h3>
          <ul className="knockoutjs-why-list">
            <li>MVVM architecture for maintainability</li>
            <li>Declarative bindings and custom components</li>
            <li>Integration with jQuery and other libraries</li>
            <li>Lightweight and fast for real-time apps</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="knockoutjs-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="knockoutjs-about-title">Our Knockout.js Expertise</h2>
        <ul>
          <li>Business apps and custom solutions</li>
          <li>Dashboards, admin panels, and analytics</li>
          <li>Real-time apps and SPA development</li>
          <li>Integration with APIs and third-party tools</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="knockoutjs-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="knockoutjs-about-title">Client Success Stories</h2>
        <div className="knockoutjs-stories-cards">
          <div className="knockoutjs-story-card">
            <h3>Business Dashboard</h3>
            <p>Delivered a dynamic analytics dashboard for a global enterprise, enabling real-time insights and reporting.</p>
          </div>
          <div className="knockoutjs-story-card">
            <h3>Custom Admin Panel</h3>
            <p>Built a secure, feature-rich admin panel for a SaaS startup, streamlining operations and management.</p>
          </div>
          <div className="knockoutjs-story-card">
            <h3>Real-Time Chat App</h3>
            <p>Developed a real-time chat and notification app for a tech company, enhancing user engagement.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
