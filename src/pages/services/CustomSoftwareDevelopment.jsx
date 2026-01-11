import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import { useNavigate } from 'react-router-dom';
import {
  FaCode,
  FaCogs,
  FaPuzzlePiece,
  FaRocket,
  FaCheckCircle,
  FaLifeRing,
  FaMobileAlt,
  FaUsers,
  FaBook,
  FaDraftingCompass,
  FaGlobe,
  FaChartLine
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

export default function CustomSoftwareDevelopment() {
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
            <FaCode className="icon" /> Custom Software Development
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how custom software keeps your business thriving and get one for you cost effectively. We build tailored solutions that automate workflows and deliver measurable ROI.
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
            animationUrl="/animations/customsoftware.json" 
            loop={true}
          />
        </motion.div>
      </motion.div>

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
            description="Custom software for mobile apps, SaaS platforms, and cloud-based solutions. We build products for startups, enterprises, and everything in between."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Enterprise Solutions"
            description="Business automation, data management, and collaboration tools for enterprises. Our solutions streamline operations and drive digital transformation."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Startups & Growth Companies"
            description="Agile development for fast-growing businesses and innovative products. We help you launch quickly and scale efficiently."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaBook />}
            title="Education & Training"
            description="Custom software for e-learning platforms, training apps, and educational products. We support online courses, assessments, and collaboration."
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
            description="Every software product is custom-built to fit your business needs and goals. We listen, analyze, and deliver solutions that solve your unique challenges."
            color="#3B82F6"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Scalability & Flexibility"
            description="Our software grows with your business, adapting to new requirements and opportunities. We design systems that are easy to expand and modify."
            color="#10B981"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Expert Support"
            description="Our team provides training, documentation, and ongoing assistance for smooth operations. We help you get the most from your investment."
            color="#8B5CF6"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Cost-Effective Development"
            description="We deliver high-quality software at competitive prices, maximizing your ROI. Our process is efficient, transparent, and focused on value."
            color="#F59E0B"
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
          Our Custom Software Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaCogs />}
            title="Requirements Analysis"
            description="We gather requirements, analyze workflows, and define project scope. This phase ensures your software meets all business needs."
            color="#2a5298"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaDraftingCompass />}
            title="System Design"
            description="We design system architecture, data models, and user interfaces for optimal performance. Our designs prioritize usability and scalability."
            color="#e63946"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Development & Integration"
            description="Agile development and seamless integration with existing systems. We ensure smooth data flow and reliable operation."
            color="#f4a261"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Testing & Launch"
            description="Comprehensive QA, deployment, and launch support for your custom software. We test, deploy, and monitor for success."
            color="#1d3557"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaLifeRing />}
            title="Support & Enhancement"
            description="Continuous support, maintenance, and feature enhancements post-launch. Our team is dedicated to your software's long-term success."
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
        <h2 className="section-title">Build Custom Software That Drives Growth</h2>
        <p className="section-description">Let's transform your vision into a powerful software solution.</p>
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
