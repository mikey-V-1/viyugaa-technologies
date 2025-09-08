import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaMobileAlt, FaDatabase, FaCloud, FaRocket, FaCode } from 'react-icons/fa';
import '../../styles/technologies/tech-list.css';

const technologies = [
  {
    name: 'ReactJS',
    icon: <FaReact style={{color:'#61dafb',fontSize:'2.2rem'}} />,
    description: 'ReactJS is a powerful JavaScript library for building dynamic, interactive user interfaces and single-page applications. Its component-based architecture and virtual DOM enable fast, scalable, and maintainable web solutions for businesses of all sizes.'
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs style={{color:'#3c873a',fontSize:'2.2rem'}} />,
    description: 'Node.js is an event-driven JavaScript runtime for building fast, scalable backend services and APIs. Its non-blocking architecture and rich ecosystem allow for robust, real-time applications and microservices.'
  },
  {
    name: 'AngularJS',
    icon: <FaAngular style={{color:'#dd0031',fontSize:'2.2rem'}} />,
    description: 'AngularJS is a comprehensive framework for building enterprise-grade web applications. It offers powerful data binding, dependency injection, and modular architecture for robust, maintainable, and scalable solutions.'
  },
  {
    name: 'Flutter',
    icon: <FaMobileAlt style={{color:'#02569b',fontSize:'2.2rem'}} />,
    description: 'Flutter is Google’s open-source UI toolkit for building natively compiled mobile, web, and desktop apps from a single codebase. It enables fast, visually stunning, and consistent experiences across platforms.'
  },
  {
    name: 'PHP',
    icon: <FaCode style={{color:'#777bb4',fontSize:'2.2rem'}} />,
    description: 'PHP is a widely-used scripting language for web development and server-side applications. It powers secure, scalable, and high-performance web solutions, including custom applications, CMS, and eCommerce platforms.'
  },
  {
    name: 'MongoDB',
    icon: <FaDatabase style={{color:'#47a248',fontSize:'2.2rem'}} />,
    description: 'MongoDB is a leading NoSQL database designed for flexibility, scalability, and high performance. It enables real-time analytics and seamless integration with cloud services for modern web and mobile applications.'
  },
  {
    name: 'Cloud & DevOps',
    icon: <FaCloud style={{color:'#2196f3',fontSize:'2.2rem'}} />,
    description: 'We leverage cloud platforms and DevOps practices to deliver secure, scalable, and efficient infrastructure for your applications, ensuring reliability and rapid deployment.'
  }
];

export default function TechnologiesList() {
  return (
    <div className="tech-list-page" style={{maxWidth:'900px',margin:'0 auto',padding:'2.5rem 1rem'}}>
      <h1 style={{fontSize:'2.2rem',fontWeight:'bold',color:'#1e3c72',marginBottom:'2rem',textAlign:'center'}}><FaRocket style={{marginRight:'12px',color:'#f4a261'}}/>Our Technologies</h1>
      <p style={{fontSize:'1.15rem',color:'#333',lineHeight:'1.8',marginBottom:'2.5rem',textAlign:'center'}}>
        At Viyugaa Technologies, we use a modern technology stack to deliver robust, scalable, and future-proof solutions. Explore the platforms and tools that power our web, mobile, and enterprise applications.
      </p>
      <div className="tech-list-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'2rem'}}>
        {technologies.map((tech) => (
          <div className="tech-list-card" key={tech.name} style={{background:'#fff',borderRadius:'18px',boxShadow:'0 2px 12px rgba(30,60,114,0.08)',padding:'2rem',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{marginBottom:'1rem'}}>{tech.icon}</div>
            <h2 style={{fontSize:'1.3rem',fontWeight:'bold',color:'#2a5298',marginBottom:'0.7rem'}}>{tech.name}</h2>
            <p style={{fontSize:'1.08rem',color:'#444',lineHeight:'1.7'}}>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
