import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import { useNavigate } from 'react-router-dom';
import {
  FaGlobe,
  FaLaptopCode,
  FaSearch,
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaCode,
  FaCogs,
  FaDraftingCompass,
  FaChartLine,
  FaTools
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

export default function WebDevelopment() {
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
            <FaGlobe className="icon" /> Web Development
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leave no space for ordinary websites; create exceptional web applications for your business. We design and build high-performance, secure web applications that scale with your customers and goals.
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
            animationUrl="/animations/Web Development Animation.json" 
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
          Our Web Development Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard
            icon={<FaLaptopCode />}
            title="Full-Stack Web Development"
            description="End-to-end development using modern technologies and best practices. We build scalable, secure, and maintainable web applications for your business."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaSearch />}
            title="SEO Optimization"
            description="Build web applications that rank high in search engines. We optimize performance, structure, and content for maximum visibility."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Progressive Web Apps"
            description="Create modern PWAs that work offline and provide app-like experiences. Fast, reliable, and engaging applications that users love."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Responsive & Mobile-First"
            description="Build web applications that look and function perfectly on all devices. Mobile-first approach ensures excellent experience everywhere."
            color="#10B981"
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
            icon={<FaGlobe />}
            title="E-Commerce & Retail"
            description="Beautiful, high-converting web applications for online stores. We build e-commerce platforms that increase sales and customer satisfaction."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaCloud />}
            title="SaaS & Cloud Applications"
            description="Robust, scalable web applications for Software-as-a-Service platforms. We handle millions of users with performance and reliability."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Enterprise & Financial"
            description="Secure, compliant web applications for enterprises and financial institutions. We prioritize data security and regulatory compliance."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Media & Publishing"
            description="Dynamic web platforms for content management and distribution. We build engaging experiences that attract and retain audiences."
            color="#10B981"
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
            icon={<FaRocket />}
            title="Performance & Speed"
            description="Lightning-fast web applications optimized for speed and user experience. We minimize load times and maximize engagement."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Security First"
            description="Enterprise-grade security with best practices and compliance. We protect your data, users, and business reputation."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaCogs />}
            title="Scalability & Flexibility"
            description="Build once, scale infinitely. Our architecture grows with your business needs and user base."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Analytics & Insights"
            description="Integrated analytics and reporting to track performance and user behavior. Make data-driven decisions to grow your business."
            color="#10B981"
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
          Our Web Development Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaDraftingCompass />}
            title="Discovery & Planning"
            description="Understand your vision, goals, and target audience. We create a detailed roadmap for successful web development."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaCode />}
            title="Design & Prototyping"
            description="Create beautiful, user-centered designs. We prototype and validate concepts before development."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaTools />}
            title="Development & Testing"
            description="Agile development with continuous testing and quality assurance. We build clean, maintainable, and secure code."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Deployment & Launch"
            description="Deploy to production with zero downtime. We ensure smooth launches and immediate user feedback."
            color="#10B981"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaCogs />}
            title="Support & Optimization"
            description="Continuous monitoring, updates, and optimization post-launch. We help your web app succeed long-term."
            color="#4F46E5"
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
        <h2 className="section-title">Build Your Exceptional Web Application</h2>
        <p className="section-description">Let's create a web solution that drives your business forward.</p>
        <motion.button
          className="cta-button"
          onClick={handleStartProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project
        </motion.button>
      </motion.section>
    </div>
  );
}
