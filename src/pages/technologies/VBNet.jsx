import React from 'react';
import '../../styles/technologies/tech-vbnet.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaDesktop, FaWindows, FaDatabase, FaHistory, FaCogs, FaCode } from 'react-icons/fa';
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

export default function VBNet() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaDesktop className="vbnet-feature-icon" />,
      title: 'Desktop Apps',
      desc: 'Build robust Windows desktop applications with VB.Net.'
    },
    {
      icon: <FaWindows className="vbnet-feature-icon" />,
      title: 'Web Apps',
      desc: 'Develop scalable web applications using ASP.NET Web Forms.'
    },
    {
      icon: <FaDatabase className="vbnet-feature-icon" />,
      title: 'Database Integration',
      desc: 'Seamless integration with SQL Server and other databases.'
    },
    {
      icon: <FaCode className="vbnet-feature-icon" />,
      title: '.NET Framework',
      desc: 'Full support for .NET Framework and .NET Core.'
    },
    {
      icon: <FaHistory className="vbnet-feature-icon" />,
      title: 'Legacy Support',
      desc: 'Maintain and modernize legacy VB applications.'
    }
  ];

  return (
    <div className="vbnet-modern-page">
      {/* Hero Section */}
      <section className="vbnet-hero">
        
        <motion.h1
          className="vbnet-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaDesktop className="vbnet-hero-icon" /> VB.Net Development
        </motion.h1>
        <motion.p
          className="vbnet-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Reliable desktop and web solutions using Microsoft technologies.<br />
          We deliver maintainable, scalable, and secure VB.Net applications.
        </motion.p>
        <motion.div
          className="vbnet-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="vbnet-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="vbnet-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="vbnet-features-header">
          <h2 className="vbnet-about-title">Why Choose VB.Net?</h2>
          <p>
            We build reliable, scalable desktop and web apps using VB.Net.<br />
            Our team ensures seamless database integration and legacy modernization.<br />
            Partner with us for future-ready business solutions.
          </p>
        </div>
        <div className="vbnet-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="vbnet-feature-card vbnet-feature-card-border"
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
        className="vbnet-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="vbnet-about-title">About VB.Net</h2>
        <p className="vbnet-about-text">
          VB.Net is a versatile language for building reliable desktop and web applications, with strong support for database integration and legacy systems.<br />
          We leverage VB.Net for interactive dashboards, business automation, and seamless integrations.
        </p>
        <div className="vbnet-about-extra vbnet-about-extra-accent">
          <h3 className="vbnet-why-title">Why VB.Net?</h3>
          <ul className="vbnet-why-list">
            <li>Robust desktop and web app development</li>
            <li>Seamless database integration</li>
            <li>Legacy system modernization</li>
            <li>Full .NET Framework and Core support</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="vbnet-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="vbnet-about-title">Our VB.Net Expertise</h2>
        <ul className="vbnet-expertise-list">
          <li>Windows desktop app development</li>
          <li>Web application development (ASP.NET Web Forms)</li>
          <li>Database integration (SQL Server, Oracle)</li>
          <li>Legacy system migration and modernization</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="vbnet-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="vbnet-about-title">Client Success Stories</h2>
        <div className="vbnet-stories-cards">
          <div className="vbnet-story-card">
            <div className="vbnet-why-title">Legacy System Modernization</div>
            <div>We migrated a legacy VB6 system to VB.Net, improving reliability and maintainability for a financial client.</div>
          </div>
          <div className="vbnet-story-card">
            <div className="vbnet-why-title">Custom ERP Solution</div>
            <div>Our team built a custom ERP platform for a manufacturing company, streamlining operations and reporting.</div>
          </div>
          <div className="vbnet-story-card">
            <div className="vbnet-why-title">Database Automation</div>
            <div>We automated data workflows for a healthcare provider, integrating VB.Net apps with SQL Server and Oracle.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
