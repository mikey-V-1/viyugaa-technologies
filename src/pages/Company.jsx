import React from 'react';
import '../styles/company.css';

export default function Company() {
  return (
    <main className="company-page" data-aos="fade-up">
      <section className="company-hero">
        <h1>About Viyugaa Technologies</h1>
        <p className="company-lead">
          <strong>Founded:</strong> 2018<br />
          <strong>Location:</strong> Chennai, India<br />
          <strong>Mission:</strong> Empower clients with innovative digital solutions that drive business growth.<br />
          <strong>Vision:</strong> To be the trusted partner for businesses seeking success through technology, design, and management.<br />
        </p>
      </section>
      <section className="company-values" data-aos="fade-up">
        <h2>Our Values</h2>
        <ul>
          <li><span role="img" aria-label="quality">🏆</span> Quality-first engineering</li>
          <li><span role="img" aria-label="communication">💬</span> Clear communication</li>
          <li><span role="img" aria-label="innovation">🚀</span> Innovation & continuous improvement</li>
          <li><span role="img" aria-label="client">🤝</span> Client-centric approach</li>
          <li><span role="img" aria-label="team">👥</span> Collaborative teamwork</li>
        </ul>
      </section>
      <section className="company-services" data-aos="fade-up">
        <h2>What We Do</h2>
        <div className="service-grid">
          <div className="service-card" data-aos="zoom-in">
            <img src="/icon-web.png" alt="Web Development" className="service-icon" />
            <h3>Website Development</h3>
            <p>We create modern, responsive websites for businesses and startups, focusing on performance and user experience.</p>
          </div>
          <div className="service-card" data-aos="zoom-in">
            <img src="/icon-app.png" alt="App Development" className="service-icon" />
            <h3>App Development</h3>
            <p>Our team builds custom mobile apps for iOS and Android, using the latest technologies and frameworks.</p>
          </div>
          <div className="service-card" data-aos="zoom-in">
            <img src="/icon-management.png" alt="Management" className="service-icon" />
            <h3>Project Management</h3>
            <p>We offer end-to-end project management, ensuring timely delivery and quality for every client project.</p>
          </div>
        </div>
      </section>
      <section className="company-animation" data-aos="fade-up">
        <h2>Experience Our Work</h2>
        <div className="company-3d">
          {/* Example 3D animation or interactive element */}
          <iframe src="https://my.spline.design/website3d-1234567890" title="3D Website Animation" width="100%" height="320" style={{border: 'none', borderRadius: '12px'}}></iframe>
        </div>
      </section>
      <section className="company-more-info" data-aos="fade-up">
        <h2>More About Us</h2>
        <p>
          Viyugaa Technologies works with clients worldwide to deliver digital solutions that make a difference. Our expertise spans web and app development, UI/UX design, and project management. We believe in building long-term partnerships and helping our clients succeed in the digital age.
        </p>
      </section>
    </main>
  );
}
