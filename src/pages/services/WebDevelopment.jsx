// ...existing code...
import React, { useState } from 'react';
import '../../styles/services/service-web.css';
import Lottie from "lottie-react";
import Webdevelopment from "../../assets/Web Development Animation.json";
import {
  FaClock,
  FaLifeRing,
  FaCheckCircle,
  FaGlobe,
  FaLaptopCode,
  FaSearch,
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaShoppingCart,
  FaBook,
  FaDraftingCompass
} from 'react-icons/fa';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`super-faq-item${open ? ' open' : ''}`} style={{marginBottom:'16px', borderRadius:'16px', boxShadow:'0 2px 12px rgba(30,60,114,0.08)', background:'#fff', padding:'20px 24px', transition:'box-shadow 0.2s'}}>
      <div className="super-faq-question" onClick={() => setOpen(!open)} style={{cursor:'pointer', display:'flex', alignItems:'center', gap:'16px', fontWeight:'600', fontSize:'1.1rem', color:'#1e3c72'}}>
        <span style={{fontSize:'1.5rem'}}>{item.icon}</span>
        <span>{item.q}</span>
        {open ? <FaChevronUp style={{marginLeft:'auto', color:'#2a5298'}}/> : <FaChevronDown style={{marginLeft:'auto', color:'#2a5298'}}/>}
      </div>
      {open && <div className="super-faq-answer" style={{marginTop:'12px', color:'#333', fontSize:'1rem', lineHeight:'1.7'}}><p>{item.a}</p></div>}
    </div>
  );
}

export default function WebDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaGlobe className="super-icon" /> Web Development</h1>
          <p className="super-desc">Build exceptional web applications and websites that drive results. Our team delivers responsive, high-performing, and secure web solutions tailored to your business goals.<br /><br />
We combine creativity, technical expertise, and industry best practices to ensure your online presence stands out. From concept to launch, we work closely with you to understand your vision, address your challenges, and deliver a product that exceeds expectations.<br /><br />
Whether you need a simple landing page or a complex enterprise platform, our web development services are designed to help you grow, engage your audience, and achieve measurable success.</p>
        </div>
        <div style={{ flex: "0 0 320px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)", borderRadius: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "24px", maxWidth: "320px", width: "320px" }}>
          <Lottie animationData={Webdevelopment} loop={true} style={{ width: "100%", height: "320px" }} />
        </div>
      </div>
      <div className="service-web-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our Web Development Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt /> Responsive Website Design</h3><p className="super-card-desc">We create visually stunning, mobile-friendly websites that adapt seamlessly to all devices and screen sizes.<br /><br />
Our designs prioritize accessibility, fast load times, and intuitive navigation, ensuring every visitor enjoys a flawless experience. We use the latest CSS and JavaScript frameworks to deliver pixel-perfect layouts and interactive features.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCloud /> Web Application Development</h3><p className="super-card-desc">Custom web apps built for scalability, performance, and security, using the latest technologies and frameworks.<br /><br />
We architect solutions for growth, integrating cloud services, APIs, and databases to support your evolving business needs. Our team ensures your app is robust, maintainable, and ready for future enhancements.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaSearch /> SEO Optimization</h3><p className="super-card-desc">Boost your online visibility and rankings with advanced SEO strategies and technical optimization.<br /><br />
We optimize site structure, content, and metadata to improve search engine performance. Our approach includes keyword research, analytics, and ongoing monitoring to keep your site ahead of the competition.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaShieldAlt /> Security & Compliance</h3><p className="super-card-desc">We implement robust security protocols and ensure compliance with industry standards to protect your data and users.<br /><br />
Our solutions include SSL encryption, secure authentication, and regular vulnerability assessments. We help you meet GDPR, PCI, and other regulatory requirements for peace of mind.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#2a5298'}}/> Corporate & Enterprise</h3><p className="super-card-desc">Enterprise-grade web solutions for internal portals, business automation, and digital transformation.<br /><br />
We streamline workflows, improve collaboration, and enable data-driven decision making with custom enterprise platforms.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaShoppingCart style={{color:'#e63946'}}/> eCommerce</h3><p className="super-card-desc">Custom online stores, product catalogs, and secure payment integrations for retail businesses.<br /><br />
Our eCommerce solutions support inventory management, customer engagement, and marketing automation for growth.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#457b9d'}}/> Startups</h3><p className="super-card-desc">Agile web development for MVPs, landing pages, and scalable platforms to launch your ideas fast.<br /><br />
We help startups validate concepts, attract users, and scale quickly with flexible, cost-effective solutions.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#f4a261'}}/> Education</h3><p className="super-card-desc">E-learning platforms, school websites, and online course management systems for educators.<br /><br />
Our platforms enable online courses, assessments, and collaboration tools for modern learning experiences.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">Cutting-Edge Technology</h3><p className="super-card-desc">We use the latest frameworks and tools to deliver modern, future-proof web solutions.<br /><br />
Our developers stay ahead of trends, adopting new technologies to keep your site competitive and secure.</p></div>
            <div className="super-card"><h3 className="super-card-title">Performance & Scalability</h3><p className="super-card-desc">Our web apps are optimized for speed, reliability, and growth as your business expands.<br /><br />
