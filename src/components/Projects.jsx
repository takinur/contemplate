import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
    icon: "fas fa-walking",
    image:
      "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
    stack: ["React", "Node", "Express", "MongoDB"],
    link: "/blonkisonz",
  },
  {
    id: 2,
    title: "Oretemauw",
    description: "Omuke trughte a otufta",
    icon: "fas fa-snowflake",
    image:
      "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
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
];

const Projects = () => {
  const [active, setActive] = React.useState(projects[0].id);

  return (
    <div className="h-screen">
      <div className="options">
        {projects.map((project) => (
          <div
            key={project.id}
            className={active === project.id ? "option active" : "option"}
            onClick={() => setActive(project.id)}
            style={{
              "--optionBackground":
                "url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg)",
            }}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking"></i>
              </div>
              <div className="info">
                <div className="main">Blonkisoaz</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
