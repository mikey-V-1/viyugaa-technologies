import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import {
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaCheckCircle,
  FaLifeRing,
  FaMobileAlt,
  FaUsers,
  FaRocket,
  FaBook,
  FaCloud,
  FaLaptopCode,
  FaDraftingCompass,
  FaGlobe
} from 'react-icons/fa';

// Service Card Component
const ServiceCard = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="service-icon" style={{ color }}>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </motion.div>
  );
};

export default function SoftwareMaintenanceSupport() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleStartProject = () => {
    navigate('/contact');
  };

  return (
    <div className="erp-development-page">
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        style={{ 
          opacity: heroOpacity,
          scale: heroScale
        }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaTools className="icon" /> Software Maintenance & Support
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ensuring optimal software performance through reliable maintenance and comprehensive support services. Keep your systems healthy, secure, and up-to-date with our proactive monitoring and expert assistance.
          </motion.p>
          <motion.button
            className="cta-button"
            onClick={handleStartProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Start Your Project
          </motion.button>
        </div>
        <motion.div 
          className="hero-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <LazyLottie 
            animationUrl="/animations/softwaremaintance.json" 
            loop={true}
          />
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <section className="services-section" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Maintenance & Support Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Bug Fixes & Updates"
            description="We resolve issues quickly and keep your software up-to-date with the latest features and improvements. Our team monitors for bugs and applies patches seamlessly."
            color="#3B82F6"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Security Enhancements"
            description="Protect your data and users with robust security protocols, regular audits, and vulnerability assessments. We help you meet compliance requirements."
            color="#10B981"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="24/7 Support"
            description="Our support team is available around the clock to address issues and answer questions. We provide fast response times and dedicated assistance."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Performance Monitoring"
            description="Continuous monitoring and optimization to ensure your software runs efficiently and scales. We track key metrics and recommend improvements."
            color="#F59E0B"
            delay={0.4}
          />
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.h2>
        <div className="industries-grid">
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Mobile & SaaS"
            description="Maintenance and support for mobile apps, SaaS platforms, and cloud-based solutions. We keep your products secure, updated, and performing at their best."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Enterprise Systems"
            description="Support for business automation, data management, and collaboration platforms. Our services ensure reliability and compliance for mission-critical operations."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Startups & Growth Companies"
            description="Scalable support for fast-growing businesses and evolving software products. We help you adapt quickly and stay ahead of the competition."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaBook />}
            title="Education & Training"
            description="Support for e-learning platforms, training apps, and educational software. We ensure smooth operation and continuous improvement."
            color="#1d3557"
            delay={0.4}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="benefits-grid">
          <ServiceCard
            icon={<FaTools />}
            title="Proactive Maintenance"
            description="We anticipate issues and address them before they impact your business. Our monitoring and updates keep your software running smoothly."
            color="#2a9d8f"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Security First"
            description="We prioritize data protection and compliance, defending against threats and vulnerabilities. Our team stays current with security best practices."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="24/7 Support"
            description="Our support team is available any time you need help, ensuring peace of mind. We respond quickly and resolve issues efficiently."
            color="#457b9d"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaCogs />}
            title="Continuous Improvement"
            description="We help you evolve your software with new features, optimizations, and enhancements. Our services support your growth and changing needs."
            color="#1d3557"
            delay={0.4}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Maintenance & Support Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaTools />}
            title="Assessment & Planning"
            description="We evaluate your software, identify risks, and create a maintenance plan tailored to your needs. This ensures proactive support and clear priorities."
            color="#264653"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Bug Fixes & Updates"
            description="Rapid issue resolution and regular updates to keep your software secure and functional. We monitor for bugs and apply patches seamlessly."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Security Audits"
            description="Regular security assessments and compliance checks to protect your data and users. We help you meet regulatory requirements and defend against threats."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Performance Optimization"
            description="Continuous monitoring and tuning to ensure your software runs efficiently. We track metrics, identify bottlenecks, and recommend improvements."
            color="#1d3557"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="24/7 Support"
            description="Dedicated support team available any time for troubleshooting and assistance. We provide fast response times and expert help for mission-critical systems."
            color="#264653"
            delay={0.5}
          />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        className="contact-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Keep Your Software Running Smoothly</h2>
        <p className="section-description">Let us handle the maintenance so you can focus on your business growth.</p>
        <motion.button
          className="cta-button"
          onClick={handleStartProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Support Today
        </motion.button>
      </motion.section>
    </div>
  );
}
