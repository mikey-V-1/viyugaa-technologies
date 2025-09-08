import React from 'react';
import '../../styles/technologies/tech-ondemandapp.css';

import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaMobileAlt, FaMapMarkerAlt, FaMoneyBillWave, FaBell, FaChartBar, FaCogs } from 'react-icons/fa';


export default function OnDemandAppSolutions() {
  const features = [
    {
      icon: <FaMobileAlt className="ondemandapp-feature-icon" />,
      title: 'Mobile Apps',
      desc: 'User-friendly, scalable mobile apps for any industry.'
    },
    {
      icon: <FaMapMarkerAlt className="ondemandapp-feature-icon" />,
      title: 'Real-Time Tracking',
      desc: 'GPS, location services, and live tracking.'
    },
    {
      icon: <FaMoneyBillWave className="ondemandapp-feature-icon" />,
      title: 'Payments',
      desc: 'Multiple payment gateways and integrations.'
    },
    {
      icon: <FaBell className="ondemandapp-feature-icon" />,
      title: 'Notifications',
      desc: 'Push, SMS, and email notifications for users.'
    },
    {
      icon: <FaChartBar className="ondemandapp-feature-icon" />,
      title: 'Analytics',
      desc: 'Admin dashboards, analytics, and reporting.'
    }
  ];

  return (
    <div className="ondemandapp-modern-page">
      {/* Hero Section */}
      <section className="ondemandapp-hero">
        <motion.div
          className="ondemandapp-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/ondemandapp.png" alt="On Demand App Solutions" className="ondemandapp-hero-image" />
        </motion.div>
        <motion.h1
          className="ondemandapp-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaMobileAlt className="ondemandapp-hero-icon" /> On-Demand App Solutions
        </motion.h1>
        <motion.p
          className="ondemandapp-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Seamless user experiences and robust backend systems for any industry.<br />
          We deliver scalable, feature-rich on-demand apps for transportation, delivery, healthcare, and more.
        </motion.p>
        <motion.div
          className="ondemandapp-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="ondemandapp-cta-btn">
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="ondemandapp-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ondemandapp-features-header">
          <h2 className="ondemandapp-about-title">Why Choose On-Demand Apps?</h2>
          <p>
            We build scalable, feature-rich on-demand apps for any industry.<br />
            Our team ensures seamless integration, real-time tracking, and analytics.<br />
            Partner with us for future-ready business solutions.
          </p>
        </div>
        <div className="ondemandapp-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="ondemandapp-feature-card ondemandapp-feature-card-border"
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
        className="ondemandapp-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="ondemandapp-about-title">About On-Demand Apps</h2>
        <p className="ondemandapp-about-text">
          On-demand apps deliver seamless user experiences and robust backend systems for any industry.<br />
          We leverage modern technologies for real-time tracking, payment integration, and analytics.
        </p>
        <div className="ondemandapp-about-extra ondemandapp-about-extra-accent">
          <h3 className="ondemandapp-why-title">Why On-Demand Apps?</h3>
          <ul className="ondemandapp-why-list">
            <li>Scalable, feature-rich mobile platforms</li>
            <li>Real-time tracking and notifications</li>
            <li>Seamless payment and analytics integration</li>
            <li>Full support for custom business needs</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="ondemandapp-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="ondemandapp-about-title">Our On-Demand App Expertise</h2>
        <ul className="ondemandapp-expertise-list">
          <li>Mobile app development and data modeling</li>
          <li>Real-time tracking and notification systems</li>
          <li>Payment integration and analytics</li>
          <li>Migration and modernization of legacy systems</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="ondemandapp-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="ondemandapp-about-title">Client Success Stories</h2>
        <div className="ondemandapp-stories-cards">
          <div className="ondemandapp-story-card">
            <div className="ondemandapp-why-title">Logistics Platform Modernization</div>
            <div>We built a scalable logistics app with real-time tracking and analytics for a transportation client.</div>
          </div>
          <div className="ondemandapp-story-card">
            <div className="ondemandapp-why-title">Custom Delivery Solution</div>
            <div>Our team delivered a feature-rich delivery platform for a food service company, integrating payments and notifications.</div>
          </div>
          <div className="ondemandapp-story-card">
            <div className="ondemandapp-why-title">Healthcare On-Demand App</div>
            <div>We automated appointment booking and notifications for a healthcare provider, improving user experience and efficiency.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
