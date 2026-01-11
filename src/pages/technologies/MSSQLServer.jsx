
import React from 'react';
import '../../styles/technologies/tech-mssqlserver.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaDatabase, FaCogs, FaLayerGroup, FaRocket, FaBolt, FaTools, FaCloud } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function MSSQLServer() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaDatabase className="mssqlserver-feature-icon" />,
      title: 'Relational Database',
      desc: 'Secure, scalable, and high-performance database for enterprise apps.'
    },
    {
      icon: <FaLayerGroup className="mssqlserver-feature-icon" />,
      title: 'Cloud Integration',
      desc: 'Seamless integration with Azure SQL and cloud platforms.'
    },
    {
      icon: <FaRocket className="mssqlserver-feature-icon" />,
      title: 'Performance',
      desc: 'Advanced analytics, reporting, and fast queries.'
    },
    {
      icon: <FaCogs className="mssqlserver-feature-icon" />,
      title: 'Ecosystem',
      desc: 'SSMS, SQL Agent, Integration & Reporting Services.'
    },
    {
      icon: <FaBolt className="mssqlserver-feature-icon" />,
      title: 'Reliability',
      desc: 'Backup, recovery, and high availability tools.'
    }
  ];

  return (
    <div className="mssqlserver-modern-page">
      {/* Hero Section */}
      <section className="mssqlserver-hero">
        
        <motion.h1
          className="mssqlserver-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaDatabase className="mssqlserver-hero-icon" /> MSSQL Server Development
        </motion.h1>
        <motion.p
          className="mssqlserver-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Secure, scalable, and high-performing database solutions using Microsoft SQL Server.<br />
          We deliver enterprise-grade, reliable, and flexible MSSQL applications.
        </motion.p>
        <motion.div
          className="mssqlserver-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="mssqlserver-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="mssqlserver-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mssqlserver-features-header">
          <h2 className="mssqlserver-about-title">Why Choose MSSQL Server?</h2>
          <p>
            We build secure, scalable database apps using MSSQL Server.<br />
            Our team ensures seamless cloud integration and advanced analytics.<br />
            Partner with us for future-ready business solutions.
          </p>
        </div>
        <div className="mssqlserver-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="mssqlserver-feature-card mssqlserver-feature-card-border"
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
        className="mssqlserver-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="mssqlserver-about-title">About MSSQL Server</h2>
        <p className="mssqlserver-about-text">
          Microsoft SQL Server is a powerful RDBMS for building secure, scalable, and high-performance applications.<br />
          We leverage MSSQL Server for advanced analytics, cloud integration, and seamless data management.
        </p>
        <div className="mssqlserver-about-extra mssqlserver-about-extra-accent">
          <h3 className="mssqlserver-why-title">Why MSSQL Server?</h3>
          <ul className="mssqlserver-why-list">
            <li>Secure, scalable relational data model</li>
            <li>Seamless cloud and platform integration</li>
            <li>Advanced analytics and reporting</li>
            <li>Full support for MSSQL ecosystem tools</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="mssqlserver-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="mssqlserver-about-title">Our MSSQL Server Expertise</h2>
        <ul className="mssqlserver-expertise-list">
          <li>Database app development and data modeling</li>
          <li>Advanced analytics and reporting tools</li>
          <li>Cloud integration and database services</li>
          <li>Migration and modernization of legacy systems</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="mssqlserver-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="mssqlserver-about-title">Client Success Stories</h2>
        <div className="mssqlserver-stories-cards">
          <div className="mssqlserver-story-card">
            <div className="mssqlserver-why-title">Legacy System Modernization</div>
            <div>We migrated a legacy backend system to MSSQL Server, improving security and maintainability for a financial client.</div>
          </div>
          <div className="mssqlserver-story-card">
            <div className="mssqlserver-why-title">Custom RDBMS Solution</div>
            <div>Our team built a custom database platform for a manufacturing company, streamlining operations and reporting.</div>
          </div>
          <div className="mssqlserver-story-card">
            <div className="mssqlserver-why-title">Advanced Analytics</div>
            <div>We automated data workflows for a healthcare provider, integrating MSSQL Server apps with cloud services.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
