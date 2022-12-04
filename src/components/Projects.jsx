import React, { useState } from "react";
import "./Projects.css";

import { SiBmcsoftware, SiCurl } from "react-icons/si";

import { projects } from "../constants";

export const ProjectIcon = ({ icon }) => {
  console.log(icon);
  switch (icon) {
    case "skirmisher":
      return <SiBmcsoftware />;
    case "fas fa-tree":
      return <SiBmcsoftware />;
    default:
      return <SiCurl />;
  }
};

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);

  return (
    <section id="projects" className="h-full w-full pb-20  ">
      <h1 className="mb-4 flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Recent Works
      </h1>
      <div className="options h-full md:h-auto max-w-7xl overflow-hidden w-full items-stretch  md:flex-row md:flex grid grid-flow-cols">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`option relative h-52 md:h-[400px]  ${
              active === project.id ? "active" : ""
            }`}
            onClick={() => setActive(project.id)}
            style={{ "--optionBackground": project.thumbnail }}
          >
            <div className="absolute right-3 bottom-4 z-10">
              <a href={project.link} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-500 hover:text-indigo-700"
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
                <div className="main">{project.title}</div>
                <div className="sub">{project.tagline}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
