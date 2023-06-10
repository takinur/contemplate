import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../constants";
import { motion } from "framer-motion";

import {
  SiBmcsoftware,
  SiCurl,
  SiDynamics365,
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiVite,
  SiFirebase,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiApachekafka,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiVuedotjs,
  SiJquery,
  SiLaravel,
  SiFastapi,
  SiTensorflow,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiKalilinux,
  SiFigma,
  SiStrapi,
  SiTestinglibrary,
  SiMicrosoftazure,
  SiAzurefunctions,
  SiPostgresql,
  SiOracle,
  SiMongodb,
  SiArchlinux,
  SiWordpress,
  SiEmlakjet,
  SiGitter,
  SiHomeassistantcommunitystore,
} from "react-icons/si/index.js";

export const ProjectIcon = ({ icon }) => {
  switch (icon) {
    case "skirmisher":
      return <SiBmcsoftware />;
    case "art":
      return <SiDynamics365 />;
    case "serverless":
      return <SiAzurefunctions />;
    case "realestate":
      return <SiEmlakjet />;
    case "wembley":
      return <SiGitter />;
    case "ecommerce":
      return <SiHomeassistantcommunitystore />;
    default:
      return <SiCurl />;
  }
};

export const StackIcon = ({ icon }) => {
  const createIcon =
    {
      python: <SiPython />,
      javascript: <SiJavascript />,
      typescript: <SiTypescript />,
      php: <SiPhp />,
      html: <SiHtml5 />,
      css: <SiCss3 />,
      sql: <SiApachekafka />,
      django: <SiDjango />,
      node: <SiNodedotjs />,
      next: <SiNextdotjs />,
      express: <SiExpress />,
      vue: <SiVuedotjs />,
      jquery: <SiJquery />,
      laravel: <SiLaravel />,
      fastapi: <SiFastapi />,
      sqlite: <SiSqlite />,
      bootstrap: <SiBootstrap />,
      react: <SiReact />,
      tensorflow: <SiTensorflow />,
      tailwindcss: <SiTailwindcss />,
      git: <SiGithub />,
      mysql: <SiMysql />,
      vite: <SiVite />,
      firebase: <SiFirebase />,
      docker: <SiDocker />,
      aws: <SiAmazonaws />,
      linux: <SiKalilinux />,
      figma: <SiFigma />,
      restapi: <SiStrapi />,
      testing: <SiTestinglibrary />,
      azure: <SiMicrosoftazure />,
      serverless: <SiAzurefunctions />,
      postgresql: <SiPostgresql />,
      oracle: <SiOracle />,
      mongodb: <SiMongodb />,
      astro: <SiArchlinux />,
      wordpress: <SiWordpress />,
      nextjs: <SiNextdotjs />,
    }[icon.toLowerCase()] || null;

  return (
    <div className="text-dimWhite  relative text-[20px] hover:text-teal-200 tooltip">
      {createIcon}
      <span className="tooltiptext  z-20 ">{icon}</span>
    </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);

  return (
    <motion.section
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      id="projects"
      className="h-full w-full pb-20  "
    >
      <h1 className="mb-4 flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Recent Works
      </h1>
      <div className="options h-full md:h-auto -md:flex-row-md:flex overflow-hidden w-full items-center justify-center grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`option relative h-52 md:h-[400px]  ${
              active === project.id ? "active" : ""
            }`}
            onClick={() => setActive(project.id)}
            style={{ "--optionBackground": project.thumbnail }}
          >
            <div className="absolute right-2 bottom-3 z-10">
              <a href={project.link} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-500 hover:text-indigo-700 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            <div className="shadow"></div>
            <div className="label">
              <div className="icon z-20">
                <ProjectIcon icon={project.icon} />
              </div>
              <div className="info">
                <div className="main">{project.title} </div>
                <div className="my-1 text-gray-300 group-hover:text-gray-300">
                  <div className="flex flex-row gap-4">
                    {project.stack.map((tech, index) => (
                      <StackIcon key={index} icon={tech} />
                    ))}
                  </div>
                </div>
                <div className="sub mb-5">{project.tagline}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
