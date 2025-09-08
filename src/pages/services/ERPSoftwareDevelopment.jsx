import React, { useState } from 'react';
import '../../styles/services/service-erp.css';
import Lottie from "lottie-react";
import erp from "../../assets/erp.json";
import {
  FaProjectDiagram,
  FaDatabase,
  FaCogs,
  FaChartBar,
  FaUsers,
  FaCheckCircle,
  FaLifeRing,
  FaMobileAlt,
  FaRocket,
  FaBook,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
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

export default function ERPSoftwareDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #2a5298 0%, #a8dadc 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaDatabase className="super-icon" /> ERP Software Development</h1>
          <p className="super-desc">Empower your business with custom ERP solutions that streamline operations, improve efficiency, and drive growth.<br /><br />
Our ERP systems are tailored to your unique needs, integrating modules for finance, HR, inventory, and more. We focus on scalability, usability, and seamless integration with your existing tools.</p>
        </div>
        <div style={{ flex: "0 0 320px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(90deg, #2a5298 0%, #a8dadc 100%)", borderRadius: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "24px", maxWidth: "320px", width: "320px" }}>
          <Lottie animationData={erp} loop={true} style={{ width: "100%", height: "320px" }} />
        </div>
      </div>
      <div className="service-erp-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our ERP Development Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaCogs /> Custom ERP Modules</h3><p className="super-card-desc">We build modules for finance, HR, inventory, sales, and more, tailored to your business processes.<br /><br />
Our solutions automate workflows, reduce manual effort, and improve data accuracy.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers /> Integration with Existing Systems</h3><p className="super-card-desc">Seamless integration with your current software, databases, and third-party tools.<br /><br />
We ensure data flows smoothly and securely across your organization.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaChartBar /> Reporting & Analytics</h3><p className="super-card-desc">Advanced reporting and analytics to help you make informed decisions and track performance.<br /><br />
Our dashboards provide real-time insights and customizable reports.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing /> Support & Training</h3><p className="super-card-desc">Comprehensive support and training to ensure your team gets the most from your ERP system.<br /><br />
We provide onboarding, documentation, and ongoing assistance.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt style={{color:'#2a5298'}}/> Manufacturing</h3><p className="super-card-desc">ERP solutions for production planning, inventory management, and supply chain optimization.<br /><br />
We help manufacturers improve efficiency and reduce costs.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#e63946'}}/> Services & Consulting</h3><p className="super-card-desc">ERP for project management, resource allocation, and client engagement.<br /><br />
Our systems support service delivery and business growth.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#f4a261'}}/> Retail & eCommerce</h3><p className="super-card-desc">ERP for sales, inventory, and customer management in retail and online stores.<br /><br />
We enable seamless operations and better customer experiences.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education & Training</h3><p className="super-card-desc">ERP for schools, colleges, and training institutes to manage students, courses, and resources.<br /><br />
Our solutions support learning, administration, and reporting.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">Tailored Solutions</h3><p className="super-card-desc">We customize every ERP system to fit your unique business needs and goals.<br /><br />
Our approach ensures maximum value and efficiency.</p></div>
            <div className="super-card"><h3 className="super-card-title">Scalability & Flexibility</h3><p className="super-card-desc">Our ERP solutions grow with your business, adapting to new requirements and challenges.<br /><br />
We design systems that are easy to expand and modify.</p></div>
            <div className="super-card"><h3 className="super-card-title">Expert Support</h3><p className="super-card-desc">Our team provides training, documentation, and ongoing assistance for smooth operations.<br /><br />
We help you get the most from your investment.</p></div>
            <div className="super-card"><h3 className="super-card-title">Data-Driven Insights</h3><p className="super-card-desc">Advanced analytics and reporting help you make informed decisions and drive growth.<br /><br />
Our dashboards provide actionable intelligence for every department.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our ERP Development Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaCogs style={{color:'#2a5298'}}/> Requirements Analysis</h3><p className="super-card-desc">We gather requirements, analyze workflows, and define project scope for a clear roadmap.<br /><br />
This phase ensures your ERP system meets all business needs.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass style={{color:'#e63946'}}/> System Design</h3><p className="super-card-desc">We design system architecture, data models, and user interfaces for optimal performance.<br /><br />
Our designs prioritize usability, scalability, and integration.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#f4a261'}}/> Development & Integration</h3><p className="super-card-desc">Agile development and seamless integration with existing systems and third-party tools.<br /><br />
We ensure smooth data flow and reliable operation.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaChartBar style={{color:'#1d3557'}}/> Reporting & Analytics</h3><p className="super-card-desc">Implementation of dashboards, reports, and analytics for data-driven decision making.<br /><br />
We provide customizable insights for every department.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#2a5298'}}/> Support & Training</h3><p className="super-card-desc">Comprehensive support, onboarding, and training for your team.<br /><br />
We ensure smooth adoption and ongoing success.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "What is ERP software?",
                a: "ERP (Enterprise Resource Planning) software integrates business processes into a single system for efficiency and control.",
                icon: <FaQuestionCircle style={{color:'#2a5298'}}/>
              },
              {
                q: "Can you integrate ERP with my existing tools?",
                a: "Yes, we specialize in seamless integration with databases, CRMs, accounting software, and more.",
                icon: <FaUsers style={{color:'#e63946'}}/>
              },
              {
                q: "How long does ERP development take?",
                a: "Timelines vary by scope and complexity. We provide clear estimates after initial analysis.",
                icon: <FaRocket style={{color:'#f4a261'}}/>
              },
              {
                q: "Do you provide training and support?",
                a: "Absolutely! We offer onboarding, documentation, and ongoing assistance for your team.",
                icon: <FaLifeRing style={{color:'#1d3557'}}/>
              },
              {
                q: "Can I customize my ERP system?",
                a: "Yes, every ERP solution is tailored to your business needs and can be expanded as you grow.",
                icon: <FaCogs style={{color:'#2a5298'}}/>
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
