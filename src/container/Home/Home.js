import React from "react";

import "./Home.css";

const Home = props => {
  return (
    <div className="home">
      <span>
        <h2>
          Hello World, I'm <span style={{ color: "#102027" }}>Dean</span>!
        </h2>
        <h3>I'm a student at Informatics Engineering ITB</h3>
        <h3>And I love creating something awesome</h3>
        <button onClick={props.gotoAbout}>About me</button>
      </span>
    </div>
  );
};

export default Home;
