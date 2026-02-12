const baseUrl = import.meta.env.VITE_BASE_URL || 'https://viyugaa-technologies.com';
const siteName = 'Viyugaa Technologies';
const siteImage = `${baseUrl}/og-image.jpg`;

const seoData = {
  home: {
    title: 'Viyugaa Technologies - Custom Software & Web Development',
    description: 'Innovative digital solutions for startups, SMEs, and enterprises. Custom software, web, mobile app development, and UI/UX design. Transform your ideas into impactful products.',
    keywords: 'software development, web development, mobile app development, custom software, product development, digital solutions, startups',
    image: siteImage,
    url: baseUrl,
    type: 'website',
    author: 'Viyugaa Technologies',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'Innovative digital solutions and custom software development',
      sameAs: [
        'https://facebook.com/viyugaa',
        'https://twitter.com/viyugaa',
        'https://linkedin.com/company/viyugaa-technologies'
      ]
    }
  },

  contact: {
    title: 'Contact — Viyugaa Technologies',
    description: 'Get in touch with Viyugaa Technologies for custom software, web, and mobile development. Request a free consultation and project estimate from our experts.',
    keywords: 'contact, consultation, project quote, hire developers, software development services',
    image: siteImage,
    url: `${baseUrl}/contact`,
    type: 'website',
    author: 'Viyugaa Technologies',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteName,
      url: baseUrl,
      description: 'Contact us for custom software development'
    }
  },

  services: {
    title: 'Services — Viyugaa Technologies',
    description: 'Explore our comprehensive software development services: custom software, web development, mobile apps, ERP solutions, software maintenance, and UI/UX design.',
    keywords: 'software development services, web development, mobile apps, ERP, software maintenance, UI/UX design',
    image: siteImage,
    url: `${baseUrl}/services`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  ourWork: {
    title: 'Our Work — Viyugaa Technologies',
    description: 'View our portfolio of successful software development projects across various industries. See how we transform ideas into innovative digital solutions.',
    keywords: 'portfolio, case studies, projects, software development portfolio, web design portfolio',
    image: siteImage,
    url: `${baseUrl}/ourwork`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  company: {
    title: 'About Us — Viyugaa Technologies',
    description: 'Learn about Viyugaa Technologies: our mission to empower businesses with innovative digital solutions, our team of expert developers, and our commitment to excellence.',
    keywords: 'about us, company, team, mission, vision, software company, development team',
    image: siteImage,
    url: `${baseUrl}/company`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  career: {
    title: 'Careers — Viyugaa Technologies',
    description: 'Join our talented team at Viyugaa Technologies. Explore job opportunities in software development, web development, mobile development, and more.',
    keywords: 'careers, jobs, hiring, software developer jobs, web developer jobs, mobile developer jobs',
    image: siteImage,
    url: `${baseUrl}/career`,
    type: 'website',
    author: 'Viyugaa Technologies',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      hiringOrganization: {
        '@type': 'Organization',
        name: siteName
      },
      applicationUrl: `${baseUrl}/career`
    }
  },

  // Services pages
  webDevelopment: {
    title: 'Web Development — Viyugaa Technologies',
    description: 'Professional web development services. Build modern, responsive, and scalable web applications with our expert developers. React, ASP.NET, Node.js, and more.',
    keywords: 'web development, web applications, responsive design, full-stack development, React, ASP.NET',
    image: siteImage,
    url: `${baseUrl}/services/web-development`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  mobileAppDevelopment: {
    title: 'Mobile App Development — Viyugaa Technologies',
    description: 'Custom mobile app development for iOS, Android, React Native, and Flutter. Build enterprise-level mobile solutions with our experienced team.',
    keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, app development',
    image: siteImage,
    url: `${baseUrl}/services/mobile-app-development`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  customSoftwareDevelopment: {
    title: 'Custom Software Development — Viyugaa Technologies',
    description: 'Tailored software solutions to automate workflows, integrate systems, and solve unique business challenges. Enterprise software development expertise.',
    keywords: 'custom software, software development, business software, enterprise software, software solutions',
    image: siteImage,
    url: `${baseUrl}/services/custom-software-development`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  erpSoftwareDevelopment: {
    title: 'ERP Software Development — Viyugaa Technologies',
    description: 'Enterprise Resource Planning (ERP) software development for streamlined business operations. Manage finance, inventory, HR, and more with custom ERP solutions.',
    keywords: 'ERP development, enterprise resource planning, business software, inventory management, finance management',
    image: siteImage,
    url: `${baseUrl}/services/erp-software-development`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  softwareProductDevelopment: {
    title: 'Software Product Development — Viyugaa Technologies',
    description: 'From concept to launch, we develop innovative software products. Scale your startup idea into a market-ready application with our expertise.',
    keywords: 'product development, software product, startup development, SaaS development, MVP development',
    image: siteImage,
    url: `${baseUrl}/services/software-product-development`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  softwareMaintenanceSupport: {
    title: 'Software Maintenance & Support — Viyugaa Technologies',
    description: 'Ongoing software maintenance, support, and enhancement services. Keep your applications running smoothly with our experienced support team.',
    keywords: 'software maintenance, software support, bug fixes, updates, software upgrades, IT support',
    image: siteImage,
    url: `${baseUrl}/services/software-maintenance-support`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  uiuxDesign: {
    title: 'UI/UX Design — Viyugaa Technologies',
    description: 'User-centered design services creating intuitive and engaging interfaces. UI/UX design for web and mobile applications that convert and delight users.',
    keywords: 'UI design, UX design, user experience, interface design, design services, web design',
    image: siteImage,
    url: `${baseUrl}/services/ui-ux-design`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  // Hire pages
  reactJSDevelopers: {
    title: 'Hire React JS Developers — Viyugaa Technologies',
    description: 'Hire experienced React JS developers for your web applications. Expert frontend developers specializing in React, Next.js, and modern JavaScript.',
    keywords: 'hire React developers, React JS developers, frontend developers, React specialists, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/react-js-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  nodeJSDevelopers: {
    title: 'Hire Node.js Developers — Viyugaa Technologies',
    description: 'Hire skilled Node.js developers for backend development. Expert in building scalable server-side applications and APIs.',
    keywords: 'hire Node.js developers, Node developers, backend developers, Node.js specialist, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/node-js-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  webDevelopers: {
    title: 'Hire Web Developers — Viyugaa Technologies',
    description: 'Hire full-stack web developers for your projects. Experts in HTML, CSS, JavaScript, and modern web frameworks.',
    keywords: 'hire web developers, web developers, full-stack developers, freelance developers, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/web-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  mobileAppDevelopers: {
    title: 'Hire Mobile App Developers — Viyugaa Technologies',
    description: 'Hire expert mobile app developers for iOS, Android, React Native, and Flutter. Build powerful mobile applications with our team.',
    keywords: 'hire mobile developers, mobile app developers, iOS developers, Android developers, app development',
    image: siteImage,
    url: `${baseUrl}/hire/mobile-app-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  androidDevelopers: {
    title: 'Hire Android Developers — Viyugaa Technologies',
    description: 'Hire skilled Android developers for native app development. Build robust Android applications with our experienced team.',
    keywords: 'hire Android developers, Android development, native Android, mobile development, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/android-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  iOSDevelopers: {
    title: 'Hire iOS Developers — Viyugaa Technologies',
    description: 'Hire experienced iOS developers for native iPhone and iPad app development. Expert in Swift and Objective-C.',
    keywords: 'hire iOS developers, iOS development, iPhone app development, Swift developers, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/ios-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  reactNativeDevelopers: {
    title: 'Hire React Native Developers — Viyugaa Technologies',
    description: 'Hire React Native developers for cross-platform mobile applications. Build for iOS and Android with a single codebase.',
    keywords: 'hire React Native developers, React Native, cross-platform development, mobile development, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/react-native-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  flutterDevelopers: {
    title: 'Hire Flutter Developers — Viyugaa Technologies',
    description: 'Hire expert Flutter developers for beautiful cross-platform mobile applications. High-performance apps for iOS and Android.',
    keywords: 'hire Flutter developers, Flutter development, cross-platform apps, mobile development, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/flutter-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  phpDevelopers: {
    title: 'Hire PHP Developers — Viyugaa Technologies',
    description: 'Hire experienced PHP developers for web applications. Expert in Laravel, WordPress, custom PHP development, and more.',
    keywords: 'hire PHP developers, PHP development, Laravel developers, WordPress development, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/php-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },

  angularJSDevelopers: {
    title: 'Hire AngularJS Developers — Viyugaa Technologies',
    description: 'Hire skilled AngularJS developers for dynamic web applications. Expert in Angular framework and modern frontend development.',
    keywords: 'hire Angular developers, AngularJS, Angular framework, frontend developers, hire developers',
    image: siteImage,
    url: `${baseUrl}/hire/angular-js-developers`,
    type: 'website',
    author: 'Viyugaa Technologies'
  },
};

export default seoData;
