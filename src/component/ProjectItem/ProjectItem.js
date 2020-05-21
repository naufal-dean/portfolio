import React from "react";

import "./ProjectItem.css";

const ProjectItem = props => {
  return (
    <div className="project-item">
      <div className="project-item-img">
        <img
          src={require(`../../image/proj/${props.projectImage}`)}
          alt="Project"
          style={{ height: `100%`, width: `100%` }}
        />
      </div>
      <div className="project-item-content">
        <h3 className="project-item-title">ProjectTitle</h3>
        <p className="project-item-tools">React.js</p>
        <button className="project-item-btn">Learn More</button>
      </div>
    </div>
  );
};

export default ProjectItem;
