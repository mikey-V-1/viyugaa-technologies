import React from 'react';
import '../../styles/technologies/tech-mongodb.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaDatabase, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools, FaCloud } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function MongoDB() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaDatabase className="mongodb-feature-icon" />,
      title: 'NoSQL Database',
      desc: 'Flexible, scalable document-oriented database for modern apps.'
    },
    {
      icon: <FaLayerGroup className="mongodb-feature-icon" />,
      title: 'Cloud Integration',
      desc: 'Seamless integration with cloud services and platforms.'
    },
    {
      icon: <FaRocket className="mongodb-feature-icon" />,
      title: 'Performance',
      desc: 'High performance, real-time analytics, and fast queries.'
    },
    {
      icon: <FaCogs className="mongodb-feature-icon" />,
      title: 'Ecosystem',
      desc: 'Mongoose ODM, Atlas cloud, Compass GUI, Aggregation Framework.'
    },
    {
      icon: <FaBolt className="mongodb-feature-icon" />,
      title: 'Reliability',
      desc: 'High availability, backup, and recovery tools.'
    }
  ];

  return (
    <div className="mongodb-modern-page">
      {/* Hero Section */}
      <section className="mongodb-hero">
        
        <motion.h1
          className="mongodb-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaDatabase className="mongodb-hero-icon" /> MongoDB Development
        </motion.h1>
        <motion.p
          className="mongodb-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Reliable NoSQL database solutions using MongoDB.<br />
          We deliver scalable, flexible, and secure MongoDB applications.
        </motion.p>
        <motion.div
          className="mongodb-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="mongodb-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="mongodb-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mongodb-features-header">
          <h2 className="mongodb-about-title">Why Choose MongoDB?</h2>
          <p>
            We build reliable, scalable NoSQL apps using MongoDB.<br />
            Our team ensures seamless cloud integration and real-time analytics.<br />
            Partner with us for future-ready business solutions.
          </p>
        </div>
        <div className="mongodb-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="mongodb-feature-card mongodb-feature-card-border"
              key={feature.title}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
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
        className="mongodb-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="mongodb-about-title">About MongoDB</h2>
        <p className="mongodb-about-text">
          MongoDB is a versatile NoSQL database for building scalable, flexible, and high-performance applications.<br />
          We leverage MongoDB for real-time analytics, cloud integration, and seamless data management.
        </p>
        <div className="mongodb-about-extra mongodb-about-extra-accent">
          <h3 className="mongodb-why-title">Why MongoDB?</h3>
          <ul className="mongodb-why-list">
            <li>Flexible document-oriented data model</li>
            <li>Seamless cloud and platform integration</li>
            <li>Real-time analytics and reporting</li>
            <li>Full support for MongoDB ecosystem tools</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="mongodb-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="mongodb-about-title">Our MongoDB Expertise</h2>
        <ul className="mongodb-expertise-list">
          <li>NoSQL app development and data modeling</li>
          <li>Real-time analytics and reporting tools</li>
          <li>Cloud integration and database services</li>
          <li>Migration and modernization of legacy systems</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="mongodb-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="mongodb-about-title">Client Success Stories</h2>
        <div className="mongodb-stories-cards">
          <div className="mongodb-story-card">
            <div className="mongodb-why-title">Legacy System Modernization</div>
            <div>We migrated a legacy backend system to MongoDB, improving scalability and maintainability for a financial client.</div>
          </div>
          <div className="mongodb-story-card">
            <div className="mongodb-why-title">Custom NoSQL Solution</div>
            <div>Our team built a custom NoSQL platform for a manufacturing company, streamlining operations and reporting.</div>
          </div>
          <div className="mongodb-story-card">
            <div className="mongodb-why-title">Real-Time Analytics</div>
            <div>We automated data workflows for a healthcare provider, integrating MongoDB apps with Node.js and cloud services.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
