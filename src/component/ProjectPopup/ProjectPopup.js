import React from "react";
import Popup from "reactjs-popup";

import "./ProjectPopup.css";

const ProjectPopup = props => {
  return (
    <Popup
      open={props.open}
      onClose={props.onCloseHandler}
      modal
      closeOnDocumentClick
      contentStyle={{ padding: `0`, height: `90vh`, width: `100vh` }}
    >
      {close => (
        <div className="project-popup">
          <div className="popup-img">
            <img
              src={require(`../../image/proj/${props.image}`)}
              alt="Project"
            />
          </div>
          <div className="popup-title">
            <h3>{props.title}</h3>
          </div>
          <div className="popup-text">
            <p>{props.text}</p>
          </div>
          <div className="popup-action">
            <button className="ghost-btn">
              <i class="fab fa-github"></i>&nbsp;View Code
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ProjectPopup;
