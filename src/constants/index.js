export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  
  export const myProjects = [
   
    {
      title: 'Personal Finance Tracker - Expenses Management System',
      desc: 'Personal Finance Tracker is a comprehensive expense management system that helps users track their spending, set budgets, and manage their finances effectively. It offers a range of features, including expense categorization, budget tracking, and financial goal setting, to help users achieve their financial goals.',
      subdesc:
        'Builts using Spring Boot, Angular.js, and MySQL, Personal Finance Tracker provides a user-friendly interface and robust functionality for managing personal finances. It is designed to be intuitive, secure, and scalable, making it an ideal solution for individuals looking to take control of their finances.',
      href: 'https://github.com/Aniket-Subudh1/Personal-Finance-Tracker',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Spring Boot',
          path: '/assets/spring.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Angular.js',
          path: '/assets/angular.svg',
        },
      ],
    },
    {
      title: 'UniVerse - A University Management System',
      desc: 'UniVerse is an all-in-one university management ERP that provides a centralized dashboard for academic and administrative operations. It enables users to manage student data, track attendance, handle course registration, and streamline communication between students, faculty, and administration.',
      subdesc:
        'Built with Advanced Java, Spring Boot, Hibernate, and MySQL,UniVerse delivers a seamless and efficient university management experience, designed to cater to the diverse needs of students, faculty, and administrators.',
      href: 'https://github.com/Aniket-Subudh1/UniVerse',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/java.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/spring.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/angular.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/hibernate.svg',
        },
      ],
    },
    {
      title: 'Pigeon - Messaging App',
      desc: 'Pigeon is a cutting-edge mobile messaging app that empowers users to communicate seamlessly. With features like smart messaging, a payments system, and a credits-based model, users can enjoy personalized chats, secure transactions, and premium content access.',
      subdesc:
        'Built with Kotlin, Firebase, Jetpack Compose, and Retrofit, Pigeon integrates modern Android development tools with a focus on user experience. It offers robust features, real-time communication, and seamless integrations, making it a versatile platform for personal use or scaling into a full-fledged business.',
      href: 'https://github.com/Aniket-Subudh1/Pigeon',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/kotlin.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/firebase.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/jetpack.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/retrofit.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Mern Stack Developer',
      pos: 'Intermediate Level',
      duration: '2022 - Present',
      title: "I'm a MERN stack developer with a passion for creating dynamic, responsive web applications. I specialize in building user-friendly interfaces and scalable backend systems, using technologies like React, Node.js, Express, and MongoDB.",
      icon: '/assets/mern.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'JavaStack Developer',
      pos: 'Intermediate Level',
      duration: '2022-present',
      title: "I'm a Java developer with experience in building enterprise-level applications. I specialize in backend development, using technologies like Spring Boot, Hibernate, and MySQL to create robust and scalable systems.",
      icon: '/assets/java.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Devops',
      pos: 'Beginner Level',
      duration: '2022 - present',
      title: "I'm a DevOps enthusiast with a keen interest in automation, CI/CD, and cloud computing. I'm proficient in tools like Docker, Jenkins, and AWS, and I'm always looking to expand my knowledge and skills in this area.",
      icon: '/assets/devops.svg',
      animation: 'salute',
    },
  ];