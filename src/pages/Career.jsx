import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/career.css'
import SEO from '../components/SEO';
import seoData from '../lib/seoData';

export default function Career() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  const navigate = useNavigate()

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="career-page" ref={targetRef}>
      
<SEO {...seoData.career} />

      {/* Modern Hero Section with Parallax */}
      <div className="hero-parallax">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1>Build the <span className="highlight">Future</span> with Us</h1>
          <p className="hero-subtitle">Join Viyugaa Technologies and transform ideas into innovative digital solutions that impact millions</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>

      {/* Why Join Us Section */}
      <section className="values-section">
        <motion.div 
          className="section-title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Why Join Viyugaa Technologies?</h2>
          <p>We offer more than just a job—we offer a career of growth and innovation</p>
        </motion.div>

        <motion.div 
          className="values-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon">💡</div>
            <h3>Innovation First</h3>
            <p>Work on cutting-edge technologies and solve complex problems that matter</p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon">🚀</div>
            <h3>Career Growth</h3>
            <p>Continuous learning opportunities, mentorship, and career advancement paths</p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon">🤝</div>
            <h3>Collaborative Culture</h3>
            <p>Work with talented professionals in a supportive and inclusive environment</p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon">⚙️</div>
            <h3>Modern Tech Stack</h3>
            <p>Work with latest technologies: React, Node.js, Cloud, Mobile, and more</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Open Positions Section */}
      <section className="process-section">
        <motion.div 
          className="section-title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Open Positions</h2>
          <p>Join our growing team of talented developers and designers</p>
        </motion.div>

        <div className="process-timeline">
          {[
            {
              step: "1",
              title: "Web Developers",
              description: "Frontend & Backend developers proficient in React, Node.js, and modern frameworks"
            },
            {
              step: "2",
              title: "Mobile App Developers",
              description: "iOS and Android developers with experience in React Native or Flutter"
            },
            {
              step: "3",
              title: "UI/UX Designers",
              description: "Creative designers who can craft beautiful and intuitive user experiences"
            },
            {
              step: "4",
              title: "DevOps & Cloud Engineers",
              description: "Infrastructure specialists with AWS, Azure, or GCP experience"
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="step-number">{process.step}</div>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="team-section">
        <motion.div 
          className="section-title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Meet Our Leadership</h2>
          <p>Visionary leaders driving innovation in technology solutions</p>
        </motion.div>

        <div className="team-grid">
          {[
            {
              name: "Founder & CEO",
              role: "Visionary Leader",
              image: "/assets/team/ceo.jpg",
              bio: "Pioneering digital transformation across industries"
            },
            {
              name: "CTO",
              role: "Chief Technology Officer",
              image: "/assets/team/cto.jpg",
              bio: "Architecting scalable solutions with emerging technologies"
            },
            {
              name: "COO",
              role: "Chief Operating Officer",
              image: "/assets/team/coo.jpg",
              bio: "Driving operational excellence and scaling processes"
            }
            
          ].map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/viyugaa-technologies-7a880b3a2/" className="social-icon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="impact-section">
        <motion.div 
          className="section-title"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Our Track Record</h2>
          <p>Delivering excellence in every project we undertake</p>
        </motion.div>

        <div className="impact-stats">
          {[
            {
              number: "100+",
              label: "Projects Delivered",
              icon: "🏗️"
            },
            {
              number: "50+",
              label: "Happy Clients",
              icon: "😊"
            },
            {
              number: "80+",
              label: "Expert Professionals",
              icon: "👨‍💼"
            },
            {
              number: "15+",
              label: "Years of Excellence",
              icon: "🏆"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {stat.number}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="contact-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Journey?</h2>
          <p>Apply now and join a team that's transforming the digital landscape</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </section>

    </div>
  )
}