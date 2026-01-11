import React from 'react';
import '../../styles/technologies/tech-nodejs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaNodeJs, FaServer, FaDatabase, FaBolt, FaTools, FaLayerGroup, FaRocket ,FaCogs } from 'react-icons/fa';
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

export default function NodeJS() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaNodeJs className="nodejs-feature-icon" />,
      title: 'Backend Apps',
      desc: 'Build robust backend applications with Node.js.'
    },
    {
      icon: <FaDatabase className="nodejs-feature-icon" />,
      title: 'Database Integration',
      desc: 'Seamless integration with MongoDB, MySQL, PostgreSQL, and more.'
    },
    {
      icon: <FaLayerGroup className="nodejs-feature-icon" />,
      title: 'Frameworks',
      desc: 'Expertise in Express, NestJS, Koa, and other Node.js frameworks.'
    },
    {
      icon: <FaCogs className="nodejs-feature-icon" />,
      title: 'Custom Solutions',
      desc: 'Tailored APIs, microservices, and real-time solutions.'
    },
    {
      icon: <FaBolt className="nodejs-feature-icon" />,
      title: 'Rapid Development',
      desc: 'Agile, transparent, and collaborative process.'
    }
  ];

  return (
    <div className="nodejs-modern-page">
      {/* Hero Section */}
      <section className="nodejs-hero">
        
        <motion.h1
          className="nodejs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaNodeJs className="nodejs-hero-icon" /> Node.JS Development
        </motion.h1>
        <motion.p
          className="nodejs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Reliable backend and API solutions using Node.js.<br />
          We deliver maintainable, scalable, and secure Node.js applications.
        </motion.p>
        <motion.div
          className="nodejs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="nodejs-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="nodejs-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="nodejs-features-header">
          <h2 className="nodejs-about-title">Why Choose Node.JS?</h2>
          <p>
            We build reliable, scalable backend and API apps using Node.js.<br />
            Our team ensures seamless database integration and real-time solutions.<br />
            Partner with us for future-ready business solutions.
          </p>
        </div>
        <div className="nodejs-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="nodejs-feature-card nodejs-feature-card-border"
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
        className="nodejs-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="nodejs-about-title">About Node.JS</h2>
        <p className="nodejs-about-text">
          Node.js is a versatile runtime for building reliable backend and API applications, with strong support for database integration and real-time systems.<br />
          We leverage Node.js for interactive dashboards, business automation, and seamless integrations.
        </p>
        <div className="nodejs-about-extra nodejs-about-extra-accent">
          <h3 className="nodejs-why-title">Why Node.JS?</h3>
          <ul className="nodejs-why-list">
            <li>Robust backend and API app development</li>
            <li>Seamless database integration</li>
            <li>Real-time system modernization</li>
            <li>Full support for Node.js frameworks</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="nodejs-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="nodejs-about-title">Our Node.JS Expertise</h2>
        <ul className="nodejs-expertise-list">
          <li>Backend and API app development</li>
          <li>Real-time communication and collaboration tools</li>
          <li>Database integration and backend services</li>
          <li>Migration and modernization of legacy systems</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="nodejs-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="nodejs-about-title">Client Success Stories</h2>
        <div className="nodejs-stories-cards">
          <div className="nodejs-story-card">
            <div className="nodejs-why-title">Legacy System Modernization</div>
            <div>We migrated a legacy backend system to Node.js, improving reliability and maintainability for a financial client.</div>
          </div>
          <div className="nodejs-story-card">
            <div className="nodejs-why-title">Custom API Solution</div>
            <div>Our team built a custom API platform for a manufacturing company, streamlining operations and reporting.</div>
          </div>
          <div className="nodejs-story-card">
            <div className="nodejs-why-title">Real-Time Automation</div>
            <div>We automated data workflows for a healthcare provider, integrating Node.js apps with MongoDB and PostgreSQL.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
