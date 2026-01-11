import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import LazyLottie from '../../components/LazyLottie';
import '../../styles/services/service-mobile-app.css';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaApple, FaAndroid, FaReact, FaTools, FaCogs, FaRocket, 
         FaShoppingCart, FaHeartbeat, FaUniversity, FaTaxi, FaFootballBall, 
         FaUtensils, FaHome, FaBook, FaSearch, FaChevronDown, FaChevronUp,
         FaDraftingCompass, FaPencilRuler, FaPalette, FaCode, FaCheckCircle,
         FaLifeRing, FaQuestionCircle, FaLock, FaMoneyBillWave, FaClock,
         FaGooglePlay, FaUsers } from 'react-icons/fa';

// FAQ Item Component with Animation
// Industry Card Component
const IndustryCard = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div 
      className="industry-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 8px 30px rgba(252, 248, 248, 1)',
        transition: { duration: 0.2 }
      }}
    >
      <div className="industry-icon" style={{ color }}>
        {icon}
      </div>
      <h3 className="industry-title">{title}</h3>
      <p className="industry-description">{description}</p>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="service-icon" style={{ color }}>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </motion.div>
  );
};

// FAQ Item Component
const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div 
      className={`faq-item${open ? ' open' : ''}`}
      initial={false}
      animate={{
        backgroundColor: open ? 'rgba(255, 255, 255, 0.95)' : '#fff',
        boxShadow: open 
          ? '0 4px 20px rgba(30, 60, 114, 0.12)' 
          : '0 2px 12px rgba(30, 60, 114, 0.08)'
      }}
    >
      <motion.div 
        className="faq-question"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.005 }}
      >
        <span className="faq-icon">{item.icon}</span>
        <span className="faq-text">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown />
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div 
            className="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MobileAppDevelopment() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Memoize functions
  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/our-work');
  };

  return (
    <main className="mobile-app-container">
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-content"
          style={{ 
            opacity: heroOpacity, 
            scale: heroScale,
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaMobileAlt className="hero-icon" />
            <span>Mobile App Development</span>
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Build custom mobile apps and solutions using the latest technologies powered by a vetted team of engineers. 
            We deliver performant, secure, and user-friendly mobile applications for both Android and iOS.
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
        </motion.div>
        <motion.div 
          className="hero-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.8 
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.17, 0.55, 0.55, 1]
          }}
        >
          <LazyLottie 
            animationUrl="/animations/mobiledevelopment.json" 
            loop={true} 
          />
        </motion.div>
      </motion.section>
      {/* Services Section */}
      <motion.section 
        className="services-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="section-title"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive Mobile App Development Services
        </motion.h2>
        <div className="services-grid">
          <ServiceCard
            icon={<FaApple />}
            title="Native iOS App Development"
            description="Our dedicated iOS development team specializes in building custom native apps for iPhone, iPad, and Apple Watch using Swift and Objective-C. We ensure every app is secure, high-performing, and fully compliant with App Store guidelines."
            color="#000000"
            delay={0.1}
          />
          <ServiceCard
            icon={<FaAndroid />}
            title="Native Android App Development"
            description="Our top Android engineers create robust, scalable native apps using Kotlin and Java. We optimize for speed, compatibility, and security, ensuring your app stands out in the Google Play Store."
            color="#3DDC84"
            delay={0.2}
          />
          <ServiceCard
            icon={<FaReact />}
            title="Cross-Platform Development"
            description="Build trendy, secure, and resilient hybrid apps with Flutter and React Native. Our solutions offer cost-effective development, rapid deployment, and native-like performance for both platforms."
            color="#61DAFB"
            delay={0.3}
          />
          <ServiceCard
            icon={<FaTools />}
            title="IoT App Development"
            description="Connect devices and enable smart solutions with custom IoT app development. We integrate advanced sensors, cloud services, and secure protocols for innovative smart products."
            color="#FF4B4B"
            delay={0.4}
          />
          <ServiceCard
            icon={<FaCogs />}
            title="App Maintenance & Support"
            description="Our post-development support ensures your app remains up-to-date, secure, and fully functional. We provide updates, monitoring, and feature enhancements."
            color="#7C3AED"
            delay={0.5}
          />
          <ServiceCard
            icon={<FaRocket />}
            title="Mobile App Consultancy"
            description="Consult with our experts to plan, strategize, and execute your mobile app vision. We guide you through ideation, wireframing, prototyping, and launch."
            color="#0EA5E9"
            delay={0.6}
          />
        </div>
      </motion.section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaShoppingCart style={{color:'#2a5298'}}/> eCommerce</h3><p className="super-card-desc">Streamline your business and boost sales with custom e-commerce apps. Our solutions integrate secure payment gateways, inventory management, and personalized shopping experiences to maximize conversions and customer loyalty.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaHeartbeat style={{color:'#e63946'}}/> Healthcare</h3><p className="super-card-desc">Digital transformation for healthcare facilities with secure, user-friendly apps. Enable appointment booking, telemedicine, patient records, and compliance with healthcare standards for improved care and efficiency.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUniversity style={{color:'#457b9d'}}/> FinTech</h3><p className="super-card-desc">Customized banking and finance apps for next-level customer experiences. We deliver secure transactions, real-time analytics, and intuitive interfaces for banking, insurance, and investment platforms.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaTaxi style={{color:'#f4a261'}}/> Travel</h3><p className="super-card-desc">Taxi booking and travel apps for seamless journeys and bookings. Features include real-time tracking, secure payments, itinerary management, and multi-language support for global reach.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaFootballBall style={{color:'#264653'}}/> Sports</h3><p className="super-card-desc">Live sports updates and engagement with cost-effective app solutions. Deliver scores, news, fan communities, and interactive features to boost engagement and monetization.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUtensils style={{color:'#e9c46a'}}/> Food Delivery</h3><p className="super-card-desc">Online ordering, table booking, and takeaways made easy for customers. Our apps support menu management, real-time order tracking, and loyalty programs for restaurants and food chains.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaHome style={{color:'#2a9d8f'}}/> Real Estate</h3><p className="super-card-desc">Custom solutions for realtors to double earnings and manage listings. Features include property search, virtual tours, lead management, and secure document handling.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education</h3><p className="super-card-desc">Comprehensive e-learning solutions for modern education needs. Enable online courses, assessments, progress tracking, and collaboration tools for schools, colleges, and training institutes.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">High Penetration Rate</h3><p className="super-card-desc">Reach a wider audience with mobile apps accessible on smartphones and tablets. Our solutions are designed to maximize market reach, ensuring your business is present wherever your customers are. With support for multiple platforms and devices, you can tap into new demographics and expand your brand footprint globally.</p></div>
            <div className="super-card"><h3 className="super-card-title">Customer Engagement</h3><p className="super-card-desc">Custom apps solve problems and connect with customers for higher engagement. We build interactive features, push notifications, and personalized experiences that keep users coming back. Our apps foster loyalty and drive meaningful interactions, helping you build lasting relationships with your audience.</p></div>
            <div className="super-card"><h3 className="super-card-title">Optimized Visibility</h3><p className="super-card-desc">Increase app usage and brand visibility with optimized mobile solutions. Our team leverages the latest design trends and app store optimization techniques to ensure your app stands out. Enhanced discoverability and seamless user journeys lead to higher downloads and better brand recognition.</p></div>
            <div className="super-card"><h3 className="super-card-title">Increases Accessibility</h3><p className="super-card-desc">Apps accessible across devices for flawless user experiences anytime, anywhere. We prioritize accessibility and cross-device compatibility, making sure your app delivers consistent performance for all users. This approach removes barriers and enables your business to serve customers around the clock.</p></div>
            <div className="super-card"><h3 className="super-card-title">Accelerates Sales</h3><p className="super-card-desc">Boost sales with mobile apps as online shopping and engagement trends rise. Our solutions integrate secure payment gateways, intuitive shopping carts, and promotional tools to drive conversions. Stay ahead of the competition by offering a frictionless buying experience that encourages repeat purchases.</p></div>
            <div className="super-card"><h3 className="super-card-title">Business Analytics</h3><p className="super-card-desc">Get user-specific data and analytics to improve services and business decisions. We implement advanced analytics tools that track user behavior, preferences, and trends. These insights empower you to make informed decisions, refine your offerings, and achieve measurable business growth.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our Mobile App Development Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaSearch style={{color:'#2a5298'}}/> Requirements Analysis</h3><p className="super-card-desc">We research and gather resources to define project scope and needs. Our team conducts in-depth market analysis, competitor benchmarking, and stakeholder interviews to ensure every requirement is captured. This phase sets a strong foundation for your app’s success.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass style={{color:'#e63946'}}/> Creating Wireframe</h3><p className="super-card-desc">Visualize your project concept and get client approval with wireframes. We create detailed wireframes to map out user flows, screen layouts, and core functionalities, ensuring clarity and alignment before design begins.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPencilRuler style={{color:'#457b9d'}}/> Prototyping</h3><p className="super-card-desc">Sketch out prototypes to ensure the project is on the right track. Interactive prototypes allow you to experience the app’s look and feel, validate features, and make informed decisions before development starts.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPalette style={{color:'#f4a261'}}/> UX/UI Design</h3><p className="super-card-desc">Design apps that enhance user experience and match your vision. Our designers craft visually stunning interfaces and intuitive navigation, focusing on usability, accessibility, and brand consistency.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCode style={{color:'#264653'}}/> Development</h3><p className="super-card-desc">Coding and layout for each section as per the approved design. Our developers use the latest technologies and best practices to build scalable, secure, and high-performance mobile apps tailored to your requirements.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#2a9d8f'}}/> Testing & Deployment</h3><p className="super-card-desc">Rigorous QA and testing before launching your app to users. We perform comprehensive testing, including functionality, performance, and security checks, followed by smooth deployment to app stores and enterprise platforms.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#1d3557'}}/> Support & Maintenance</h3><p className="super-card-desc">Ongoing support to keep your app updated and running smoothly. Our team provides regular updates, bug fixes, performance monitoring, and feature enhancements to ensure your app remains competitive and reliable.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "How can I develop a mobile app for my business?",
                a: "Define objectives, research, plan features, choose a reliable company, collaborate on design and development, and monitor and update based on feedback.",
                icon: <FaQuestionCircle style={{color:'#2a5298'}}/>
              },
              {
                q: "Which platform (iOS or Android) should we build an application for?",
                a: "Choose based on your target audience, business goals, and market trends. We help you decide the best fit for your needs.",
                icon: <FaApple style={{color:'#e63946'}}/>
              },
              {
                q: "What do you do to keep the application data safe and secure?",
                a: "We implement robust security protocols, encryption, and regular audits to protect your app data.",
                icon: <FaLock style={{color:'#457b9d'}}/>
              },
              {
                q: "What do you do to ensure my software will have great UI/UX?",
                a: "Our design team follows best practices and trends to deliver intuitive, engaging, and user-friendly interfaces.",
                icon: <FaPalette style={{color:'#f4a261'}}/>
              },
              {
                q: "Do apps require maintenance? If yes, do you provide support?",
                a: "Yes, we offer ongoing maintenance and support to keep your app updated and running smoothly.",
                icon: <FaLifeRing style={{color:'#264653'}}/>
              },
              {
                q: "How much does it cost to build a mobile app?",
                a: "Cost depends on app complexity, features, platforms, and design. Contact us for a custom quote.",
                icon: <FaMoneyBillWave style={{color:'#2a9d8f'}}/>
              },
              {
                q: "How long will it take to build a mobile application?",
                a: "Timeline varies by project scope and requirements. We provide clear estimates after initial analysis.",
                icon: <FaClock style={{color:'#1d3557'}}/>
              },
              {
                q: "Will you help me submit my Android application to the Play Store?",
                a: "Yes, we assist with app submission and compliance for both Play Store and App Store.",
                icon: <FaGooglePlay style={{color:'#34a853'}}/>
              },
              {
                q: "What programming language is used to make mobile apps?",
                a: "We use Swift, Objective-C, Kotlin, Java, Dart, and JavaScript depending on the platform and requirements.",
                icon: <FaCode style={{color:'#e63946'}}/>
              },
              {
                q: "How are the resources distributed for the creation of my Android and iOS app?",
                a: "We allocate dedicated teams for each platform and ensure efficient resource management throughout the project.",
                icon: <FaUsers style={{color:'#2a5298'}}/>
              }
            ].map((item, idx) => (
              <FAQItem key={idx} item={item} />
            ))}
          </div>
        </section>
    </main>
  );
}