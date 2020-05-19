import React, { forwardRef } from "react";

import "./Project.css";

const Project = forwardRef((props, ref) => {
  return (
    <div className="Project" ref={ref}>
      <h2>Project</h2>
    </div>
  );
});

export default Project;
