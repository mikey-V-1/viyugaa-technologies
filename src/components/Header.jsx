import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'
import InstallPrompt from './InstallPrompt'

export default function Header() {
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showHireDropdown, setShowHireDropdown] = useState(false);
  const handleTechClick = () => {
    setShowTechDropdown((prev) => !prev);
    setShowServicesDropdown(false);
    setShowHireDropdown(false);
  };
  const handleServicesClick = () => {
    setShowServicesDropdown((prev) => !prev);
    setShowTechDropdown(false);
    setShowHireDropdown(false);
  };
  const handleHireClick = () => {
    setShowHireDropdown((prev) => !prev);
    setShowTechDropdown(false);
    setShowServicesDropdown(false);
  };
  const handleCloseDropdown = () => {
    setShowTechDropdown(false);
    setShowServicesDropdown(false);
    setShowHireDropdown(false);
  };

  // Optional: close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.nav-dropdown')) {
        setShowTechDropdown(false);
        setShowServicesDropdown(false);
        setShowHireDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ensure dropdown closes before navigation
  function handleDropdownNav(e) {
    handleCloseDropdown();
  }

  return (
    <header className="header" data-aos="fade-down">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Viyugaa Technologies logo" className="brand-logo" />
            <div className="brand-text">
              <div className="brand-name">Viyugaa Technologies</div>
              <div className="brand-tag">Crafting digital experiences that scale</div>
            </div>
          </Link>
        </div>
        <div className="header-right">
          <nav className="nav">
            <div className="nav-btn nav-dropdown" tabIndex={0} onClick={handleServicesClick}>
              Services
              <div className={`dropdown-content${showServicesDropdown ? ' show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="dropdown-category">Mobile App Development</div>
                <NavLink to="/services/mobile-app-development" className="dropdown-item" onClick={handleDropdownNav}>Build custom mobile apps and solutions using the latest technologies powered by a vetted team of engineers</NavLink>
                <div className="dropdown-category">Custom Software Development</div>
                <NavLink to="/services/custom-software-development" className="dropdown-item" onClick={handleDropdownNav}>Explore how custom software keeps your business thriving and get one for you cost effectively</NavLink>
                <div className="dropdown-category">Web Development</div>
                <NavLink to="/services/web-development" className="dropdown-item" onClick={handleDropdownNav}>Leave no space for ordinary websites; create exceptional web applications for your business</NavLink>
                <div className="dropdown-category">Software Product Development</div>
                <NavLink to="/services/software-product-development" className="dropdown-item" onClick={handleDropdownNav}>Grab the best software products for your varied business needs and explore how we deliver it</NavLink>
                <div className="dropdown-category">ERP Software Development</div>
                <NavLink to="/services/erp-software-development" className="dropdown-item" onClick={handleDropdownNav}>Serve your common and specific purposes with the easiest ERP solutions built by engineers you like</NavLink>
                <div className="dropdown-category">UI UX Design</div>
                <NavLink to="/services/uiux-design" className="dropdown-item" onClick={handleDropdownNav}>We design app and website that not just matches trends but also helps your visitors navigate easily</NavLink>
                <div className="dropdown-category">Software Maintenance and Support Services</div>
                <NavLink to="/services/software-maintenance-support" className="dropdown-item" onClick={handleDropdownNav}>Ensuring optimal software performance through reliable maintenance and comprehensive support services.</NavLink>
              </div>
            </div>
            <div className="nav-btn nav-dropdown" onClick={handleTechClick} tabIndex={0}>
              Technologies
              <div className={`dropdown-content${showTechDropdown ? ' show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="dropdown-category">Front End Technologies</div>
                <NavLink to="/technologies/reactjs" className="dropdown-item" onClick={handleDropdownNav}>ReactJS</NavLink>
                <NavLink to="/technologies/angularjs" className="dropdown-item" onClick={handleDropdownNav}>AngularJS</NavLink>
                <NavLink to="/technologies/knockoutjs" className="dropdown-item" onClick={handleDropdownNav}>Knockout.js</NavLink>
                <NavLink to="/technologies/vuejs" className="dropdown-item" onClick={handleDropdownNav}>Vue.js</NavLink>
                <NavLink to="/technologies/nextjs" className="dropdown-item" onClick={handleDropdownNav}>Next.js</NavLink>
                <div className="dropdown-category">Backend Technologies</div>
                <NavLink to="/technologies/aspnet" className="dropdown-item" onClick={handleDropdownNav}>Asp.Net</NavLink>
                <NavLink to="/technologies/aspnetcore" className="dropdown-item" onClick={handleDropdownNav}>Asp.Net Core</NavLink>
                <NavLink to="/technologies/vbnet" className="dropdown-item" onClick={handleDropdownNav}>VB.Net</NavLink>
                <NavLink to="/technologies/csharp" className="dropdown-item" onClick={handleDropdownNav}>C#</NavLink>
                <NavLink to="/technologies/php" className="dropdown-item" onClick={handleDropdownNav}>PHP</NavLink>
                <NavLink to="/technologies/nodejs" className="dropdown-item" onClick={handleDropdownNav}>Node.JS</NavLink>
                <div className="dropdown-category">Mobile</div>
                <NavLink to="/technologies/android" className="dropdown-item" onClick={handleDropdownNav}>Android</NavLink>
                <NavLink to="/technologies/flutter" className="dropdown-item" onClick={handleDropdownNav}>Flutter</NavLink>
                <NavLink to="/technologies/ios" className="dropdown-item" onClick={handleDropdownNav}>iOS</NavLink>
                <NavLink to="/technologies/react-native" className="dropdown-item" onClick={handleDropdownNav}>React Native</NavLink>
                <div className="dropdown-category">Other</div>
                <NavLink to="/technologies/mssqlserver" className="dropdown-item" onClick={handleDropdownNav}>Microsoft SQL Server</NavLink>
                <NavLink to="/technologies/mongodb" className="dropdown-item" onClick={handleDropdownNav}>MongoDB</NavLink>
                <NavLink to="/technologies/ondemandappsolutions" className="dropdown-item" onClick={handleDropdownNav}>On Demand App Solutions</NavLink>
              </div>
            </div>
            <div className="nav-btn nav-dropdown" tabIndex={0} onClick={handleHireClick}>
              Hire Developer
              <div className={`dropdown-content${showHireDropdown ? ' show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="dropdown-category">Mobile App Developers</div>
                <NavLink to="/hire/mobile-app-developers" className="dropdown-item" onClick={handleDropdownNav}>Mobile App Developers</NavLink>
                <NavLink to="/hire/flutter-developers" className="dropdown-item" onClick={handleDropdownNav}>Flutter Developers</NavLink>
                <NavLink to="/hire/react-native-developers" className="dropdown-item" onClick={handleDropdownNav}>React Native Developers</NavLink>
                <NavLink to="/hire/ios-developers" className="dropdown-item" onClick={handleDropdownNav}>iOS Developers</NavLink>
                <NavLink to="/hire/android-developers" className="dropdown-item" onClick={handleDropdownNav}>Android Developers</NavLink>
                <div className="dropdown-category">Web Developers</div>
                <NavLink to="/hire/web-developers" className="dropdown-item" onClick={handleDropdownNav}>Web Developers</NavLink>
                <NavLink to="/hire/reactjs-developers" className="dropdown-item" onClick={handleDropdownNav}>React JS Developers</NavLink>
                <NavLink to="/hire/nodejs-developers" className="dropdown-item" onClick={handleDropdownNav}>Node.js Developers</NavLink>
                <NavLink to="/hire/angularjs-developers" className="dropdown-item" onClick={handleDropdownNav}>Angular JS Developers</NavLink>
                <NavLink to="/hire/php-developers" className="dropdown-item" onClick={handleDropdownNav}>PHP Developers</NavLink>
              </div>
            </div>
            <NavLink to="/career" className="nav-btn">Career</NavLink>
            <NavLink to="/contact" className="nav-btn">Contact Us</NavLink>
          </nav>
          <div style={{ marginLeft: 12 }}>
            <InstallPrompt />
          </div>
        </div>
      </div>
    </header>
  )
}
