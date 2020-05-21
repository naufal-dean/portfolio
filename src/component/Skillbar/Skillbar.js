import React from "react";

import "./Skillbar.css";

const Skillbar = props => {
  return (
    <div className="skillbar">
      <ul className="skillbar-item-list">
        {props.skills.map((skill, index) => (
          <li key={skill.name}>
            <div
              className={`skillbar-item ${
                props.isCollapsed ? "collapsed" : ""
              }`}
              style={{
                width: `${skill.value}%`,
                backgroundColor: `hsl(190, 90%, ${100 / (index + 2.5)}%)`
              }}
            >
              <div className="skillbar-item-name">{skill.name}</div>
              <div className="skillbar-item-value">{skill.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skillbar;
