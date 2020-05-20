import React, { createRef } from "react";
import scrollToComponent from "react-scroll-to-component";

import "./App.css";
import { Navbar } from "./component/Navbar";
import { About } from "./container/About";
import { Home } from "./container/Home";
import { Project } from "./container/Project";
import { Contact } from "./container/Contact";

const App = () => {
  const homeSection = createRef();
  const aboutSection = createRef();
  const projectSection = createRef();
  const contactSection = createRef();

  const scrollToRef = ref => {
    scrollToComponent(ref.current, {
      offset: -25,
      align: "middle",
      duration: 1000,
      ease: "inOutCube"
    });
  };

  return (
    <div className="app">
      <section id="home" ref={homeSection}>
        <Home gotoAbout={() => scrollToRef(aboutSection)} />
      </section>
      <section id="navbar">
        <Navbar
          gotoHome={() => scrollToRef(homeSection)}
          gotoAbout={() => scrollToRef(aboutSection)}
          gotoProject={() => scrollToRef(projectSection)}
          gotoContact={() => scrollToRef(contactSection)}
        />
      </section>
      <section id="about" ref={aboutSection}>
        <About />
      </section>
      <section id="project" ref={projectSection}>
        <Project />
      </section>
      <section id="contact" ref={contactSection}>
        <Contact />
      </section>
    </div>
  );
};

export default App;
