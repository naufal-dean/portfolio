import React from "react";
import Rodal from "rodal";

import "./ProjectPopup.css";
import "rodal/lib/rodal.css";

const ProjectPopup = props => {
  return (
    <Rodal
      visible={props.visible}
      onClose={props.onCloseHandler}
      animation="zoom"
      closeMaskOnClick
      customStyles={{ padding: `0`, height: `90vh`, width: `100vh` }}
    >
      <div className="project-popup">
        <div className="popup-img">
          <img src={require(`../../image/proj/${props.image}`)} alt="Project" />
        </div>
        <div className="popup-title">
          <h3>{props.title}</h3>
        </div>
        <div className="popup-text">
          <p>{props.text}</p>
        </div>
        <div className="popup-action">
          {props.github && (
            <button
              className="ghost-btn"
              onClick={() => window.open(`${props.github}`)}
            >
              <i className="fab fa-github"></i>&nbsp;View Code
            </button>
          )}
        </div>
      </div>
    </Rodal>
  );
};

export default ProjectPopup;
