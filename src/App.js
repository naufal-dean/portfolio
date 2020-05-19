import React, { createRef, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";

import "./App.css";
import { About } from "./container/About";
import { Home } from "./container/Home";
import { Project } from "./container/Project";
import { Contact } from "./container/Contact";

const App = () => {
  const scrollToRef = ref => {
    console.log(ref);
    scrollToComponent(ref.current, {
      offset: 0,
      align: "middle",
      duration: 1000,
      ease: "inOutCube"
    });
  };
  var aboutSection = createRef();
  var projectSection = createRef();
  var contactSection = createRef();

  return (
    <div className="App">
      <Home gotoAbout={() => scrollToRef(aboutSection)} />
      <About ref={aboutSection} />
      {/* <Project ref={projectSection} />
      <Contact ref={contactSection} /> */}
    </div>
  );
};

export default App;
