import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import { useNavigate } from 'react-router-dom';
import {
  FaDatabase,
  FaProjectDiagram,
  FaCogs,
  FaChartBar,
  FaUsers,
  FaCheckCircle,
  FaDraftingCompass,
  FaRocket,
  FaLifeRing,
  FaQuestionCircle,
  FaMobileAlt,
  FaBook
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

export default function ERPSoftwareDevelopment() {
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
            <FaDatabase className="icon" /> ERP Software Development
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Serve your common and specific purposes with the easiest ERP solutions built by engineers you like. We deliver modular, secure ERP platforms that simplify operations and reporting.
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
            animationUrl="/animations/erp.json" 
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
          Our ERP Development Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard 
            icon={<FaCogs />}
            title="Custom ERP Modules"
            description="We build modules for finance, HR, inventory, sales, and more, tailored to your business processes. Our solutions automate workflows, reduce manual effort, and improve data accuracy."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaUsers />}
            title="Integration with Existing Systems"
            description="Seamless integration with your current software, databases, and third-party tools. We ensure data flows smoothly and securely across your organization."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaChartBar />}
            title="Reporting & Analytics"
            description="Advanced reporting and analytics to help you make informed decisions and track performance. Our dashboards provide real-time insights and customizable reports."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaLifeRing />}
            title="Support & Training"
            description="Comprehensive support and training to ensure your team gets the most from your ERP system. We provide onboarding, documentation, and ongoing assistance."
            color="#1d3557"
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
            title="Manufacturing"
            description="ERP solutions for production planning, inventory management, and supply chain optimization. We help manufacturers improve efficiency and reduce costs."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaUsers />}
            title="Services & Consulting"
            description="ERP for project management, resource allocation, and client engagement. Our systems support service delivery and business growth."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaRocket />}
            title="Retail & eCommerce"
            description="ERP for sales, inventory, and customer management in retail and online stores. We enable seamless operations and better customer experiences."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaBook />}
            title="Education & Training"
            description="ERP for schools, colleges, and training institutes to manage students, courses, and resources. Our solutions support learning, administration, and reporting."
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
            icon={<FaCogs />}
            title="Tailored Solutions"
            description="We customize every ERP system to fit your unique business needs and goals. Our approach ensures maximum value and efficiency."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaProjectDiagram />}
            title="Scalability & Flexibility"
            description="Our ERP solutions grow with your business, adapting to new requirements and challenges. We design systems that are easy to expand and modify."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Expert Support"
            description="Our team provides training, documentation, and ongoing assistance for smooth operations. We help you get the most from your investment."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaChartBar />}
            title="Data-Driven Insights"
            description="Advanced analytics and reporting help you make informed decisions and drive growth. Our dashboards provide actionable intelligence for every department."
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
          Our ERP Development Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaCogs />}
            title="Requirements Analysis"
            description="We gather requirements, analyze workflows, and define project scope for a clear roadmap. This phase ensures your ERP system meets all business needs."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaDraftingCompass />}
            title="System Design"
            description="We design system architecture, data models, and user interfaces for optimal performance. Our designs prioritize usability, scalability, and integration."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Development & Integration"
            description="Agile development and seamless integration with existing systems and third-party tools. We ensure smooth data flow and reliable operation."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaChartBar />}
            title="Reporting & Analytics"
            description="Implementation of dashboards, reports, and analytics for data-driven decision making. We provide customizable insights for every department."
            color="#1d3557"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="Support & Training"
            description="Comprehensive support, onboarding, and training for your team. We ensure smooth adoption and ongoing success."
            color="#2a5298"
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
        <h2 className="section-title">Start Your ERP Project Today</h2>
        <p className="section-description">Ready to transform your business operations with a custom ERP solution?</p>
        <motion.button
          className="cta-button"
          onClick={handleStartProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* FAQs Section */}
      
    </div>
  );
}
