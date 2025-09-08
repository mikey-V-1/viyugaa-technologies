

import React from 'react';
import '../../styles/technologies/tech-nextjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaRocket, FaCogs, FaLayerGroup, FaBolt, FaTools, FaCode } from 'react-icons/fa';

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

export default function NextJS() {
  return (
    <div className="nextjs-modern-page">
      {/* Hero Section */}
      <section className="nextjs-hero">
        <motion.div
          className="nextjs-hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/tech/nextjs.png" alt="Next.js" className="nextjs-hero-image" />
        </motion.div>
        <motion.h1
          className="nextjs-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaRocket className="nextjs-hero-icon" /> Next.js Development
        </motion.h1>
        <motion.p
          className="nextjs-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build SEO-friendly, high-performance web apps with our expert Next.js team.<br />
          We specialize in SSR, SSG, API routes, and modern web solutions.
        </motion.p>
        <motion.div
          className="nextjs-hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button className="nextjs-cta-btn" onClick={() => alert('Contact us for Next.js projects!')}>
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="nextjs-features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="nextjs-features-header">
          <h2 className="nextjs-about-title">Why Choose Next.js?</h2>
          <p>
            We build fast, SEO-friendly, and scalable web apps using Next.js.<br />
            Our team leverages SSR, SSG, and the latest Next.js ecosystem.<br />
            Partner with us for a collaborative, transparent, and results-driven process.
          </p>
        </div>
        <div className="nextjs-features-cards">
          {[
            {
              icon: <FaCogs className="nextjs-feature-icon" />, 
              title: "SSR & SSG",
              desc: "Server-side rendering and static site generation for performance and SEO."
            },
            {
              icon: <FaLayerGroup className="nextjs-feature-icon" />, 
              title: "API Routes & Integration",
              desc: "Build full-stack apps with integrated API routes and data fetching."
            },
            {
              icon: <FaBolt className="nextjs-feature-icon" />, 
              title: "Performance",
              desc: "Optimized image handling, fast refresh, and TypeScript support."
            },
            {
              icon: <FaRocket className="nextjs-feature-icon" />, 
              title: "Ecosystem",
              desc: "Vercel, SWR, NextAuth.js, Tailwind CSS, and more for rapid development."
            }
          ].map((feature, i) => (
            <motion.div
              className="nextjs-feature-card nextjs-feature-card-border"
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
        className="nextjs-about nextjs-about-accent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="nextjs-about-title">About Next.js</h2>
        <p className="nextjs-about-text">
          Next.js is a powerful React framework for building fast, SEO-friendly web applications. It supports SSR, SSG, API routes, and image optimization for modern web development.<br />
          We use Next.js to deliver scalable, maintainable, and high-performance solutions for every industry.
        </p>
        <div className="nextjs-about-extra nextjs-about-extra-accent">
          <h3 className="nextjs-why-title">Why Next.js?</h3>
          <ul className="nextjs-why-list">
            <li>Server-side rendering and static site generation</li>
            <li>API routes and full-stack capabilities</li>
            <li>Optimized performance and SEO</li>
            <li>Rich ecosystem and rapid development</li>
          </ul>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="nextjs-expertise"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="nextjs-about-title">Our Next.js Expertise</h2>
        <ul>
          <li>Business websites and custom solutions</li>
          <li>Dashboards, admin panels, and analytics</li>
          <li>eCommerce platforms and real-time apps</li>
          <li>Single Page Applications (SPAs)</li>
        </ul>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        className="nextjs-success-stories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="nextjs-about-title">Client Success Stories</h2>
        <div className="nextjs-stories-cards">
          <div className="nextjs-story-card">
            <h3>Business Website</h3>
            <p>Developed a high-performance, SEO-friendly website for a startup, increasing traffic and engagement.</p>
          </div>
          <div className="nextjs-story-card">
            <h3>eCommerce Platform</h3>
            <p>Built a scalable online store with seamless user experience and real-time inventory updates.</p>
          </div>
          <div className="nextjs-story-card">
            <h3>Admin Dashboard</h3>
            <p>Created an interactive analytics dashboard for enterprise management and reporting.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
