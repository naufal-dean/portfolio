import React, { forwardRef } from "react";

import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="Contact" ref={ref}>
      <h2>Contact</h2>
    </div>
  );
});

export default Contact;
