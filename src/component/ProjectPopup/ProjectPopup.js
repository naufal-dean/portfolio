import React from "react";
import ImageGallery from "react-image-gallery";
import Rodal from "rodal";

import "./ProjectPopup.css";
import "rodal/lib/rodal.css";

const ProjectPopup = props => {
  const loadImage = image => {
    return { original: require(`../../image/proj/${image.original}`) };
  };

  const renderLeftNav = (onClick, disabled) => {
    return (
      <div
        className="image-gallery-nav nav-left"
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fas fa-angle-left"></i>
      </div>
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return (
      <div
        className="image-gallery-nav nav-right"
        disabled={disabled}
        onClick={onClick}
      >
        <i className="fas fa-angle-right"></i>
      </div>
    );
  };

  return (
    <Rodal
      visible={props.visible}
      onClose={props.onCloseHandler}
      animation="zoom"
      closeMaskOnClick
      closeOnEsc
      customStyles={{ padding: `0`, height: `90vh`, width: `100vh` }}
    >
      <div className="project-popup">
        <div className="popup-img">
          <ImageGallery
            items={props.images.map(loadImage)}
            lazyLoad={true}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            showBullets={true}
            showPlayButton={false}
            showThumbnails={false}
            useBrowserFullscreen={false}
          />
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
              onClick={() => (window.open(`${props.github}`).opener = null)}
            >
              <i className="fab fa-github"></i>&nbsp;View Code
            </button>
          )}
          {props.site && (
            <button
              className="ghost-btn"
              onClick={() => (window.open(`${props.site}`).opener = null)}
            >
              <i className="fas fa-globe"></i>&nbsp;View Site
            </button>
          )}
        </div>
      </div>
    </Rodal>
  );
};

export default ProjectPopup;
