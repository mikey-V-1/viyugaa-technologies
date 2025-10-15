import React, { useState } from 'react';
import '../../styles/services/service-product.css';
import LazyLottie from '../../components/LazyLottie';
import softwareproduct from "../../assets/softwareproduct.json";
import {
  FaCubes,
  FaDraftingCompass,
  FaRocket,
  FaCode,
  FaCheckCircle,
  FaLifeRing,
  FaMobileAlt,
  FaUsers,
  FaShoppingCart,
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

export default function SoftwareProductDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <div className="super-hero-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", margin: "32px 0", background: "linear-gradient(90deg, #457b9d 0%, #a8dadc 100%)", borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ flex: 1 }}>
          <h1 className="super-title"><FaCubes className="super-icon" /> Software Product Development</h1>
          <p className="super-desc">Grab the best software products for your varied business needs and explore how we deliver it. We help you choose, customize, and deploy solutions that accelerate your operations and value.</p>
        </div>
          <div className="lottie-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "420px", maxWidth: "42vw", minWidth: "320px" }}>
              <LazyLottie animationUrl={'/animations/softwareproduct.json'} loop={true} style={{ width: "100%", height: "420px" }} />
            </div>
          </div>
      </div>
      <div className="service-product-super">
        {/* Services Section */}
        <section className="super-services-section">
          <h2 className="super-section-title">Our Product Development Services</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass /> Product Strategy & Planning</h3><p className="super-card-desc">We help you define product vision, market fit, and go-to-market strategy for successful launches.<br /><br />
Our experts analyze trends, competitors, and user needs to shape your product roadmap.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCode /> Prototyping & MVP Development</h3><p className="super-card-desc">Rapid prototyping and MVPs to validate ideas, attract investors, and gather user feedback.<br /><br />
We build functional prototypes and minimum viable products to accelerate time-to-market.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCubes /> Full-Cycle Product Engineering</h3><p className="super-card-desc">End-to-end development, from architecture to deployment, using agile methodologies and best practices.<br /><br />
Our engineers deliver scalable, secure, and maintainable products for long-term success.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle /> Product Launch & Support</h3><p className="super-card-desc">We manage product launches, marketing, and ongoing support to ensure growth and customer satisfaction.<br /><br />
Our team provides updates, troubleshooting, and enhancements post-launch.</p></div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="super-industries-section">
          <h2 className="super-section-title">Industries We Serve</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaMobileAlt style={{color:'#457b9d'}}/> Mobile & SaaS</h3><p className="super-card-desc">Product development for mobile apps, SaaS platforms, and cloud-based solutions.<br /><br />
We build scalable products for startups, enterprises, and everything in between.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaUsers style={{color:'#e63946'}}/> Enterprise Solutions</h3><p className="super-card-desc">Custom software products for business automation, data management, and collaboration.<br /><br />
Our solutions streamline operations and drive digital transformation.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaShoppingCart style={{color:'#f4a261'}}/> eCommerce & Retail</h3><p className="super-card-desc">Online stores, inventory systems, and customer engagement platforms for retailers.<br /><br />
We help you grow sales and improve customer experiences with tailored products.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaBook style={{color:'#1d3557'}}/> Education & Training</h3><p className="super-card-desc">E-learning platforms, training apps, and educational products for modern learners.<br /><br />
Our products support online courses, assessments, and collaboration for students and educators.</p></div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="super-benefits-section">
          <h2 className="super-section-title">Why Choose Us?</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title">Innovation & Expertise</h3><p className="super-card-desc">We bring fresh ideas and deep technical knowledge to every project.<br /><br />
Our team stays ahead of trends, adopting new technologies for competitive advantage.</p></div>
            <div className="super-card"><h3 className="super-card-title">Agile & Collaborative</h3><p className="super-card-desc">We work in agile teams, collaborating closely with clients for transparency and flexibility.<br /><br />
Your feedback shapes every stage of development.</p></div>
            <div className="super-card"><h3 className="super-card-title">Quality & Reliability</h3><p className="super-card-desc">We deliver robust, secure, and maintainable products that stand the test of time.<br /><br />
Our QA process ensures every release meets high standards.</p></div>
            <div className="super-card"><h3 className="super-card-title">End-to-End Support</h3><p className="super-card-desc">From ideation to post-launch, we provide ongoing support and enhancements.<br /><br />
Our team is available for updates, troubleshooting, and growth strategies.</p></div>
          </div>
        </section>
        {/* Process Section */}
        <section className="super-process-section">
          <h2 className="super-section-title">Our Product Development Process</h2>
          <div className="super-cards">
            <div className="super-card"><h3 className="super-card-title"><FaDraftingCompass style={{color:'#457b9d'}}/> Discovery & Strategy</h3><p className="super-card-desc">We define product vision, goals, and roadmap through research and strategic planning.<br /><br />
This phase sets the foundation for successful development and market fit.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCode style={{color:'#e63946'}}/> Prototyping & MVP</h3><p className="super-card-desc">Rapid prototyping and MVP development to validate ideas and gather user feedback.<br /><br />
We iterate quickly, refining features and user flows before full-scale development.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCubes style={{color:'#f4a261'}}/> Full Development</h3><p className="super-card-desc">Agile engineering, testing, and deployment of scalable, secure software products.<br /><br />
We ensure every release meets quality standards and business objectives.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaCheckCircle style={{color:'#1d3557'}}/> Launch & Growth</h3><p className="super-card-desc">Product launch, marketing, and ongoing support for growth and customer satisfaction.<br /><br />
We monitor performance, provide updates, and help you scale.</p></div>
            <div className="super-card"><h3 className="super-card-title"><FaLifeRing style={{color:'#457b9d'}}/> Support & Enhancement</h3><p className="super-card-desc">Continuous support, maintenance, and feature enhancements post-launch.<br /><br />
Our team is dedicated to your product's long-term success.</p></div>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="super-faq-section">
          <h2 className="super-section-title">Frequently Asked Questions</h2>
          <div className="super-faq-list">
            {[
              {
                q: "What is the difference between MVP and full product?",
                a: "An MVP is a minimum viable product with core features for early feedback. A full product includes all planned features and refinements.",
                icon: <FaQuestionCircle style={{color:'#457b9d'}}/>
              },
              {
                q: "How do you ensure product quality?",
                a: "We follow best practices, conduct thorough testing, and gather user feedback to deliver reliable products.",
                icon: <FaCheckCircle style={{color:'#e63946'}}/>
              },
              {
                q: "Can you help with product strategy?",
                a: "Yes, we offer strategic consulting to define vision, market fit, and go-to-market plans.",
                icon: <FaDraftingCompass style={{color:'#f4a261'}}/>
              },
              {
                q: "Do you provide post-launch support?",
                a: "We offer ongoing maintenance, updates, and enhancements to help your product grow.",
                icon: <FaLifeRing style={{color:'#1d3557'}}/>
              },
              {
                q: "How long does product development take?",
                a: "Timelines vary by scope and complexity. We provide clear estimates after initial analysis.",
                icon: <FaRocket style={{color:'#457b9d'}}/>
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
