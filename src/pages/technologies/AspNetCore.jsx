
import React from 'react';
import '../../styles/technologies/tech-aspnetcore.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaCloud, FaCogs, FaServer, FaCode, FaLock, FaDatabase } from 'react-icons/fa';
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

export default function AspNetCore() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaCloud className="aspnetcore-feature-icon" />,
      title: 'Cross-Platform',
      desc: 'Build apps for Windows, Linux, and macOS with a single codebase.'
    },
    {
      icon: <FaServer className="aspnetcore-feature-icon" />,
      title: 'Microservices',
      desc: 'Design scalable, maintainable systems using microservices architecture.'
    },
    {
      icon: <FaCode className="aspnetcore-feature-icon" />,
      title: 'Cloud Integration',
      desc: 'Seamless integration with Azure and other cloud platforms.'
    },
    {
      icon: <FaLock className="aspnetcore-feature-icon" />,
      title: 'Security',
      desc: 'Enterprise-grade authentication, authorization, and data protection.'
    },
    {
      icon: <FaDatabase className="aspnetcore-feature-icon" />,
      title: 'Data Access',
      desc: 'Modern ORM and database support with Entity Framework Core.'
    }
  ];

  return (
    <div className="aspnetcore-modern-page">
      {/* Hero Section */}
      <section className="aspnetcore-hero">
        <motion.div
          className="aspnetcore-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/aspnetcore.png" alt="ASP.NET Core" className="aspnetcore-hero-image" />
        </motion.div>
        <motion.h1
          className="aspnetcore-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaCloud className="aspnetcore-hero-icon" /> ASP.NET Core Development
        </motion.h1>
        <motion.p
          className="aspnetcore-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Modern, cross-platform, high-performance web apps and APIs.<br />
          We deliver scalable, secure, and cloud-ready solutions for enterprises and startups.
        </motion.p>
        <motion.div
          className="aspnetcore-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="aspnetcore-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="aspnetcore-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="aspnetcore-features-header">
          <h2 className="aspnetcore-about-title">Why Choose ASP.NET Core?</h2>
          <p>
            We build modern, scalable web apps and APIs using ASP.NET Core.<br />
            Our team leverages microservices, cloud integration, and enterprise security.<br />
            Partner with us for future-ready, cross-platform solutions.
          </p>
        </div>
        <div className="aspnetcore-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="aspnetcore-feature-card aspnetcore-feature-card-border"
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
        className="aspnetcore-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="aspnetcore-about-title">About ASP.NET Core</h2>
        <p className="aspnetcore-about-text">
          ASP.NET Core is a modern, open-source framework for building cross-platform, cloud-ready, and high-performance web applications and APIs.<br />
          It supports microservices, cloud integration, and enterprise security for scalable, maintainable solutions.<br />
          We leverage ASP.NET Core for interactive dashboards, real-time apps, and seamless integrations.
        </p>
        <div className="aspnetcore-about-extra aspnetcore-about-extra-accent">
          <h3 className="aspnetcore-why-title">Why ASP.NET Core?</h3>
          <ul className="aspnetcore-why-list">
            <li>Cross-platform architecture for flexibility</li>
            <li>Microservices and cloud integration</li>
            <li>Enterprise-grade security and authentication</li>
            <li>Modern ORM and database support</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="aspnetcore-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="aspnetcore-about-title">Our ASP.NET Core Expertise</h2>
        <ul className="aspnetcore-expertise-list">
          <li>Enterprise web app and API development</li>
          <li>Microservices and distributed systems</li>
          <li>Cloud integration (Azure, AWS, GCP)</li>
          <li>Authentication, authorization, and security</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="aspnetcore-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="aspnetcore-about-title">Client Success Stories</h2>
        <div className="aspnetcore-stories-cards">
          <div className="aspnetcore-story-card">
            <div className="aspnetcore-why-title">Cloud-Based Analytics Platform</div>
            <div>We delivered a scalable analytics platform using ASP.NET Core and Azure, enabling real-time insights for a global enterprise.</div>
          </div>
          <div className="aspnetcore-story-card">
            <div className="aspnetcore-why-title">Microservices for FinTech</div>
            <div>Our team built a secure, distributed microservices architecture for a FinTech startup, improving reliability and scalability.</div>
          </div>
          <div className="aspnetcore-story-card">
            <div className="aspnetcore-why-title">API Integration for SaaS</div>
            <div>We integrated third-party APIs and cloud services for a SaaS provider, streamlining operations and enhancing user experience.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
