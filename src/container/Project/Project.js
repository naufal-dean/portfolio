import React from "react";

import "./Project.css";
import { ProjectItem } from "../../component/ProjectItem";

const Project = props => {
  // const projectImages = ["a.jpg", "b.jpg", "c.jpg"];
  const projectImages = ["1.jpg", "2.jpg", "3.jpg"];

  return (
    <div className="project">
      <div className="project-title">
        <h2>PROJECT</h2>
      </div>
      <div className="project-content">
        <div className="project-container">
          {projectImages.map(projectImage => (
            <ProjectItem key={projectImage} projectImage={projectImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
