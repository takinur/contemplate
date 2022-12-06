import BiovaasLogo from "../assets/biovaas-logo.png";
import Logo from "../assets/logo.png";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: "python",
        name: "Python",
      },
      {
        id: "pl-2",
        icon: "javascript",
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: "typescript",
        name: "TypeScript",
      },
      {
        id: "pl-4",
        icon: "php",
        name: "PHP",
      },

      {
        id: "pl-5",
        icon: "html",
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: "css",
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: "sql",
        name: "SQL",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: "django",
        name: "Django",
      },
      {
        id: "f-2",
        icon: "react",
        name: "React",
      },
      {
        id: "f-3",
        icon: "node",
        name: "Node",
      },
      {
        id: "f-4",
        icon: "next",
        name: "Next",
      },
      {
        id: "f-5",
        icon: "express",
        name: "Express",
      },
      {
        id: "f-6",
        icon: "tailwindcss",
        name: "TailwindCSS",
      },
      {
        id: "f-7",
        icon: "vue",
        name: "Vue",
      },
      {
        id: "f-8",
        icon: "bootstrap",
        name: "Bootstrap",
      },
      {
        id: "f-9",
        icon: "jquery",
        name: "jQuery",
      },
      {
        id: "f-10",
        icon: "laravel",
        name: "Laravel",
      },
      {
        id: "f-11",
        icon: "fastapi",
        name: "FastAPI",
      },
      {
        id: "f-13",
        icon: "tensorflow",
        name: "TensorFlow",
      },
    ],
  },
  {
    title: "Technologies",
    items: [
      {
        id: "t-1",
        icon: "git",
        name: "GIT",
      },
      {
        id: "t-2",
        icon: "docker",
        name: "Docker",
      },
      {
        id: "t-3",
        icon: "aws",
        name: "AWS",
      },
      {
        id: "t-4",
        icon: "linux",
        name: "Linux",
      },
      {
        id: "t-5",
        icon: "figma",
        name: "Figma",
      },
      {
        id: "t-6",
        icon: "restapi",
        name: "REST API",
      },
      {
        id: "t-7",
        icon: "testing",
        name: "Automatic Testing",
      },
      {
        id: "t-8",
        icon: "azure",
        name: "Azure",
      },
      {
        id: "t-9",
        icon: "serverless",
        name: "Serverless",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "d-1",
        icon: "postgresql",
        name: "PostgreSql",
      },
      {
        id: "d-2",
        icon: "mysql",
        name: "MySQL",
      },
      {
        id: "d-3",
        icon: "oracle",
        name: "Oracle",
      },
      {
        id: "d-4",
        icon: "mongodb",
        name: "MongoDB",
      },
      {
        id: "d-5",
        icon: "sqlite",
        name: "SQLite",
      },
      {
        id: "d-6",
        icon: "firebase",
        name: "Firebase",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Freelance Software Engineer ",
    logo: Logo,
    link: "#",
    positions: [
      {
        title: "Full-Stack Web Developer",
        duration: "From 2021 - Present",
        content: [
          {
            text: "Modified the existing codebase of a web application to add new features and improve the user experience.",
            link: "",
          },
          {
            text: "Developed a REST API to handle the requests from the web application.",
            link: "",
          },
          {
            text: "Worked on various well-known CMS as per client requirements including WordPress, Shopify, Opencart et cetra. ",
            link: "",
          },
          {
            text: "Implemented mobile-first design for the web application.",
            link: "",
          },
          {
            text: "Worked closely with the client to understand the requirements and deliver the project on time.",
            link: "",
          },
          {
            text: "Designed and created UI components that are reusable and scalable.",
            link: "",
          },
        ],
      },
      {
        title: "Cloud Engineer ",
        duration: "",
        content: [
          {
            text: "Developed a serverless application using AWS Lambda and AWS API Gateway to handle the requests from the web application.",
            link: "",
          },
          {
            text: "Configured servers and databases with modern infrastructure for hosting web applications using Nginx and Apache.",
            link: "",
          },
          {
            text: "Deployed diverse web application to several cloud platforms such as AWS, Azure, and Digital Ocean.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Biovaas Tech Aid",
    logo: BiovaasLogo,
    link: "https://www.biovaas.com/",
    positions: [
      {
        title: "Web Developer",
        duration: "Jan 2020 - June 2021",
        content: [
          {
            text: "Developed an E-commerce website for selling technological products.",
            link: "",
          },
          {
            text: "Optimized the website for better SEO and performance.",
            link: "",
          },
          {
            text: "Built and maintained the website using PHP, HTML, CSS, and JavaScript.",
            link: "",
          },
          {
            text: "Added new features as per business requirements as well as maintenance and bug fixes were conducted.",
            link: "",
          },
          {
            text: "Worked with the team by filling reports, attending meetings, and giving presentations.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: 69,
    title: "SkirmisherAI",
    tagline: "AI Powered Talent Screening Application.",
    description:
      "SkirmisherAI is a progressive web application that uses AI to screen candidates for a job. The application is built using thecutting edge technologies and has extensive features like liveinterview, report generation & export, automatic sourcing and many more.",
    icon: "skirmisher",
    thumbnail: `url("/images/sk_thumb.png")`,
    stack: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "Tensorflow",
      "TailwindCSS",
      "PostgreSQL",
    ],
    link: "project/skirmisherai",
    image: "/images/skirmihser-landing.png",
    nextProjectUrl: "/project/original-art",
    nextProjectTitle: "Original Paintings",
    year: "2022",
  },
  {
    id: 70,
    title: "Original Paintings",
    tagline: "Website for showcasing and selling Arts .",
    description:
      "Developed and deployed a website where customers can view and purchase arts from diverse collection. Integrated a custom artordering system attached with Stripe and Paypal Payment Methods.",
    icon: "art",
    thumbnail: `url("/images/art_site.gif")`,
    stack: ["PHP", "WordPress", "jQuery", "JavaScript", "Mysql", "Bootstrap"],
    link: "project/original-art",
    image: "/images/art-painting.webp",
    nextProjectUrl: "/project/portfolio-site",
    nextProjectTitle: "Portfolio Site",
    year: "2021",
  },
  {
    id: 71,
    title: "Portfolio Site ",
    tagline: "My Personal Portfolio Website.",
    description:
      "Developed a fully responsive portfolio website that is fast and SEO friendly. The website is built with Astro, React, Tailwind,CSS, HTML, JavaScript, TypeScript. The website also focuses onuser experience and accessibility.",
    icon: "portfolio",
    thumbnail: `url("/images/portfolio-header.png")`,
    stack: [
      "Astro",
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "HTML",
      "CSS",
    ],
    link: "project/portfolio-site",
    image: "/images/portfolio-thumb.png",
    nextProjectUrl: "/project/ski-beyond",
    nextProjectTitle: "Ski Beyond",
    year: "2022",
  },
  {
    id: 72,
    title: "Ski Beyond ",
    tagline: "Skiing App prototype for iPhone.",
    description:
      "Created a high fidelity prototype for a Skiing App. The app is designed to help the user to find the best skiing spots in the world. Besides, the app enabled users to tack their activity and share it with their friends",
    icon: "ski",
    thumbnail: `url("/images/ski-beyond.png")`,
    stack: ["Figma", "HTML", "CSS"],
    link: "project/ski-beyond",
    image: "/images/ski-figma.png",
    nextProjectUrl: "/project/express-courier",
    nextProjectTitle: "Express Courier",
    year: "2022",
  },
  {
    id: 73,
    title: "Express Courier",
    tagline: "SPA E-Courier Application with RestAPI.",
    description:
      "Developed a courier application as per clients requirements. The application also includes tracking or orders and parcels. The app was later deployed at digital ocean hosting service with technologies like Nginx, PHP, MySQL, and Laravel.",
    icon: "courier",
    thumbnail: `url("/images/express-courier.webp")`,
    stack: ["PHP", "Laravel", "Vue", "JavaScript", "Mysql", "TailwindCSS"],
    link: "project/express-courier",
    image: "/images/courier-home.webp",
    nextProjectUrl: "/project/driverless",
    nextProjectTitle: "Driverless Ca",
    year: "2020",
  },
  {
    id: 74,
    title: "Driverless car Website",
    tagline: "Autonomous Vehicle Company Website.",
    description:
      "An autonomous vehicle company has approached to me to develop a dynamic website where they can showcase their technology and sell products. Therefore, I have developed a website with all the required functionality for the proposed company.",
    icon: "driverless",
    thumbnail: `url("/images/driverless-thumb.webp")`,
    stack: ["PHP", "JavaScript", "Python", "MySQL", "Bootstrap", "HTML", "CSS"],
    link: "project/driverless",
    image: "/images/driverless-thumb.webp",
    nextProjectUrl: "/project/zero-two",
    nextProjectTitle: "Zero Two",
    year: "2020",
  },
  {
    id: 75,
    title: "Zero Two",
    tagline: "Freelance Platform with Laravel and JavaScript.",
    description:
      "Developed a freelance platform where freelancers can post their services and clients can hire them.",
    icon: "zero-two",
    thumbnail: `url("/images/zero-two.gif")`,
    stack: ["PHP", "Laravel", "Vue", "JavaScript", "Mysql", "TailwindCSS"],
    link: "project/zero-two",
    image: "/images/zero-two-home.png",
    nextProjectUrl: "/project/buying-home-in-california",
    nextProjectTitle: "Buying Home in California",
    year: "2021",
  },
  {
    id: 76,
    title: "Buying Home In California",
    tagline: "Real Estate Website with Python and MLS API.",
    description:
      "Developed a real estate website where users can search for homes in California. The website is integrated with MLS API to fetch the latest data from the database.",
    icon: "realestate",
    thumbnail: `url("/images/Real-Estate.gif")`,
    stack: ["Python", "Django", "React", "JavaScript", "Mysql", "Bootstrap"],
    link: "project/buying-home-in-california",
    image: "/images/real-estate-home.webp",
    nextProjectUrl: "/project/wembley-stadium",
    nextProjectTitle: "Wembley Stadium",
    year: "2021",
  },
  {
    id: 77,
    title: "Wembley Stadium",
    tagline: "Football Stadium & Music Venue Website .",
    description:
      "Utilizing SharePoint CMS, developed a website with all the required funcionality for a football stadium and music venue. These was done cloning existing website and adding new features.",
    icon: "wembley",
    thumbnail: `url("/images/wembley-thumb-min.png")`,
    stack: ["SharePoint", "React", "JavaScript", "HTML", "CSS"],
    link: "project/wembley-stadium",
    image: "/images/wembley-thumb-min.png",
    nextProjectUrl: "/project/e-commerce",
    nextProjectTitle: "E-Commerce",
    year: "2022",
  },
  {
    id: 78,
    title: "E-Commerce",
    tagline: "E-Commerce Website Django Framework.",
    description:
      "Developed an E-commerce website for selling sustainable products to consumers. The system also has features to manage inventory, orders, and customers.",
    icon: "ecommerce",
    thumbnail: `url("/images/e-commerce-landing.png")`,
    stack: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "PostgreSQL",
      "TailwindCSS",
    ],
    link: "project/e-commerce",
    image: "/images/e-commerce-landing.png",
    nextProjectUrl: "/project/derestify",
    nextProjectTitle: "Derestify",
    year: "2021",
  },
  {
    id: 79,
    title: "Derestify",
    tagline: "Serverless Web Application with RestAPI .",
    description:
      "Developed a serverless web application for a startup company that is working on a new technology. Even though the backend was developed by me and 4 senior devs , the frontend was developed by a different team of developers.",
    icon: "serverless",
    thumbnail: `url("/images/serverless.png")`,
    stack: ["Azure", "React", "JavaScript", "HTML", "CSS"],
    link: "project/derestify",
    image: "/images/serverless.png",
    nextProjectUrl: "/project/skirmisherai",
    nextProjectTitle: "Skirmisher AI",
    year: "2022",
  },
];
