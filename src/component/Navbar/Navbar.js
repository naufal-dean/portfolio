import React from "react";
import Scrollspy from 'react-scrollspy'

import "./Navbar.css";

const Navbar = props => {
  return (
    <Scrollspy
      id={props.id}
      className="navbar"
      currentClassName="current"
      items={["home", "about", "project", "contact"]}
    >
      <li className="navbar-item" onClick={props.gotoHome}>HOME</li>
      <li className="navbar-item" onClick={props.gotoAbout}>ABOUT</li>
      <li className="navbar-item" onClick={props.gotoProject}>PROJECT</li>
      <li className="navbar-item" onClick={props.gotoContact}>CONTACT</li>
    </Scrollspy>
  );
};

export default Navbar;
