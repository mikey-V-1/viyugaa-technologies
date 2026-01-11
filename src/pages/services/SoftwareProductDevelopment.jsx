import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import { useNavigate } from 'react-router-dom';
import {
  FaCubes,
  FaDraftingCompass,
  FaRocket,
  FaCode,
  FaCheckCircle,
  FaUsers,
  FaBook,
  FaMobileAlt,
  FaTools,
  FaCogs,
  FaLifeRing,
  FaChartBar,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
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

export default function SoftwareProductDevelopment() {
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
            <FaCubes className="icon" /> Software Product Development
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build scalable, user-centered software products from concept to launch.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <motion.button
              className="primary-btn"
              onClick={handleStartProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="hero-animation"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="lottie-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '420px', maxWidth: '42vw', minWidth: '280px' }}>
              <LazyLottie animationUrl="/animations/softwareproduct.json" loop style={{ width: '100%', height: '420px' }} />
            </div>
          </div>
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
          Our Product Development Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard 
            icon={<FaDraftingCompass />}
            title="Product Strategy & Planning"
            description="Define product vision, market fit, and go-to-market strategy. We analyze trends and shape your roadmap for successful launches."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaCode />}
            title="Full-Stack Development"
            description="End-to-end development using modern technologies and best practices. We build scalable, secure, and maintainable products."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaRocket />}
            title="MVP & Prototyping"
            description="Rapid prototyping and MVP development to validate ideas quickly. Test concepts and gather feedback to refine your product."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaCheckCircle />}
            title="Quality Assurance"
            description="Comprehensive testing to ensure your product meets the highest standards. Deliver reliable and bug-free software."
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
            icon={<FaMobileAlt />}
            title="Mobile & SaaS"
            description="Product development for mobile apps, SaaS platforms, and cloud solutions. Build scalable products for startups and enterprises."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaCubes />}
            title="Enterprise Solutions"
            description="Custom software for business automation, data management, and collaboration. Streamline operations and drive digital transformation."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaShoppingCart />}
            title="eCommerce & Retail"
            description="Online stores, inventory systems, and customer engagement. Grow sales and improve customer experiences with tailored products."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaHeartbeat />}
            title="Healthcare & FinTech"
            description="Secure, compliant software for healthcare and financial industries. Meet regulatory requirements while delivering innovation."
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
            title="Innovation & Expertise"
            description="Fresh ideas and deep technical knowledge. We stay ahead of trends, adopting new technologies for competitive advantage."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Agile & Collaborative"
            description="Work in agile teams with transparent collaboration. Your feedback shapes every stage of development."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Quality & Reliability"
            description="Robust, secure, and maintainable products that stand the test of time. High-quality standards for every release."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="End-to-End Support"
            description="From ideation to post-launch, ongoing support and enhancements. Available for updates and growth strategies."
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
          Our Development Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaDraftingCompass />}
            title="Discovery & Strategy"
            description="Define product vision, goals, and roadmap through research and strategic planning. Sets foundation for successful development."
            color="#4F46E5"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaCode />}
            title="Prototyping & MVP"
            description="Rapid prototyping to validate ideas and gather feedback. Iterate quickly, refining before full-scale development."
            color="#06B6D4"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaCubes />}
            title="Development & Testing"
            description="Agile engineering, testing, and deployment of scalable software. Ensure every release meets quality standards."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Launch & Growth"
            description="Product launch, marketing, and ongoing support. Monitor performance, provide updates, and help you scale."
            color="#10B981"
            delay={0.4}
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
        <h2 className="section-title">Start Your Product Development Today</h2>
        <p className="section-description">Ready to transform your product idea into a market-ready solution?</p>
        <motion.button
          className="cta-button"
          onClick={handleStartProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}