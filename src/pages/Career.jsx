
import React from "react";
import "../styles/career-modern.css";
import LazyLottie from '../components/LazyLottie';
import careerAnimation from "../assets/softwareproduct.json";
import frontendIcon from "../assets/robot.png";
import backendIcon from "../assets/robot.png";
import mobileIcon from "../assets/robot.png";
import qaIcon from "../assets/robot.png";
import teamImg1 from "../assets/robot.png";
import teamImg2 from "../assets/robot.png";


export default function Career() {
  return (
    <div className="career-modern-page">
      <section className="career-modern-hero">
        <div className="career-modern-animation">
          <LazyLottie animationData={careerAnimation} loop={true} />
        </div>
        <h1 className="career-modern-title">Grow With Us</h1>
        <p className="career-modern-desc">
          At Viyugaa Technologies, we build more than products—we build careers, relationships, and futures. Join a vibrant team of creative thinkers, passionate engineers, and dedicated professionals. Discover opportunities to grow, lead, and make a real impact in a culture that celebrates diversity and innovation.
        </p>
      </section>

      <div className="career-modern-cards">
        <div className="career-modern-card">
          <img src={frontendIcon} alt="Frontend Developer" />
          <div className="career-modern-card-title">Frontend Developer</div>
          <div className="career-modern-card-desc">ReactJS, UI/UX, 2+ years experience. Create seamless, interactive user experiences with a passion for modern web technologies.</div>
        </div>
        <div className="career-modern-card">
          <img src={backendIcon} alt="Backend Developer" />
          <div className="career-modern-card-title">Backend Developer</div>
          <div className="career-modern-card-desc">Node.js, MongoDB, 2+ years experience. Architect scalable APIs and optimize performance on challenging projects.</div>
        </div>
        <div className="career-modern-card">
          <img src={mobileIcon} alt="Mobile App Developer" />
          <div className="career-modern-card-title">Mobile App Developer</div>
          <div className="career-modern-card-desc">Android/iOS/Flutter, 1+ years experience. Build innovative mobile solutions from concept to deployment.</div>
        </div>
        <div className="career-modern-card">
          <img src={qaIcon} alt="QA Engineer" />
          <div className="career-modern-card-title">QA Engineer</div>
          <div className="career-modern-card-desc">Manual & Automation, 1+ years experience. Design robust test plans and automate processes to ensure quality.</div>
        </div>
      </div>

      <section className="career-modern-apply">
        <h2>How to Apply</h2>
        <p>
          Interested in joining us? Send your resume and portfolio to <a href="mailto:viyugaatechnologies@gmail.com">viyugaatechnologies@gmail.com</a>.<br />
          Tell us about your journey, achievements, and what excites you about technology. We review every application carefully and reach out to candidates who share our vision and values.
        </p>
      </section>

      <div className="career-modern-culture">
        <div className="career-modern-culture-desc">
          <div>
            <h2>Our Culture</h2>
            We’re more than just a workplace—we’re a community. Find mentorship, support, and a culture that values growth and well-being. Enjoy team events, open communication, and professional development in a flexible, inspiring environment.
          </div>
        </div>
      </div>
    </div>
  );
}
