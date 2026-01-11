
import React from 'react';
import '../../styles/technologies/tech-react-native.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools, FaApple, FaAndroid, FaPalette, FaCode } from 'react-icons/fa';

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.6 }
  }),
};

export default function ReactNative() {
  const navigate = useNavigate();
  return (
    <div className="reactnative-modern-page">
      {/* Hero Section */}
      <section className="reactnative-hero">
        
        <motion.h1
          className="reactnative-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaMobileAlt className="reactnative-hero-icon" /> React Native App Development
        </motion.h1>
        <motion.p
          className="reactnative-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build cross-platform, high-performance mobile apps with our expert React Native team.<br />
          We specialize in custom iOS and Android solutions using React Native.<br />
          From startups to enterprises, our React Native apps are designed for speed, flexibility, and native feel.
        </motion.p>
        <motion.div
          className="reactnative-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="reactnative-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="reactnative-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="reactnative-features-header">
          <h2 className="reactnative-about-title">Why Choose Our React Native Developers?</h2>
          <p>
            We deliver robust, high-performance React Native solutions tailored to your business needs.<br />
            Our team leverages the latest tools and best practices to ensure your app stands out.<br />
            Partner with us for a collaborative, transparent, and results-driven development process.
          </p>
        </div>
        <div className="reactnative-features-cards">
          {[
            {
              icon: <FaCogs className="reactnative-feature-icon" />, 
              title: "Modern Tech Stack",
              desc: "React Native, Expo, TypeScript, and the latest APIs.<br />We leverage modern tools to build future-ready apps that are easy to maintain and scale."
            },
            {
              icon: <FaLayerGroup className="reactnative-feature-icon" />, 
              title: "Custom UI/UX",
              desc: "Stunning, intuitive interfaces for every device.<br />Our designers focus on usability and aesthetics to create delightful user experiences."
            },
            {
              icon: <FaBolt className="reactnative-feature-icon" />, 
              title: "Performance",
              desc: "Fast, reliable, and native-feeling apps.<br />We optimize every layer for speed, responsiveness, and smooth UX."
            },
            {
              icon: <FaTools className="reactnative-feature-icon" />, 
              title: "Full Lifecycle",
              desc: "From concept to app store launch and ongoing support.<br />We guide you through every stage for a smooth journey."
            }
          ].map((feature, i) => (
            <motion.div
              className="reactnative-feature-card reactnative-feature-card-border"
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
        className="reactnative-about reactnative-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="reactnative-about-title">About React Native Development</h2>
        <p className="reactnative-about-text">
          React Native is a popular framework for building cross-platform mobile apps with native performance and rich UI/UX.<br />
          Our team leverages React Native for custom apps, MVPs, and enterprise solutions.<br />
          Whether you need a business app or a complex platform, we have the expertise to deliver.<br />
          Let us help you achieve your business goals with a world-class React Native application.
        </p>
        <div className="reactnative-about-extra reactnative-about-extra-accent">
          <h3 className="reactnative-why-title">Why React Native?</h3>
          <ul className="reactnative-why-list">
            <li>Single codebase for iOS and Android</li>
            <li>Native performance and look</li>
            <li>Rich UI/UX and fast development</li>
            <li>Strong community and ecosystem</li>
          </ul>
        </div>
      </motion.section>

      {/* Our React Native Expertise Section */}
      <motion.section
        className="reactnative-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="reactnative-about-title">Our React Native Expertise</h2>
        <ul>
          <li>Cross-platform app development (iOS, Android)</li>
          <li>Custom UI/UX design and animation</li>
          <li>Integration with APIs and cloud services</li>
          <li>App modernization and migration</li>
          <li>Automated testing, CI/CD, and app store deployment</li>
        </ul>
      </motion.section>

      {/* Client Success Stories Section */}
      <motion.section
        className="reactnative-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="reactnative-about-title">Client Success Stories</h2>
        <div className="reactnative-stories-cards">
          <div className="reactnative-story-card">
            <h3>Fitness Tracking App</h3>
            <p>We built a cross-platform fitness app with real-time tracking, social features, and seamless device integration.</p>
          </div>
          <div className="reactnative-story-card">
            <h3>Business Productivity Suite</h3>
            <p>Our team delivered a React Native suite for a business client, enabling mobile productivity and collaboration.</p>
          </div>
          <div className="reactnative-story-card">
            <h3>Retail Loyalty Platform</h3>
            <p>We developed a loyalty app for a retail chain, integrating with POS systems and providing seamless rewards for customers.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
