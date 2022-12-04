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
    description: "Talent Screening Platform With AI Powered Resume Screening",
    icon: "skirmisher",
    thumbnail: `url("/images/art_site.gif")`,
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
    id: 2,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    thumbnail: `url("https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/oretemauw",
  },
  {
    id: 3,
    title: "Iteresuselle",
    description: "Omuke trughte a otufta",
    icon: "fas fa-tree",
    image:
      "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/iteresuselle",
  },
  {
    id: 4,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    image:
      "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/oretemauw",
  },
  {
    id: 5,
    title: "Iteresuselle",
    description: "Omuke trughte a otufta",
    icon: "fas fa-tree",
    image:
      "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/iteresuselle",
  },
  {
    id: 6,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    thumbnail: `url("https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/oretemauw",
  },
  {
    id: 7,
    title: "Iteresuselle",
    description: "Omuke trughte a otufta",
    icon: "fas fa-tree",
    thumbnail: `url("https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/iteresuselle",
  },
  {
    id: 8,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    thumbnail: `url("https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/oretemauw",
  },
  {
    id: 9,
    title: "Iteresuselle",
    description: "Omuke trughte a otufta",
    icon: "fas fa-tree",
    thumbnail: `url("https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/iteresuselle",
  },
  {
    id: 10,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    thumbnail: `url("https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg")`,
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/oretemauw",
  },
];
