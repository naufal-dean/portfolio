import React from "react";

import "./Project.css";
import { projects } from "./projects.js";
import { ProjectItem } from "../../component/ProjectItem";

const Project = props => {
  return (
    <div className="project">
      <div className="project-title">
        <h2>PROJECT</h2>
      </div>
      <div className="project-content">
        <div className="project-container">
          {projects.map((project, index) => (
            <ProjectItem
              key={`project-${index}`}
              title={project.title}
              tools={project.tools}
              text={project.text}
              thumbnail={project.thumbnail}
              images={project.images}
              github={project.github}
              site={project.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
