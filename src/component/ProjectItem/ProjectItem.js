import React, { useState } from "react";
import Popup from "reactjs-popup";

import "./ProjectItem.css";
import { ProjectPopup } from "../../component/ProjectPopup";

const ProjectItem = props => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="project-item">
        <div className="project-item-img">
          <img
            src={require(`../../image/proj/${props.image}`)}
            alt="Project"
            style={{ height: `100%`, width: `100%` }}
          />
        </div>
        <div className="project-item-content">
          <h3 className="project-item-title">{props.title}</h3>
          <p className="project-item-tools">{props.tools}</p>
          <button className="ghost-btn" onClick={() => setOpenPopup(true)}>
            Learn More
          </button>
        </div>
      </div>
      <ProjectPopup
        open={openPopup}
        onCloseHandler={() => setOpenPopup(false)}
        title="ProjectTitle"
        text="Hello world"
        image={props.image}
        title={props.title}
        text={props.text}
      />
    </>
  );
};

export default ProjectItem;
