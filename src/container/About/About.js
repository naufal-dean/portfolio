import React, { forwardRef } from "react";

import "./About.css";

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div style={{height: "50"}}></div>
      <h2>About</h2>
    </div>
  );
});

export default About;
