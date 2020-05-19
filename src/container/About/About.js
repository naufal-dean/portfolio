import React, { forwardRef } from "react";

import "./About.css";

const About = forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      <h2>About</h2>
    </div>
  );
});

export default About;
