import React, { forwardRef } from "react";

import "./Project.css";

const Project = forwardRef((props, ref) => {
  return (
    <div className="project" ref={ref}>
      <h2>Project</h2>
    </div>
  );
});

export default Project;
