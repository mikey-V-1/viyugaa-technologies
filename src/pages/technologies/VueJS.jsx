
import React from 'react';
import '../../styles/technologies/tech-vuejs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaCogs, FaLayerGroup, FaRocket, FaMobileAlt, FaChalkboardTeacher, FaBolt } from 'react-icons/fa';
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

export default function VueJS() {
  const navigate = useNavigate();
  return (
    <div className="vuejs-modern-page">
      {/* Hero Section */}
      <section className="vuejs-hero">
       
        <motion.h1
          className="vuejs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaRocket className="vuejs-hero-icon" /> Vue.js Development
        </motion.h1>
        <motion.p
          className="vuejs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We deliver modern, maintainable, and scalable solutions for your business using Vue.js.<br />
          Build fast, flexible web apps with our expert Vue.js team.
        </motion.p>
        <motion.div
          className="vuejs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="vuejs-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="vuejs-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="vuejs-features-header">
          <h2 className="vuejs-about-title">Why Choose Vue.js?</h2>
          <p>
            We build fast, flexible, and maintainable web apps using Vue.js.<br />
            Our team leverages the latest Vue.js ecosystem and best practices.<br />
            Partner with us for a collaborative, transparent, and results-driven process.
          </p>
        </div>
        <div className="vuejs-features-cards">
          {[
            {
              icon: <FaCogs className="vuejs-feature-icon" />, 
              title: "Reactive Data Binding",
              desc: "Seamless UI updates and state management for dynamic apps."
            },
            {
              icon: <FaLayerGroup className="vuejs-feature-icon" />, 
              title: "Component-Based Architecture",
              desc: "Reusable, modular components for scalable solutions."
            },
            {
              icon: <FaBolt className="vuejs-feature-icon" />, 
              title: "Performance",
              desc: "Virtual DOM and optimized rendering for speed."
            },
            {
              icon: <FaRocket className="vuejs-feature-icon" />, 
              title: "Ecosystem",
              desc: "Vue CLI, Vuex, Vue Router, and UI libraries for rapid development."
            }
          ].map((feature, i) => (
            <motion.div
              className="vuejs-feature-card vuejs-feature-card-border"
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
        className="vuejs-about vuejs-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="vuejs-about-title">About Vue.js</h2>
        <p className="vuejs-about-text">
          Vue.js is a progressive JavaScript framework for building user interfaces. Its core library focuses on the view layer only, making it easy to integrate with other libraries or existing projects.<br />
          Vue.js is known for its simplicity, flexibility, and performance.<br />
          We use Vue.js to deliver modern, maintainable, and scalable solutions for every industry.
        </p>
        <div className="vuejs-about-extra vuejs-about-extra-accent">
          <h3 className="vuejs-why-title">Why Vue.js?</h3>
          <ul className="vuejs-why-list">
            <li>Reactive data binding and state management</li>
            <li>Component-based architecture</li>
            <li>Rich ecosystem and tooling</li>
            <li>Fast, flexible, and easy to integrate</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="vuejs-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="vuejs-about-title">Our Vue.js Expertise</h2>
        <ul>
          <li>Business websites and custom solutions</li>
          <li>Dashboards, admin panels, and analytics</li>
          <li>eCommerce platforms and real-time apps</li>
          <li>Mobile apps (NativeScript + Vue)</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="vuejs-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="vuejs-about-title">Client Success Stories</h2>
        <div className="vuejs-stories-cards">
          <div className="vuejs-story-card">
            <h3>Business Website</h3>
            <p>Developed a modern, responsive website for a startup, boosting engagement and conversions.</p>
          </div>
          <div className="vuejs-story-card">
            <h3>eCommerce Platform</h3>
            <p>Built a scalable online store with seamless user experience and real-time inventory updates.</p>
          </div>
          <div className="vuejs-story-card">
            <h3>Admin Dashboard</h3>
            <p>Created an interactive analytics dashboard for enterprise management and reporting.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
