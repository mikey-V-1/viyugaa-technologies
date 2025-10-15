import React from 'react';
import '../../styles/technologies/tech-angularjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FaAngular, FaCogs, FaLayerGroup, FaBolt, FaTools } from 'react-icons/fa';

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

export default function AngularJS() {
  const navigate = useNavigate();
  return (
  <div className="angularjs-modern-page">
      {/* Hero Section */}
      <section className="angularjs-hero">
        <motion.div
          className="angularjs-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/angularjs.png" alt="AngularJS" className="angularjs-hero-image" />
        </motion.div>
        <motion.h1
          className="angularjs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaAngular className="angularjs-hero-icon" /> AngularJS Development
        </motion.h1>
        <motion.p
          className="angularjs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build robust, scalable, and maintainable web applications with our expert AngularJS team.<br />
          We deliver enterprise-grade solutions using the latest AngularJS ecosystem and best practices.
        </motion.p>
        <motion.div
          className="angularjs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="angularjs-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <div className="angularjs-details">
        <motion.section
          className="angularjs-features"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="angularjs-features-header">
            <h2 className="angularjs-about-title">Why Choose Our AngularJS Developers?</h2>
            <p>
              We deliver robust, high-performance AngularJS solutions tailored to your business needs.<br />
              Our team stays ahead of the curve, adopting the latest technologies and best practices to ensure your app stands out in the crowded marketplace.<br />
              Partner with us for a collaborative, transparent, and results-driven development process.
            </p>
          </div>
          <div className="angularjs-features-cards">
            {[
              {
                icon: <FaCogs className="angularjs-feature-icon" />, 
                title: "Modern Tech Stack",
                desc: "AngularJS, TypeScript, RxJS, and the latest web APIs.<br />We leverage cutting-edge tools to build future-ready apps that are easy to maintain and scale."
              },
              {
                icon: <FaLayerGroup className="angularjs-feature-icon" />, 
                title: "Custom UI/UX",
                desc: "Stunning, intuitive interfaces for every device size.<br />Our designers focus on usability and aesthetics to create delightful user experiences."
              },
              {
                icon: <FaBolt className="angularjs-feature-icon" />, 
                title: "Performance",
                desc: "Fast, reliable, and scalable apps.<br />We optimize every layer of your app for speed, responsiveness, and low resource usage."
              },
              {
                icon: <FaTools className="angularjs-feature-icon" />, 
                title: "Full Lifecycle",
                desc: "From concept to launch and ongoing support.<br />We guide you through every stage, ensuring a smooth journey from idea to success."
              }
            ].map((feature, i) => (
              <motion.div
                className="angularjs-feature-card angularjs-feature-card-border"
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
      </div>

      {/* About Section */}
      <motion.section
        className="angularjs-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="angularjs-about-title">About AngularJS</h2>
        <p className="angularjs-about-text">
          AngularJS is a powerful JavaScript framework for building dynamic web applications. It uses MVVM architecture, dependency injection, and custom directives to create maintainable and testable code.<br />
          Our team leverages the latest AngularJS tools and best practices to deliver secure, scalable, and user-friendly apps for every industry.<br />
          Whether you need a consumer-facing app or a complex enterprise solution, we have the expertise to turn your vision into reality.
        </p>
        <div className="angularjs-about-extra-accent">
          <h3 className="angularjs-why-title">Why AngularJS?</h3>
          <ul className="angularjs-about-list">
            <li>Strong community and ecosystem</li>
            <li>MVVM architecture for maintainability</li>
            <li>Rich UI component libraries</li>
            <li>Seamless integration with APIs and third-party tools</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="angularjs-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="angularjs-expertise-title">Our AngularJS Expertise</h2>
        <ul className="angularjs-expertise-list">
          <li>Enterprise web app development</li>
          <li>Custom dashboard and admin panel solutions</li>
          <li>Integration with RESTful APIs and cloud services</li>
          <li>Migration and modernization of legacy apps</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="angularjs-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="angularjs-client-stories-title">Client Success Stories</h2>
        <div>
          <div className="angularjs-client-story">
            <div className="angularjs-client-story-title">Enterprise Dashboard for Analytics</div>
            <div>We delivered a real-time analytics dashboard for a global enterprise, enabling data-driven decisions and interactive reporting.</div>
          </div>
          <div className="angularjs-client-story">
            <div className="angularjs-client-story-title">eCommerce Platform Modernization</div>
            <div>Our team migrated a legacy eCommerce platform to AngularJS, improving performance, scalability, and user experience.</div>
          </div>
          <div className="angularjs-client-story">
            <div className="angularjs-client-story-title">Custom Admin Panel</div>
            <div>We built a secure, feature-rich admin panel for a SaaS startup, streamlining operations and management.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

