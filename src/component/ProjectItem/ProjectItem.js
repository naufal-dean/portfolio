import React, { useState } from "react";

import "./ProjectItem.css";
import { ProjectPopup } from "../../component/ProjectPopup";

const ProjectItem = props => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <>
      <div className="project-item">
        <div className="project-item-img">
          <img
            src={require(`../../image/proj/${props.thumbnail}`)}
            alt="Project"
            style={{ height: `100%`, width: `100%` }}
          />
        </div>
        <div className="project-item-content">
          <h3 className="project-item-title">{props.title}</h3>
          <p className="project-item-tools">{props.tools}</p>
          <button className="ghost-btn" onClick={() => setVisiblePopup(true)}>
            Learn More
          </button>
        </div>
      </div>
      <ProjectPopup
        visible={visiblePopup}
        onCloseHandler={() => setVisiblePopup(false)}
        images={props.images}
        title={props.title}
        text={props.text}
        github={props.github}
        site={props.site}
      />
    </>
  );
};

export default ProjectItem;
