import React, { useState } from 'react';
import '../../styles/services/service-custom-software.css';
import Lottie from "lottie-react";
import customsoftware from "../../assets/customsoftware.json";
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

export default function CustomSoftwareDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #2a5298 0%, #f4a261 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaCode className="super-icon" /> Custom Software Development</h1>
          <p className="super-desc">Unlock your business potential with custom software solutions designed just for you. We build scalable, secure, and cost-effective applications that solve your unique challenges.<br /><br />
Our team works closely with you to understand your goals, automate processes, and deliver software that grows with your business.</p>
        </div>
        <div style={{ flex: "0 0 320px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(90deg, #2a5298 0%, #f4a261 100%)", borderRadius: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "24px", maxWidth: "320px", width: "320px" }}>
          <Lottie animationData={customsoftware} loop={true} style={{ width: "100%", height: "320px" }} />
        </div>
      </div>
      <div className="service-custom-software-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our Custom Software Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaCogs /> Business Automation</h3><p className="super-card-desc">Automate repetitive tasks, streamline workflows, and boost productivity with tailored software solutions.<br /><br />
We design systems that save time, reduce errors, and improve efficiency.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPuzzlePiece /> Custom Integrations</h3><p className="super-card-desc">Integrate your software with third-party tools, APIs, and platforms for seamless data flow.<br /><br />
Our integrations connect your business and unlock new capabilities.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket /> Scalable Architecture</h3><p className="super-card-desc">We build scalable, future-proof applications that grow with your business and adapt to changing needs.<br /><br />
Our architecture supports expansion, new features, and high performance.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing /> Ongoing Support</h3><p className="super-card-desc">Our team provides maintenance, updates, and troubleshooting to keep your software running smoothly.<br /><br />
We ensure reliability and continuous improvement for your applications.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt style={{color:'#2a5298'}}/> Mobile & SaaS</h3><p className="super-card-desc">Custom software for mobile apps, SaaS platforms, and cloud-based solutions.<br /><br />
We build products for startups, enterprises, and everything in between.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#e63946'}}/> Enterprise Solutions</h3><p className="super-card-desc">Business automation, data management, and collaboration tools for enterprises.<br /><br />
Our solutions streamline operations and drive digital transformation.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#f4a261'}}/> Startups & Growth Companies</h3><p className="super-card-desc">Agile development for fast-growing businesses and innovative products.<br /><br />
We help you launch quickly and scale efficiently.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education & Training</h3><p className="super-card-desc">Custom software for e-learning platforms, training apps, and educational products.<br /><br />
We support online courses, assessments, and collaboration for learners and educators.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">Tailored Solutions</h3><p className="super-card-desc">Every software product is custom-built to fit your business needs and goals.<br /><br />
We listen, analyze, and deliver solutions that solve your unique challenges.</p></div>
            <div className="super-card"><h3 className="super-card-title">Scalability & Flexibility</h3><p className="super-card-desc">Our software grows with your business, adapting to new requirements and opportunities.<br /><br />
We design systems that are easy to expand and modify.</p></div>
            <div className="super-card"><h3 className="super-card-title">Expert Support</h3><p className="super-card-desc">Our team provides training, documentation, and ongoing assistance for smooth operations.<br /><br />
We help you get the most from your investment.</p></div>
            <div className="super-card"><h3 className="super-card-title">Cost-Effective Development</h3><p className="super-card-desc">We deliver high-quality software at competitive prices, maximizing your ROI.<br /><br />
Our process is efficient, transparent, and focused on value.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our Custom Software Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaCogs style={{color:'#2a5298'}}/> Requirements Analysis</h3><p className="super-card-desc">We gather requirements, analyze workflows, and define project scope for a clear roadmap.<br /><br />
This phase ensures your software meets all business needs.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass style={{color:'#e63946'}}/> System Design</h3><p className="super-card-desc">We design system architecture, data models, and user interfaces for optimal performance.<br /><br />
Our designs prioritize usability, scalability, and integration.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#f4a261'}}/> Development & Integration</h3><p className="super-card-desc">Agile development and seamless integration with existing systems and third-party tools.<br /><br />
We ensure smooth data flow and reliable operation.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#1d3557'}}/> Testing & Launch</h3><p className="super-card-desc">Comprehensive QA, deployment, and launch support for your custom software.<br /><br />
We test, deploy, and monitor your product for success.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#2a5298'}}/> Support & Enhancement</h3><p className="super-card-desc">Continuous support, maintenance, and feature enhancements post-launch.<br /><br />
Our team is dedicated to your software's long-term success.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "What is custom software development?",
                a: "Custom software is built specifically for your business needs, offering unique features and integrations.",
                icon: <FaQuestionCircle style={{color:'#2a5298'}}/>
              },
              {
                q: "Can you integrate with my existing systems?",
                a: "Yes, we specialize in seamless integration with databases, CRMs, accounting software, and more.",
                icon: <FaPuzzlePiece style={{color:'#e63946'}}/>
              },
              {
                q: "How long does custom development take?",
                a: "Timelines vary by scope and complexity. We provide clear estimates after initial analysis.",
                icon: <FaRocket style={{color:'#f4a261'}}/>
              },
              {
                q: "Do you provide training and support?",
                a: "Absolutely! We offer onboarding, documentation, and ongoing assistance for your team.",
                icon: <FaLifeRing style={{color:'#1d3557'}}/>
              },
              {
                q: "Is custom software expensive?",
                a: "We deliver high-quality solutions at competitive prices, maximizing your ROI.",
                icon: <FaCheckCircle style={{color:'#2a5298'}}/>
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
