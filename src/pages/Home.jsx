
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaCode, FaCogs, FaRocket, FaUsers, FaBook, FaCloud, FaShieldAlt, FaDraftingCompass, FaChartLine, FaIndustry, FaHospital, FaHeartbeat, FaGraduationCap, FaMoneyBillWave, FaBriefcase } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import '../styles/home.css';


export default function Home() {
  return (
    <main className="home">
      {/* Hero Section with 3D Animation */}
      <motion.section
        className="hero"
        style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',background:'linear-gradient(90deg,#1e3c72 0%,#f4a261 100%)',borderRadius:'32px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)',marginBottom:'2.5rem',padding:'2.5rem 2rem'}}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{flex:1,textAlign:'left'}} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 style={{fontSize:'2.5rem',fontWeight:'bold',color:'#fff',marginBottom:'1.2rem'}}><FaRocket style={{marginRight:'12px',color:'#f4a261'}}/>Viyugaa Technologies</h1>
          <p style={{fontSize:'1.15rem',color:'#fff',lineHeight:'1.8',marginBottom:'1.5rem'}}>
            Empowering businesses with innovative digital solutions, Viyugaa Technologies delivers custom software, web, and mobile app development for startups, SMEs, and enterprises. Our team blends creativity, technical expertise, and industry best practices to engineer scalable, secure, and user-centric applications. We help you transform ideas into impactful products that drive growth and digital transformation.
          </p>
          <Link className="cta-btn" to="/contact">Get Started</Link>
        </motion.div>
        <motion.div style={{flex:'0 0 340px',display:'flex',justifyContent:'center',alignItems:'center'}} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Player src="phone-app-animation.json" style={{width:'320px',height:'320px'}} loop autoplay />
        </motion.div>
      </motion.section>

      {/* Expanded Services Section with Icons */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="services-title"><FaCogs style={{color:'#2a5298',marginRight:'8px'}}/>Our Services</h2>
        <div className="features">
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}><FaMobileAlt style={{fontSize:'2rem',color:'#1e3c72'}}/><h3>Mobile App Development</h3><p>Custom mobile apps for Android, iOS, React Native, and Flutter. Enterprise-level solutions for any industry.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}><FaCode style={{fontSize:'2rem',color:'#f4a261'}}/><h3>Custom Software Development</h3><p>Tailored software to automate workflows, integrate systems, and solve unique business challenges.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}><FaCloud style={{fontSize:'2rem',color:'#2a5298'}}/><h3>Web Development</h3><p>Modern, responsive web applications and websites built for performance, security, and scalability.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}><FaDraftingCompass style={{fontSize:'2rem',color:'#e63946'}}/><h3>UI/UX Design</h3><p>Intuitive, engaging interfaces and user experiences that delight and convert visitors into customers.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}><FaCogs style={{fontSize:'2rem',color:'#f4a261'}}/><h3>ERP & Product Engineering</h3><p>Robust ERP solutions and product engineering for business automation and growth.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}><FaShieldAlt style={{fontSize:'2rem',color:'#2a5298'}}/><h3>Software Migration & Support</h3><p>Legacy system migration, ongoing maintenance, and reliable support for optimal performance.</p></motion.div>
        </div>
      </motion.section>

      {/* Industries Section with Icons */}
      <motion.section
        className="industries-section"
        style={{margin:'3rem 0',padding:'2rem',background:'#f8f9fa',borderRadius:'24px',boxShadow:'0 2px 12px rgba(30,60,114,0.08)'}}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 style={{fontSize:'1.5rem',color:'#2a5298',marginBottom:'1rem'}}><FaIndustry style={{marginRight:'8px'}}/>Industries We Serve</h2>
        <div className="features">
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}><FaIndustry style={{fontSize:'2rem',color:'#1e3c72'}}/><h3>Manufacturing</h3><p>Automated systems, inventory management, and supply chain optimization for manufacturers.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}><FaHospital style={{fontSize:'2rem',color:'#e63946'}}/><h3>Hospitality</h3><p>Hotel and restaurant solutions for small, medium, and large businesses.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}><FaHeartbeat style={{fontSize:'2rem',color:'#f4a261'}}/><h3>Healthcare</h3><p>HIPAA-compliant apps, doctor appointment systems, and healthcare management solutions.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}><FaGraduationCap style={{fontSize:'2rem',color:'#2a5298'}}/><h3>Education</h3><p>eLearning portals, school management systems, and online course platforms.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}><FaMoneyBillWave style={{fontSize:'2rem',color:'#f4a261'}}/><h3>Fintech</h3><p>Customer-facing apps, staff solutions, and comprehensive fintech platforms.</p></motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}><FaBriefcase style={{fontSize:'2rem',color:'#2a5298'}}/><h3>HRM & Recruitment</h3><p>HRM and recruitment applications to manage processes and boost productivity.</p></motion.div>
        </div>
      </motion.section>

      {/* Technologies Section with Logos and Paragraph */}
      <motion.section
        className="logos-home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2><FaRocket style={{color:'#f4a261',marginRight:'8px'}}/>Technologies We Use</h2>
        <p style={{fontSize:'1.08rem',color:'#444',lineHeight:'1.7',margin:'1.2rem 0 2rem 0',maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>
          At Viyugaa Technologies, we leverage a modern technology stack to deliver robust, scalable, and future-proof solutions for our clients. Our expertise includes React for building dynamic user interfaces, Node.js for high-performance backend services, and Figma for collaborative design and prototyping. We utilize Google Cloud for secure, scalable infrastructure and integrate with platforms like Facebook for social connectivity. By combining these technologies, we ensure every project is efficient, secure, and ready to grow with your business needs.
        </p>
        <div className="logos-grid-home">
          <motion.div className="logo-card-home" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}><img src="/images/home page/react.png" alt="React" className="logo-img-home" /><span>React</span></motion.div>
          <motion.div className="logo-card-home" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}><img src="/images/home page/nodejs.png" alt="Node.js" className="logo-img-home" /><span>Node.js</span></motion.div>
          <motion.div className="logo-card-home" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}><img src="/images/home page/figma.png" alt="Figma" className="logo-img-home" /><span>Figma</span></motion.div>
          <motion.div className="logo-card-home" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}><img src="/images/home page/googlecloud.png" alt="Google Cloud" className="logo-img-home" /><span>Google Cloud</span></motion.div>
          <motion.div className="logo-card-home" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}><img src="/images/home page/facebook.png" alt="Facebook" className="logo-img-home" /><span>Facebook</span></motion.div>
        </div>
      </motion.section>

      {/* About Company Section (Paragraph) */}
      <motion.section
        className="about-services-tech-home"
        style={{margin:'3rem 0',padding:'2rem',background:'#fff',borderRadius:'24px',boxShadow:'0 2px 12px rgba(30,60,114,0.08)'}}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 style={{fontSize:'1.5rem',color:'#2a5298',marginBottom:'1rem'}}><FaUsers style={{marginRight:'8px'}}/>About Viyugaa Technologies</h2>
        <p style={{fontSize:'1.08rem',color:'#444',lineHeight:'1.7'}}>
          With over a decade of experience, Viyugaa Technologies is a trusted partner for digital transformation. We serve diverse industries including manufacturing, hospitality, insurance, entertainment, healthcare, education, fintech, and HRM. Our client-centric approach, transparent communication, and commitment to deadlines ensure every project is delivered efficiently and cost-effectively. We believe in building long-term relationships and helping our clients achieve measurable success through technology.
        </p>
        <p style={{fontSize:'1.08rem',color:'#444',lineHeight:'1.7',marginTop:'1.2rem'}}>
          Inspired by the best practices of leading companies like Codzgarage, we combine agility, innovation, and deep technical expertise to deliver outstanding results. Our team is dedicated to your success, from ideation to launch and beyond.
        </p>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        className="contact-cta-home"
        style={{margin:'2.5rem 0',padding:'2rem',background:'linear-gradient(90deg,#2a5298 0%,#f4a261 100%)',borderRadius:'24px',color:'#fff',textAlign:'center'}}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 style={{fontSize:'1.4rem',marginBottom:'1rem'}}><FaRocket style={{marginRight:'8px'}}/>Ready to Start Your Project?</h2>
        <p style={{fontSize:'1.08rem',marginBottom:'1.2rem'}}>Contact us today and let's build something amazing together.</p>
  <Link className="cta-btn" to="/contact">Contact Us</Link>
      </motion.section>
    </main>
  );
}
