import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../constants/style";
import { motion } from "framer-motion";
import {
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
} from "react-icons/si/index.js";

export const SkillIcon = ({ icon, name }) => {
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
    }[icon] || null;

  return (
    <div className="flex flex-col">
      <span className="text-white text-[30px] hover:text-teal-200">
        {createIcon}
      </span>
      <p className="font-poppins text-dimWhite text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {props.items.map((item, index) => (
          <SkillIcon key={index} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        - {text}{" "}
        {link ? (
          <a href={link} target="_blank">
            {/* <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg> */}
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2]"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200  ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <h3 className="text-lg font-semibold text-white">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-300 ">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content key={index} index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills & Experience
      </h1>
      <div className={layout.section}>
        {/* Skills */}
        <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
