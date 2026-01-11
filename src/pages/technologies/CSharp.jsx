import React from 'react';
import '../../styles/technologies/tech-csharp.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaDesktop, FaGlobe, FaMobileAlt, FaGamepad, FaCogs, FaCode } from 'react-icons/fa';
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

export default function CSharp() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaDesktop className="csharp-feature-icon" />,
      title: 'Desktop Apps',
      desc: 'Build powerful Windows desktop applications with C#.'
    },
    {
      icon: <FaGlobe className="csharp-feature-icon" />,
      title: 'Web Apps',
      desc: 'Develop scalable web applications using ASP.NET and Blazor.'
    },
    {
      icon: <FaMobileAlt className="csharp-feature-icon" />,
      title: 'Mobile Apps',
      desc: 'Create cross-platform mobile apps with Xamarin and MAUI.'
    },
    {
      icon: <FaGamepad className="csharp-feature-icon" />,
      title: 'Game Development',
      desc: 'Build games with Unity and C# scripting.'
    },
    {
      icon: <FaCogs className="csharp-feature-icon" />,
      title: '.NET Ecosystem',
      desc: 'Full support for .NET Core, Framework, and Visual Studio.'
    }
  ];

  return (
    <div className="csharp-modern-page">
      {/* Hero Section */}
      <section className="csharp-hero">
        
        <motion.h1
          className="csharp-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaCode className="csharp-hero-icon" /> C# Development
        </motion.h1>
        <motion.p
          className="csharp-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desktop, web, mobile, and game solutions using the .NET ecosystem.<br />
          We deliver maintainable, scalable, and high-performance C# applications.
        </motion.p>
        <motion.div
          className="csharp-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="csharp-cta-btn" onClick={() => navigate('/contact')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="csharp-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="csharp-features-header">
          <h2 className="csharp-about-title">Why Choose C#?</h2>
          <p>
            We build powerful, scalable desktop, web, mobile, and game apps using C#.<br />
            Our team leverages the full .NET ecosystem for maintainable, future-ready solutions.<br />
            Partner with us for enterprise-grade development.
          </p>
        </div>
        <div className="csharp-features-cards">
          {features.map((feature, i) => (
            <motion.div
              className="csharp-feature-card csharp-feature-card-border"
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
        className="csharp-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="csharp-about-title">About C#</h2>
        <p className="csharp-about-text">
          C# is a versatile, object-oriented language for building desktop, web, mobile, and game applications with the .NET ecosystem.<br />
          We leverage C# for interactive dashboards, business automation, and seamless integrations.
        </p>
        <div className="csharp-about-extra csharp-about-extra-accent">
          <h3 className="csharp-why-title">Why C#?</h3>
          <ul className="csharp-why-list">
            <li>Robust desktop, web, mobile, and game development</li>
            <li>Full .NET Core, Framework, and Visual Studio support</li>
            <li>Cross-platform mobile and game solutions</li>
            <li>Enterprise-grade scalability and performance</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="csharp-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="csharp-about-title">Our C# Expertise</h2>
        <ul className="csharp-expertise-list">
          <li>Windows desktop app development (WPF, WinForms)</li>
          <li>Web application development (ASP.NET, Blazor)</li>
          <li>Mobile app development (Xamarin, MAUI)</li>
          <li>Game development (Unity)</li>
          <li>Automated testing, CI/CD, and deployment</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="csharp-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="csharp-about-title">Client Success Stories</h2>
        <div className="csharp-stories-cards">
          <div className="csharp-story-card">
            <div className="csharp-why-title">Enterprise Dashboard</div>
            <div>We built a real-time dashboard for a logistics company, integrating C# apps with cloud and IoT devices.</div>
          </div>
          <div className="csharp-story-card">
            <div className="csharp-why-title">Mobile App Suite</div>
            <div>Our team delivered a cross-platform mobile app suite for a retail chain, using Xamarin and C#.</div>
          </div>
          <div className="csharp-story-card">
            <div className="csharp-why-title">Game Development</div>
            <div>We developed a multiplayer game for a startup, leveraging Unity and C# scripting for performance and scalability.</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

