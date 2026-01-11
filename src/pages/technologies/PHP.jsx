import React from 'react';
import '../../styles/technologies/tech-php.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaPhp, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools, FaDatabase } from 'react-icons/fa';

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

export default function PHP() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaRocket className="php-feature-icon" />,
      title: 'High Performance',
      desc: 'Build fast, scalable web applications with PHP.'
    },
    {
      icon: <FaDatabase className="php-feature-icon" />,
      title: 'Database Integration',
      desc: 'Seamless integration with MySQL, PostgreSQL, and more.'
    },
    {
      icon: <FaLayerGroup className="php-feature-icon" />,
      title: 'Frameworks',
      desc: 'Expertise in Laravel, Symfony, CodeIgniter, and other PHP frameworks.'
    },
    {
      icon: <FaCogs className="php-feature-icon" />,
      title: 'Custom Solutions',
      desc: 'Tailored CMS, eCommerce, and API development.'
    },
    {
      icon: <FaBolt className="php-feature-icon" />,
      title: 'Rapid Development',
      desc: 'Agile, transparent, and collaborative process.'
    }
  ];

  return (
    <div className="php-modern-page">
      {/* Hero Section */}
      <section className="php-hero">
        
        <motion.h1
          className="php-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaPhp className="php-hero-icon" /> PHP Web Development
        </motion.h1>
        <motion.p
          className="php-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build secure, scalable, and high-performance web solutions with our expert PHP team.<br />
          We specialize in custom applications, CMS, eCommerce, and API integrations.
        </motion.p>
        <motion.div
          className="php-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="php-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="php-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="php-features-header">
          <h2 className="php-about-title">Why Choose PHP?</h2>
          <p>
            We deliver robust, high-performance PHP solutions tailored to your business needs.<br />
            Our team leverages the latest frameworks and best practices to ensure your web app stands out.<br />
            Partner with us for a collaborative, transparent, and results-driven development process.
          </p>
        </div>
        <div className="php-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="php-feature-card php-feature-card-border"
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
        className="php-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="php-about-title">About PHP</h2>
        <p className="php-about-text">
          PHP is a flexible, open-source language for building secure, scalable, and high-performance web applications.<br />
          We leverage PHP for custom CMS, eCommerce, and API integrations.
        </p>
        <div className="php-about-extra php-about-extra-accent">
          <h3 className="php-why-title">Why PHP?</h3>
          <ul className="php-why-list">
            <li>High-performance web app development</li>
            <li>Expertise in modern PHP frameworks</li>
            <li>Custom CMS, eCommerce, and API solutions</li>
            <li>Agile, collaborative development process</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="php-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="php-about-title">Our PHP Expertise</h2>
        <ul className="php-expertise-list">
          <li>Custom web app and CMS development</li>
          <li>eCommerce platform development</li>
          <li>API integration and backend services</li>
          <li>Migration and modernization of legacy apps</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="php-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="php-about-title">Client Success Stories</h2>
        <div className="php-stories-cards">
          <div className="php-story-card">
            <div className="php-why-title">eCommerce Platform Launch</div>
            <div>We delivered a scalable eCommerce platform for a retail client, integrating payment gateways and inventory management.</div>
          </div>
          <div className="php-story-card">
            <div className="php-why-title">Custom CMS Solution</div>
            <div>Our team built a custom CMS for a media company, streamlining content management and publishing workflows.</div>
          </div>
          <div className="php-story-card">
            <div className="php-why-title">API Integration Project</div>
            <div>We integrated third-party APIs for a SaaS provider, enabling new features and improving user experience.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
