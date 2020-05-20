import React from "react";
import Scrollspy from 'react-scrollspy'

import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar">
      <Scrollspy
        className="navbar-item-list"
        currentClassName="current"
        items={["home", "about", "project", "contact"]}
        offset={-30}
      >
        <li className="navbar-item" onClick={props.gotoHome}>HOME</li>
        <li className="navbar-item" onClick={props.gotoAbout}>ABOUT</li>
        <li className="navbar-item" onClick={props.gotoProject}>PROJECT</li>
        <li className="navbar-item" onClick={props.gotoContact}>CONTACT</li>
      </Scrollspy>
    </div>
  );
};

export default Navbar;
