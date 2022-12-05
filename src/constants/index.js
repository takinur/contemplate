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
    description: "Talent Screening Platform With AI Powered Resume Screening",
    icon: "skirmisher",
    thumbnail: `url("/images/skirmisher-thumb.png")`,
    stack: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "Tensorflow",
      "Tailwind",
    ],
    link: "/skirmisherai",
  },
  {
    id: 70,
    title: "Original Paintings",
    tagline: "Website for showcasing and selling Arts .",
    description:
      "Developed and deployed a website where customers can view and purchase arts from any corner of world. Integrated a custom art ordering system attached with woocommerce",
    icon: "art",
    thumbnail: `url("/images/art_site.gif")`,
    stack: ["PHP", "WordPress", "jQuery", "JavaScript", "Mysql", "Bootstrap"],
    link: "/original-art",
  },
  {
    id: 71,
    title: "Portfolio Site ",
    tagline: "My Personal Portfolio Website.",
    description:
      "Developed a modern, SEO friendly and responsive portfolio website to showcase my competences and projects.",
    icon: "portfolio",
    thumbnail: `url("/images/portfolio-header.png")`,
    stack: ["Astro", "React", "JavaScript", "TailwindCSS", "HTML", "CSS"],
    link: "/portfolio-site",
  },
  {
    id: 72,
    title: "Ski Beyond ",
    tagline: "Skiing App prototype for iPhone.",
    description:
      "Developed a high-fidelity prototype for a skiing app for iPhone.",
    icon: "ski",
    thumbnail: `url("/images/ski-beyond.png")`,
    stack: ["Figma", "HTML", "CSS"],
    link: "/ski-beyond",
  },
  {
    id: 73,
    title: "Express Courier",
    tagline: "SPA E-Courier Application with RestAPI.",
    description:
      "Developed a web application for a courier company to manage their orders and payments.",
    icon: "courier",
    thumbnail: `url("/images/express-courier.webp")`,
    stack: ["PHP", "Laravel", "Vue", "JavaScript", "Mysql", "TailwindCSS"],
    link: "/express-courier",
  },
  {
    id: 74,
    title: "Driverless",
    tagline: "Autonomous Vehicle Company Website.",
    description:
      "Developed a website for a startup company that is working on autonomous vehicles.",
    icon: "driverless",
    thumbnail: `url("/images/driverless-thumb.webp")`,
    stack: ["PHP", "JavaScript", "TailwindCSS", "HTML", "CSS"],
    link: "/driverless",
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
    link: "/zero-two",
  },
  {
    id: 76,
    title: "Buying Home In California",
    tagline: "Real Estate Website with Python and MLS API.",
    description:
      "Developed a real estate website where users can search for homes in California.",
    icon: "realstate",
    thumbnail: `url("/images/Real-Estate.gif")`,
    stack: ["Python", "Django", "React", "JavaScript", "Mysql", "Bootstrap"],
    link: "/buying-home-in-california",
  },
];
