
import React from 'react';
import '../../styles/technologies/tech-reactjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools } from 'react-icons/fa';

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.6 }
  }),
};

export default function ReactJS() {
  const navigate = useNavigate();
  return (
    <div className="reactjs-modern-page">
      {/* Hero Section */}
      <section className="reactjs-hero">
        
        <motion.h1
          className="reactjs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaReact className="reactjs-hero-icon" /> ReactJS Development
        </motion.h1>
        <motion.p
          className="reactjs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build fast, interactive, and scalable web apps with our expert ReactJS team.<br />
          We specialize in custom SPAs, dashboards, and enterprise solutions.<br />
          From startups to enterprises, our ReactJS apps are designed for performance, flexibility, and seamless UX.
        </motion.p>
        <motion.div
          className="reactjs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="reactjs-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="reactjs-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="reactjs-features-header">
          <h2 className="reactjs-about-title">Why Choose Our ReactJS Developers?</h2>
          <p>
            We deliver robust, high-performance ReactJS solutions tailored to your business needs.<br />
            Our team leverages the latest tools and best practices to ensure your app stands out.<br />
            Partner with us for a collaborative, transparent, and results-driven development process.
          </p>
        </div>
        <div className="reactjs-features-cards">
          {[
            {
              icon: <FaCogs className="reactjs-feature-icon" />, 
              title: "Modern Tech Stack",
              desc: "ReactJS, Redux, React Router, and the latest JS APIs.<br />We leverage modern tools to build future-ready apps that are easy to maintain and scale."
            },
            {
              icon: <FaLayerGroup className="reactjs-feature-icon" />, 
              title: "Component-Based UI",
              desc: "Reusable, modular components for every use case.<br />Our designs focus on maintainability and scalability."
            },
            {
              icon: <FaBolt className="reactjs-feature-icon" />, 
              title: "Performance",
              desc: "Fast, interactive, and SEO-friendly apps.<br />We optimize every layer for speed, responsiveness, and smooth UX."
            },
            {
              icon: <FaTools className="reactjs-feature-icon" />, 
              title: "Full Lifecycle",
              desc: "From concept to deployment and ongoing support.<br />We guide you through every stage for a smooth launch."
            }
          ].map((feature, i) => (
            <motion.div
              className="reactjs-feature-card reactjs-feature-card-border"
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
        className="reactjs-about reactjs-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="reactjs-about-title">About ReactJS Development</h2>
        <p className="reactjs-about-text">
          ReactJS is a powerful JavaScript library for building user interfaces and SPAs.<br />
          Our team leverages ReactJS for custom apps, dashboards, and enterprise solutions.<br />
          Whether you need a business website or a complex platform, we have the expertise to deliver.<br />
          Let us help you achieve your business goals with a world-class ReactJS application.
        </p>
        <div className="reactjs-about-extra reactjs-about-extra-accent">
          <h3 className="reactjs-why-title">Why ReactJS?</h3>
          <ul className="reactjs-why-list">
            <li>Component-based and reusable UI</li>
            <li>Massive ecosystem and community</li>
            <li>Fast rendering and virtual DOM</li>
            <li>Easy integration with other libraries</li>
          </ul>
        </div>
      </motion.section>

      {/* Our ReactJS Expertise Section */}
      <motion.section
        className="reactjs-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="reactjs-about-title">Our ReactJS Expertise</h2>
        <ul>
          <li>SPA and dashboard development</li>
          <li>Custom UI/UX design and animation</li>
          <li>Integration with APIs and cloud services</li>
          <li>App modernization and migration</li>
          <li>Automated testing, CI/CD, and cloud deployment</li>
        </ul>
      </motion.section>

      {/* Client Success Stories Section */}
      <motion.section
        className="reactjs-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="reactjs-about-title">Client Success Stories</h2>
        <div className="reactjs-stories-cards">
          <div className="reactjs-story-card">
            <h3>Enterprise Dashboard</h3>
            <p>We built a scalable analytics dashboard for a SaaS company, supporting real-time data and custom reporting.</p>
          </div>
          <div className="reactjs-story-card">
            <h3>eCommerce Platform</h3>
            <p>Our team delivered a ReactJS-based eCommerce site with seamless checkout, product management, and user accounts.</p>
          </div>
          <div className="reactjs-story-card">
            <h3>Custom CMS</h3>
            <p>We developed a flexible CMS for a media client, enabling fast content publishing and user management.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
