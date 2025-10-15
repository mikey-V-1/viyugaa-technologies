import React, { useState } from 'react';
import '../../styles/services/service-maintenance.css';
import LazyLottie from '../../components/LazyLottie';
import softwaremaintance from "../../assets/softwaremaintance.json";
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
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle
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

export default function SoftwareMaintenanceSupport() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #264653 0%, #e9c46a 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaTools className="super-icon" /> Software Maintenance & Support</h1>
          <p className="super-desc">Ensuring optimal software performance through reliable maintenance and comprehensive support services. We provide proactive monitoring, updates and redesign when needed to keep your systems healthy.</p>
        </div>
        <div style={{ flex: "0 0 320px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(90deg, #264653 0%, #e9c46a 100%)", borderRadius: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "24px", maxWidth: "320px", width: "320px" }}>
            <div className="lottie-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "420px", maxWidth: "42vw", minWidth: "320px" }}>
                <LazyLottie animationUrl={'/animations/softwaremaintance.json'} loop={true} style={{ width: "100%", height: "420px" }} />
              </div>
            </div>
        </div>
      </div>
      <div className="service-maintenance-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our Maintenance & Support Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle /> Bug Fixes & Updates</h3><p className="super-card-desc">We resolve issues quickly and keep your software up-to-date with the latest features and improvements.<br /><br />
Our team monitors for bugs, applies patches, and ensures smooth operation.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaShieldAlt /> Security Enhancements</h3><p className="super-card-desc">Protect your data and users with robust security protocols, regular audits, and vulnerability assessments.<br /><br />
We help you meet compliance requirements and defend against threats.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing /> 24/7 Support</h3><p className="super-card-desc">Our support team is available around the clock to address issues and answer questions.<br /><br />
We provide fast response times and dedicated assistance for mission-critical systems.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket /> Performance Monitoring</h3><p className="super-card-desc">Continuous monitoring and optimization to ensure your software runs efficiently and scales with your business.<br /><br />
We track key metrics, identify bottlenecks, and recommend improvements.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt style={{color:'#264653'}}/> Mobile & SaaS</h3><p className="super-card-desc">Maintenance and support for mobile apps, SaaS platforms, and cloud-based solutions.<br /><br />
We keep your products secure, updated, and performing at their best.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#e63946'}}/> Enterprise Systems</h3><p className="super-card-desc">Support for business automation, data management, and collaboration platforms.<br /><br />
Our services ensure reliability and compliance for mission-critical operations.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#f4a261'}}/> Startups & Growth Companies</h3><p className="super-card-desc">Scalable support for fast-growing businesses and evolving software products.<br /><br />
We help you adapt quickly and stay ahead of the competition.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education & Training</h3><p className="super-card-desc">Support for e-learning platforms, training apps, and educational software.<br /><br />
We ensure smooth operation and continuous improvement for learners and educators.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">Proactive Maintenance</h3><p className="super-card-desc">We anticipate issues and address them before they impact your business.<br /><br />
Our monitoring and updates keep your software running smoothly.</p></div>
            <div className="super-card"><h3 className="super-card-title">Security First</h3><p className="super-card-desc">We prioritize data protection and compliance, defending against threats and vulnerabilities.<br /><br />
Our team stays current with security best practices and regulations.</p></div>
            <div className="super-card"><h3 className="super-card-title">24/7 Support</h3><p className="super-card-desc">Our support team is available any time you need help, ensuring peace of mind.<br /><br />
We respond quickly and resolve issues efficiently.</p></div>
            <div className="super-card"><h3 className="super-card-title">Continuous Improvement</h3><p className="super-card-desc">We help you evolve your software with new features, optimizations, and enhancements.<br /><br />
Our services support your growth and changing needs.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our Maintenance & Support Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaTools style={{color:'#264653'}}/> Assessment & Planning</h3><p className="super-card-desc">We evaluate your software, identify risks, and create a maintenance plan tailored to your needs.<br /><br />
This phase ensures proactive support and clear priorities.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#e63946'}}/> Bug Fixes & Updates</h3><p className="super-card-desc">Rapid issue resolution and regular updates to keep your software secure and functional.<br /><br />
We monitor for bugs, apply patches, and communicate progress.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaShieldAlt style={{color:'#f4a261'}}/> Security Audits</h3><p className="super-card-desc">Regular security assessments and compliance checks to protect your data and users.<br /><br />
We help you meet regulatory requirements and defend against threats.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#1d3557'}}/> Performance Optimization</h3><p className="super-card-desc">Continuous monitoring and tuning to ensure your software runs efficiently and scales with your business.<br /><br />
We track metrics, identify bottlenecks, and recommend improvements.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#264653'}}/> 24/7 Support</h3><p className="super-card-desc">Dedicated support team available any time for troubleshooting and assistance.<br /><br />
We provide fast response times and expert help for mission-critical systems.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "What types of software do you support?",
                a: "We support web apps, mobile apps, SaaS platforms, enterprise systems, and more.",
                icon: <FaQuestionCircle style={{color:'#264653'}}/>
              },
              {
                q: "How quickly do you resolve issues?",
                a: "Our team responds rapidly and resolves most issues within hours, depending on severity.",
                icon: <FaCheckCircle style={{color:'#e63946'}}/>
              },
              {
                q: "Do you provide 24/7 support?",
                a: "Yes, our support team is available around the clock for mission-critical systems.",
                icon: <FaLifeRing style={{color:'#f4a261'}}/>
              },
              {
                q: "How do you ensure security?",
                a: "We conduct regular audits, apply security patches, and follow best practices for data protection.",
                icon: <FaShieldAlt style={{color:'#1d3557'}}/>
              },
              {
                q: "Can you help with performance optimization?",
                a: "Absolutely! We monitor metrics, identify bottlenecks, and recommend improvements for efficiency.",
                icon: <FaRocket style={{color:'#264653'}}/>
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
