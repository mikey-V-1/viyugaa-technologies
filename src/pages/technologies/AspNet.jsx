import React from 'react';
import '../../styles/technologies/tech-aspnet.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaCogs, FaLayerGroup, FaBolt, FaTools, FaWindows } from 'react-icons/fa';

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

export default function AspNet() {
  const features = [
    {
      icon: <FaCogs className="aspnet-feature-icon" />, 
      title: "MVVM & MVC Patterns",
      desc: "Separation of concerns for maintainable code.<br />Declarative bindings and automatic UI updates."
    },
    {
      icon: <FaLayerGroup className="aspnet-feature-icon" />, 
      title: "Custom Components",
      desc: "Reusable, modular UI components for scalable apps."
    },
    {
      icon: <FaBolt className="aspnet-feature-icon" />, 
      title: "Performance",
      desc: "Lightweight, fast, and efficient for real-time apps."
    },
    {
      icon: <FaTools className="aspnet-feature-icon" />, 
      title: "Ecosystem",
      desc: "Validation, mapping, and integration with Azure, jQuery, and other libraries."
    }
  ];

  return (
    <div className="aspnet-modern-page">
      {/* Hero Section */}
      <section className="aspnet-hero">
        <motion.div
          className="aspnet-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/aspnet.png" alt="ASP.NET" className="aspnet-hero-image" />
        </motion.div>
        <motion.h1
          className="aspnet-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaWindows className="aspnet-hero-icon" /> ASP.NET Development
        </motion.h1>
        <motion.p
          className="aspnet-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our team builds robust, scalable web apps using ASP.NET and modern Microsoft technologies.<br />
          We deliver maintainable code, seamless UI updates, and enterprise-grade integrations.
        </motion.p>
        <motion.div
          className="aspnet-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="aspnet-cta-btn">
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="aspnet-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="aspnet-features-header">
          <h2 className="aspnet-about-title">Why Choose ASP.NET?</h2>
          <p>
            We build dynamic, responsive web apps using ASP.NET and the MVVM/MVC patterns.<br />
            Our team ensures maintainable code, seamless UI updates, and integration with cloud and enterprise tools.<br />
            Partner with us for scalable, future-ready solutions.
          </p>
        </div>
                  <div className="aspnet-features-cards">
                    {features.map((feature, i) => (
                      <motion.div
                        className="aspnet-feature-card aspnet-feature-card-border"
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
                  className="aspnet-about"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="aspnet-about-title">About ASP.NET</h2>
                  <p className="aspnet-about-text">
                    ASP.NET is a mature, enterprise-grade framework for building secure, scalable, and high-performance web applications and APIs.<br />
                    It supports MVVM/MVC patterns, declarative bindings, and custom components for maintainable, testable code.<br />
                    We leverage ASP.NET to deliver interactive dashboards, real-time apps, and seamless integrations.
                  </p>
                  <div className="aspnet-about-extra aspnet-about-extra-accent">
                    <h3 className="aspnet-why-title">Why ASP.NET?</h3>
                    <ul className="aspnet-why-list">
                      <li>MVVM & MVC architecture for maintainability</li>
                      <li>Declarative bindings and custom components</li>
                      <li>Integration with Azure, jQuery, and other libraries</li>
                      <li>Lightweight and fast for real-time apps</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Expertise Section */}
                <motion.section
                  className="aspnet-expertise"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <h2 className="aspnet-about-title">Our ASP.NET Expertise</h2>
                  <ul className="aspnet-expertise-list">
                    <li>Enterprise web app development</li>
                    <li>Custom dashboard and admin panel solutions</li>
                    <li>Integration with RESTful APIs and cloud services</li>
                    <li>Migration and modernization of legacy apps</li>
                    <li>Automated testing, CI/CD, and deployment</li>
                  </ul>
                </motion.section>

                {/* Success Stories Section */}
                <motion.section
                  className="aspnet-success-stories"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="aspnet-about-title">Client Success Stories</h2>
                  <div className="aspnet-stories-cards">
                    <div className="aspnet-story-card">
                      <div className="aspnet-why-title">Enterprise Dashboard for Analytics</div>
                      <div>We delivered a real-time analytics dashboard for a global enterprise, enabling data-driven decisions and interactive reporting.</div>
                    </div>
                    <div className="aspnet-story-card">
                      <div className="aspnet-why-title">eCommerce Platform Modernization</div>
                      <div>Our team migrated a legacy eCommerce platform to ASP.NET, improving performance, scalability, and user experience.</div>
                    </div>
                    <div className="aspnet-story-card">
                      <div className="aspnet-why-title">Custom Admin Panel</div>
                      <div>We built a secure, feature-rich admin panel for a SaaS startup, streamlining operations and management.</div>
                    </div>
                  </div>
                </motion.section>
              </div>
            );
          }
