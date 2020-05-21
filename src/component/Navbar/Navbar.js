import React from "react";
import Scrollspy from "react-scrollspy";

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
        <li className="navbar-item unselectable" onClick={props.gotoHome}>
          Home
        </li>
        <li className="navbar-item unselectable" onClick={props.gotoAbout}>
          About
        </li>
        <li className="navbar-item unselectable" onClick={props.gotoProject}>
          Project
        </li>
        <li className="navbar-item unselectable" onClick={props.gotoContact}>
          Contact
        </li>
      </Scrollspy>
    </div>
  );
};

export default Navbar;
