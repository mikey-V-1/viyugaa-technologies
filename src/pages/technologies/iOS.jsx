

import React from 'react';
import '../../styles/technologies/tech-ios.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools, FaMobileAlt } from 'react-icons/fa';

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.6 }
  }),
};

export default function iOS() {
  const navigate = useNavigate();
  return (
    <div className="ios-modern-page">
      {/* Hero Section */}
      <section className="ios-hero">
        <motion.div
          className="ios-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/ios.png" alt="iOS" className="ios-hero-image" />
        </motion.div>
        <motion.h1
          className="ios-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaApple className="ios-hero-icon" /> iOS App Development
        </motion.h1>
        <motion.p
          className="ios-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build elegant, secure, and high-performance iOS apps with our expert team.<br />
          We specialize in crafting custom solutions for iPhone and iPad that delight users and drive business growth.<br />
          From startups to enterprises, our iOS apps are designed for performance, security, and seamless user experience.
        </motion.p>
        <motion.div
          className="ios-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="ios-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="ios-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ios-features-header">
          <h2 className="ios-about-title">Why Choose Our iOS Developers?</h2>
          <p>
            We deliver robust, high-performance iOS solutions tailored to your business needs.<br />
            Our team stays ahead of the curve, adopting the latest Apple technologies and best practices to ensure your app stands out in the App Store.<br />
            Partner with us for a collaborative, transparent, and results-driven development process.
          </p>
        </div>
        <div className="ios-features-cards">
          {[
            {
              icon: <FaCogs className="ios-feature-icon" />, 
              title: "Modern Tech Stack",
              desc: "Swift, Objective-C, SwiftUI, and the latest iOS APIs.<br />We leverage cutting-edge tools to build future-ready apps that are easy to maintain and scale."
            },
            {
              icon: <FaMobileAlt className="ios-feature-icon" />, 
              title: "Custom UI/UX",
              desc: "Stunning, intuitive interfaces for every Apple device.<br />Our designers focus on usability and aesthetics to create delightful user experiences."
            },
            {
              icon: <FaBolt className="ios-feature-icon" />, 
              title: "Performance",
              desc: "Fast, reliable, and battery-efficient apps.<br />We optimize every layer of your app for speed, responsiveness, and low resource usage."
            },
            {
              icon: <FaTools className="ios-feature-icon" />, 
              title: "Full Lifecycle",
              desc: "From concept to App Store launch and ongoing support.<br />We guide you through every stage, ensuring a smooth journey from idea to success."
            }
          ].map((feature, i) => (
            <motion.div
              className="ios-feature-card ios-feature-card-border"
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
        className="ios-about ios-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="ios-about-title">About iOS Development</h2>
        <p className="ios-about-text">
          iOS powers millions of Apple devices worldwide, from iPhones and iPads to Apple Watches and Apple TVs.<br />
          Our team leverages the latest tools and best practices to deliver secure, scalable, and user-friendly apps for every industry.<br />
          Whether you need a consumer-facing app or a complex enterprise solution, we have the expertise to turn your vision into reality.<br />
          Let us help you reach your audience and achieve your business goals with a world-class iOS application.
        </p>
        <div className="ios-about-extra ios-about-extra-accent">
          <h3 className="ios-why-title">Why iOS?</h3>
          <ul className="ios-why-list">
            <li>Premium user base and high engagement</li>
            <li>Seamless integration with Apple ecosystem</li>
            <li>Rich device integration: iPhone, iPad, Watch, TV</li>
            <li>Strong security and privacy features</li>
          </ul>
        </div>
      </motion.section>

      {/* Our iOS Expertise Section */}
      <motion.section
        className="ios-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="ios-about-title">Our iOS Expertise</h2>
        <ul>
          <li>Native iOS app development using Swift and Objective-C</li>
          <li>Custom UI/UX design for all Apple device sizes</li>
          <li>Integration with Apple services, APIs, and IoT devices</li>
          <li>App modernization, migration, and legacy support</li>
          <li>Automated testing, CI/CD, and App Store deployment</li>
        </ul>
      </motion.section>

      {/* Client Success Stories Section */}
      <motion.section
        className="ios-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="ios-about-title">Client Success Stories</h2>
        <div className="ios-stories-cards">
          <div className="ios-story-card">
            <h3>Fintech App for Secure Payments</h3>
            <p>We built a secure iOS payment app with Face ID authentication, real-time notifications, and seamless Apple Pay integration.</p>
          </div>
          <div className="ios-story-card">
            <h3>Healthcare Monitoring Solution</h3>
            <p>Our team delivered a HIPAA-compliant iOS app for patient monitoring, integrating with Apple Watch and HealthKit.</p>
          </div>
          <div className="ios-story-card">
            <h3>Enterprise Productivity Platform</h3>
            <p>We modernized a legacy workflow system, enabling offline-first iOS apps for 200+ field agents across the country.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
