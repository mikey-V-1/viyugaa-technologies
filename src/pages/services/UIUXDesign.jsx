import React, { useState } from 'react';
import '../../styles/services/service-uiux.css';
import LazyLottie from '../../components/LazyLottie';
import uiux from "../../assets/uiux.json";
import {
  FaPalette,
  FaPencilRuler,
  FaUserCheck,
  FaEye,
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

export default function UIUXDesign() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #e63946 0%, #f1faee 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaPalette className="super-icon" /> UI/UX Design</h1>
          <p className="super-desc">We design app and website that not just matches trends but also helps your visitors navigate easily. Our process balances aesthetics with usability to increase conversions and engagement.</p>
        </div>
          <div className="lottie-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "420px", maxWidth: "42vw", minWidth: "320px" }}>
              <LazyLottie animationUrl={'/animations/uiux.json'} loop={true} style={{ width: "100%", height: "420px" }} />
            </div>
          </div>
      </div>
      <div className="service-uiux-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our UI/UX Design Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaPencilRuler /> Wireframing & Prototyping</h3><p className="super-card-desc">We create detailed wireframes and interactive prototypes to visualize user flows and validate concepts before development.<br /><br />
Our process ensures clarity, reduces rework, and aligns stakeholders on the final product vision.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPalette /> Visual Design</h3><p className="super-card-desc">Stunning visuals, color schemes, and typography that reflect your brand and captivate users.<br /><br />
We design interfaces that are both aesthetically pleasing and easy to use, enhancing your brand identity.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUserCheck /> User Research</h3><p className="super-card-desc">We conduct user interviews, surveys, and usability tests to understand your audience and improve design decisions.<br /><br />
Our research-driven approach ensures your product meets real user needs and expectations.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaEye /> Usability Testing</h3><p className="super-card-desc">Rigorous testing to identify pain points, optimize workflows, and deliver seamless user experiences.<br /><br />
We iterate on designs based on feedback, ensuring every interaction is smooth and intuitive.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt style={{color:'#e63946'}}/> Mobile Apps</h3><p className="super-card-desc">UI/UX for mobile applications, focusing on touch-friendly interfaces and engaging user journeys.<br /><br />
We design for iOS, Android, and cross-platform apps, ensuring consistency and delight across devices.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#457b9d'}}/> SaaS & Enterprise</h3><p className="super-card-desc">Designing dashboards, portals, and complex workflows for SaaS and enterprise platforms.<br /><br />
Our solutions simplify complexity, making data and features accessible to all users.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaRocket style={{color:'#f4a261'}}/> Startups</h3><p className="super-card-desc">Rapid prototyping and branding for startups looking to launch innovative products.<br /><br />
We help you validate ideas, attract users, and build a strong visual identity from day one.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education</h3><p className="super-card-desc">E-learning platforms, school apps, and educational websites designed for engagement and accessibility.<br /><br />
We create interfaces that support learning, collaboration, and progress tracking for students and educators.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">User-Focused Approach</h3><p className="super-card-desc">We put users at the center of every design decision, ensuring intuitive and enjoyable experiences.<br /><br />
Our process includes user research, persona development, and continuous feedback.</p></div>
            <div className="super-card"><h3 className="super-card-title">Creative Excellence</h3><p className="super-card-desc">Our designers blend creativity with strategy to deliver visually stunning and effective interfaces.<br /><br />
We stay ahead of design trends and use the latest tools for best results.</p></div>
            <div className="super-card"><h3 className="super-card-title">Collaboration & Transparency</h3><p className="super-card-desc">We work closely with clients, sharing progress and inviting feedback at every stage.<br /><br />
Our transparent process ensures your vision is realized and expectations are met.</p></div>
            <div className="super-card"><h3 className="super-card-title">End-to-End Service</h3><p className="super-card-desc">From ideation to launch, we support you through every step of the design journey.<br /><br />
We provide ongoing support, updates, and enhancements as your product evolves.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our UI/UX Design Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaUserCheck style={{color:'#e63946'}}/> Research & Discovery</h3><p className="super-card-desc">We start by understanding your users, business goals, and market landscape.<br /><br />
This phase includes interviews, surveys, and competitor analysis to inform design decisions.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPencilRuler style={{color:'#457b9d'}}/> Wireframing</h3><p className="super-card-desc">Low-fidelity wireframes map out user flows, layouts, and core interactions.<br /><br />
We iterate quickly, gathering feedback and refining concepts before moving to visuals.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaPalette style={{color:'#f4a261'}}/> Visual Design</h3><p className="super-card-desc">High-fidelity mockups bring your brand to life with color, typography, and imagery.<br /><br />
We ensure consistency, accessibility, and emotional impact in every screen.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaEye style={{color:'#1d3557'}}/> Usability Testing</h3><p className="super-card-desc">We test designs with real users, identify pain points, and optimize for clarity and ease of use.<br /><br />
Feedback drives improvements, resulting in a polished, user-friendly product.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "What is UI/UX design and why is it important?",
                a: "UI/UX design focuses on creating interfaces that are visually appealing and easy to use. It improves user satisfaction, engagement, and business outcomes.",
                icon: <FaQuestionCircle style={{color:'#e63946'}}/>
              },
              {
                q: "How do you ensure my design matches my brand?",
                a: "We work closely with you to understand your brand values, style, and audience, ensuring every design element aligns with your identity.",
                icon: <FaPalette style={{color:'#457b9d'}}/>
              },
              {
                q: "Do you conduct user research?",
                a: "Yes, we use interviews, surveys, and analytics to understand user needs and behaviors, informing design decisions.",
                icon: <FaUserCheck style={{color:'#f4a261'}}/>
              },
              {
                q: "Can you redesign my existing app or website?",
                a: "Absolutely! We specialize in modernizing interfaces and improving usability for existing products.",
                icon: <FaRocket style={{color:'#1d3557'}}/>
              },
              {
                q: "Do you provide ongoing design support?",
                a: "We offer maintenance, updates, and enhancements to keep your product fresh and competitive.",
                icon: <FaBook style={{color:'#e63946'}}/>
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
