import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-erp.css';
import { useNavigate } from 'react-router-dom';
import {
  FaPalette,
  FaPencilRuler,
  FaUserCheck,
  FaEye,
  FaMobileAlt,
  FaUsers,
  FaRocket,
  FaBook,
  FaQuestionCircle,
  FaDesktop,
  FaMagic,
  FaChartLine,
  FaHeart,
  FaAdjust,
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

export default function UIUXDesign() {
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
            <FaPalette className="icon" /> UI/UX Design
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We design app and website that not just matches trends but also helps your visitors navigate easily. Create intuitive and engaging digital experiences that delight users and drive business success.
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
            animationUrl="/animations/uiux.json" 
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
          Our UI/UX Design Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard 
            icon={<FaPencilRuler />}
            title="UI Design"
            description="Create visually stunning and consistent user interfaces that reflect your brand and enhance user experience."
            color="#e63946"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaUserCheck />}
            title="UX Design"
            description="Develop intuitive user experiences that guide visitors effortlessly through your digital products."
            color="#2a9d8f"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaEye />}
            title="Visual Design"
            description="Craft beautiful visual elements that engage users and communicate your brand message effectively."
            color="#e9c46a"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaMobileAlt />}
            title="Responsive Design"
            description="Ensure your digital products look and function perfectly across all devices and screen sizes."
            color="#264653"
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
            description="Beautiful, conversion-focused designs for online stores and retail platforms that delight customers and drive sales."
            color="#e63946"
            delay={0.1}
          />
          <ServiceCard 
            icon={<FaMobileAlt />}
            title="Mobile Apps"
            description="Intuitive mobile app designs that engage users and maximize retention. We optimize for touch interactions and mobile performance."
            color="#2a9d8f"
            delay={0.2}
          />
          <ServiceCard 
            icon={<FaRocket />}
            title="SaaS Products"
            description="Clean, user-friendly interfaces for software-as-a-service platforms that improve user adoption and satisfaction."
            color="#e9c46a"
            delay={0.3}
          />
          <ServiceCard 
            icon={<FaBook />}
            title="Education & Training"
            description="Engaging designs for learning platforms and educational apps that enhance the learning experience."
            color="#264653"
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
            icon={<FaAdjust />}
            title="User-Centered Approach"
            description="We prioritize user needs and behaviors, conducting research and testing to ensure designs that users love and understand."
            color="#e63946"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaMagic />}
            title="Creative Excellence"
            description="Our talented designers combine aesthetics with functionality, creating beautiful interfaces that stand out."
            color="#2a9d8f"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Conversion Optimized"
            description="Designs that not only look great but also drive engagement, conversions, and business results."
            color="#e9c46a"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaDesktop />}
            title="Multi-Device Mastery"
            description="Responsive designs that work flawlessly across all devices, from mobile to desktop to tablets."
            color="#264653"
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
          Our Design Process
        </motion.h2>
        <div className="process-grid">
          <ServiceCard
            icon={<FaUsers />}
            title="User Research"
            description="Understand your users' needs, behaviors, and pain points through comprehensive research and analysis."
            color="#e63946"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaPencilRuler />}
            title="Wireframing & Prototyping"
            description="Create detailed wireframes and prototypes to plan the perfect user journey and interface structure."
            color="#2a9d8f"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaPalette />}
            title="Visual Design"
            description="Develop beautiful, on-brand visual designs that engage users and enhance usability."
            color="#e9c46a"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaUserCheck />}
            title="User Testing & Iteration"
            description="Validate designs through user testing and iterate based on real user feedback."
            color="#264653"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Launch & Optimization"
            description="Deploy designs and continuously optimize based on analytics and user behavior."
            color="#e63946"
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
        <h2 className="section-title">Ready to Transform Your Digital Experience?</h2>
        <p className="section-description">Let's create beautiful and functional designs that your users will love.</p>
        <motion.button
          className="cta-button"
          onClick={handleStartProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Design Project
        </motion.button>
      </motion.section>
    </div>
  );
}
