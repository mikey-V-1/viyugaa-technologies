import React from 'react';
import '../styles/ourwork.css';

export default function OurWork() {
  return (
    <main className="ourwork-page">
      <h1>Our Work</h1>
      <p>We deliver a wide range of projects for clients across industries. Here are some examples of our recent work:</p>
      <section className="project-list">
        <div className="project-card">
          <h2>Mobile App for Food Delivery</h2>
          <p>Developed a cross-platform mobile app for a food delivery startup, featuring real-time order tracking, payment integration, and user-friendly UI.</p>
        </div>
        <div className="project-card">
          <h2>Custom ERP Solution</h2>
          <p>Built a scalable ERP system for a manufacturing company, including modules for inventory, HR, finance, and analytics.</p>
        </div>
        <div className="project-card">
          <h2>eCommerce Website</h2>
          <p>Created a modern eCommerce platform with product catalog, shopping cart, secure checkout, and admin dashboard for analytics.</p>
        </div>
        <div className="project-card">
          <h2>Educational Portal</h2>
          <p>Designed and developed an online learning portal for a university, supporting course management, student profiles, and interactive content.</p>
        </div>
      </section>
      <section className="work-examples">
        <h2>What We Do</h2>
        <ul>
          <li>Mobile app development for startups and enterprises</li>
          <li>Custom software and ERP solutions</li>
          <li>Web development for eCommerce, education, and more</li>
          <li>UI/UX design for engaging digital experiences</li>
          <li>Ongoing support and maintenance for all projects</li>
        </ul>
      </section>
    </main>
  );
}