We monitor performance, optimize code, and design scalable architectures to support your future needs.</p></div>
            <div className="super-card"><h3 className="super-card-title">User-Centric Design</h3><p className="super-card-desc">We focus on intuitive navigation and engaging interfaces to maximize user satisfaction.<br /><br />
Our design process includes user research, usability testing, and feedback-driven improvements.</p></div>
            <div className="super-card"><h3 className="super-card-title">End-to-End Support</h3><p className="super-card-desc">From planning to launch and beyond, we provide ongoing support and maintenance.<br /><br />
Our team is available for updates, troubleshooting, and enhancements as your business evolves.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our Web Development Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaSearch style={{color:'#2a5298'}}/> Discovery & Planning</h3><p className="super-card-desc">We analyze your requirements, research competitors, and define project goals for a clear roadmap.<br /><br />
This phase ensures we understand your business, audience, and objectives before starting design or development.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass style={{color:'#e63946'}}/> Design & Prototyping</h3><p className="super-card-desc">Wireframes and prototypes help visualize the user journey and get your feedback before development.<br /><br />
We iterate on designs, gather feedback, and refine user flows to create a blueprint for your site.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLaptopCode style={{color:'#457b9d'}}/> Development</h3><p className="super-card-desc">Our developers build robust, scalable web solutions using best practices and modern tech stacks.<br /><br />
We follow agile methodologies, maintain clean code, and ensure every feature meets your requirements.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#f4a261'}}/> Testing & Launch</h3><p className="super-card-desc">Comprehensive QA ensures your site is bug-free, secure, and ready for launch.<br /><br />
We test across browsers and devices, fix issues, and deploy your site with confidence.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#264653'}}/> Maintenance & Support</h3><p className="super-card-desc">We provide updates, performance monitoring, and ongoing support to keep your site running smoothly.<br /><br />
Our support team is available for troubleshooting, enhancements, and proactive maintenance.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "How long does it take to build a website?",
                a: "Project timelines vary based on complexity and requirements. Most websites are delivered within 4-8 weeks.",
                icon: <FaClock style={{color:'#2a5298'}}/>
              },
              {
                q: "Can you redesign my existing website?",
                a: "Absolutely! We specialize in modernizing outdated sites and improving user experience.",
                icon: <FaRocket style={{color:'#e63946'}}/>
              },
              {
                q: "Do you offer SEO services?",
                a: "Yes, we provide comprehensive SEO optimization to boost your site's visibility and ranking.",
                icon: <FaSearch style={{color:'#457b9d'}}/>
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "All our websites are fully responsive and optimized for mobile devices.",
                icon: <FaMobileAlt style={{color:'#f4a261'}}/>
              },
              {
                q: "Do you provide ongoing support?",
                a: "We offer maintenance packages and support to keep your website secure and up-to-date.",
                icon: <FaLifeRing style={{color:'#264653'}}/>
              }
            ].map((item, idx) => (
              <FAQItem key={idx} item={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
