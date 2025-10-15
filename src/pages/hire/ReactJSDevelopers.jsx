
import React from 'react';
import '../../styles/hire/hire-reactjs.css';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { FaReact, FaCode, FaTools, FaCogs, FaRocket, FaLayerGroup, FaBolt, FaMobileAlt, FaUserGraduate, FaUserTie, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ReactJSDevelopers() {
  const navigate = useNavigate();
  return (
    <div className="hire-reactjs-super">
      {/* Super Styled Hero Section */}
      <section className="super-hero-section">
        <h1 className="super-title">
          <FaReact className="super-icon" /> Hire React JS Developers
        </h1>
        <p className="super-desc">
          Are you looking to elevate your business with cutting-edge web applications? Our ReactJS developers bring years of experience and deep technical expertise to craft dynamic, scalable, and maintainable solutions tailored to your needs. From building interactive user interfaces to integrating complex APIs and optimizing performance, our team ensures your project stands out in today’s competitive digital landscape. Partner with us to unlock the full potential of ReactJS and deliver seamless, robust experiences to your users—whether you’re a startup or an enterprise ready to innovate and grow.
        </p>
      </section>

      {/* Super Styled Job Roles & Services */}
      <section className="super-job-roles">
        <h2 className="super-section-title">Job Roles & Services</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaCode /> ReactJS Developer</h3>
            <p className="super-card-desc">
              As a ReactJS Developer, you will be responsible for building single-page applications (SPA) that deliver seamless user experiences. You’ll leverage component-based architecture to create reusable, maintainable code, integrate APIs for dynamic data, and optimize performance for fast, responsive interfaces. Your role also includes collaborating on UI/UX design, ensuring the application is visually appealing and user-friendly, and performing thorough testing and ongoing maintenance to guarantee reliability and scalability.
            </p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaTools /> Tools & Frameworks</h3>
            <p className="super-card-desc">
              Our developers are proficient in a wide range of tools and frameworks, including ReactJS for building robust interfaces, Redux and Zustand for state management, and React Router for seamless navigation. We utilize Framer Motion for engaging animations, Material UI and Ant Design for modern component libraries, and Node.js with Express.js for backend integration. Our expertise extends to databases like MongoDB and PostgreSQL, and we ensure code quality with testing tools such as Jest and React Testing Library.
            </p>
          </div>
        </div>
      </section>

      {/* Super Styled Candidate Requirements */}
      <section className="super-candidate-reqs">
        <h2 className="super-section-title">Candidate Requirements</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaUserGraduate /> College Students</h3>
            <p className="super-card-desc">
              College students interested in ReactJS roles should have completed at least two mini projects and one main project, demonstrating their ability to apply ReactJS fundamentals in real-world scenarios. A strong grasp of core concepts, such as components, state, and props, is essential. Additionally, effective communication skills are valued, as they enable collaboration within teams and clear articulation of ideas and solutions.
            </p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaUserTie /> Passout Students</h3>
            <p className="super-card-desc">
              Passout students should bring 1–3 years of hands-on experience in ReactJS development, supported by a portfolio of completed projects that showcase their technical abilities. Familiarity with modern tools and frameworks is expected, along with a proven track record of working effectively in collaborative team environments. These qualities ensure readiness to contribute to complex projects and adapt to evolving technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Super Styled Benefits */}
      <section className="super-benefits">
        <h2 className="super-section-title">Why Hire From Us?</h2>
        <div className="super-cards">
          <div className="super-card">
            <h3 className="super-card-title"><FaRocket /> Specialized Skills</h3>
            <p className="super-card-desc">Our team consists of highly experienced ReactJS developers who possess deep expertise in both web and mobile app development. Their technical proficiency ensures that every project is executed with precision, resulting in innovative solutions that meet diverse business needs.</p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaBolt /> Cost Savings</h3>
            <p className="super-card-desc">We offer flexible engagement models tailored to your requirements, whether you need a dedicated team or individual experts. Our competitive rates make it easy for businesses of all sizes to access top-tier talent without compromising on quality or budget.</p>
          </div>
          <div className="super-card">
            <h3 className="super-card-title"><FaCogs /> Quality & Speed</h3>
            <p className="super-card-desc">By adopting agile methodologies, we ensure faster turnaround times and maintain high standards of quality throughout the development process. Our commitment to excellence guarantees that deliverables are not only timely but also exceed expectations in terms of performance and reliability.</p>
          </div>
        </div>
      </section>

      {/* Super Styled Hiring Process */}
      <section className="super-hiring-process">
        <h2 className="super-section-title">Hiring Process</h2>
        <div className="super-process-steps">
          <div className="super-process-step">
            <FaEnvelope className="super-process-icon" />
            <span className="super-process-desc">Start your hiring journey by sending us an inquiry. Our team will promptly respond to understand your requirements and guide you through the next steps.</span>
          </div>
          <div className="super-process-step">
            <FaLayerGroup className="super-process-icon" />
            <span className="super-process-desc">Choose the engagement model that best fits your project needs, whether it’s hourly, part-time, or full-time hiring. We provide flexible options to ensure seamless collaboration.</span>
          </div>
          <div className="super-process-step">
            <FaUserTie className="super-process-icon" />
            <span className="super-process-desc">Review and screen our pool of talented ReactJS developers. We assist you in selecting candidates who match your technical and cultural requirements for optimal project success.</span>
          </div>
          <div className="super-process-step">
            <FaCode className="super-process-icon" />
            <span className="super-process-desc">Once you’ve selected your developers, we ensure confidentiality and security by signing a Non-Disclosure Agreement (NDA) before project commencement.</span>
          </div>
          <div className="super-process-step">
            <FaRocket className="super-process-icon" />
            <span className="super-process-desc">Easily scale your team as your project grows. Our flexible approach allows you to add or reduce resources based on evolving business needs.</span>
          </div>
        </div>
      </section>

      {/* Super Styled Resume Submission */}
      <section className="super-resume-section">
        <h2 className="super-section-title">Submit Your Resume</h2>
        <form className="super-resume-form">
          <input type="text" placeholder="Full Name" className="super-form-input" required />
          <input type="email" placeholder="Email" className="super-form-input" required />
          <input type="text" placeholder="Phone Number" className="super-form-input" required />
          <textarea placeholder="Brief your experience or requirements" className="super-form-textarea" rows={4} required />
          <input type="file" className="super-form-input" />
          <Button className="super-btn">
            Submit Resume
          </Button>
        </form>
      </section>

     

      {/* Super Styled Animated Demo Section */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="super-animation-demo"
      >
        <h2 className="super-section-title">Animated Demo</h2>
        <p className="super-demo-desc">
          ReactJS developers deliver fast, interactive, and scalable web experiences for modern businesses.
        </p>
        <Button onClick={() => navigate('/contact')} className="super-btn">
          Get Started with ReactJS
        </Button>
      </motion.div>
    </div>
  );
}
