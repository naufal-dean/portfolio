import React, { createRef, useEffect, useState } from "react";

import "./About.css";
import { skills } from "./skills.js";
import { Skillbar } from "../../component/Skillbar";
import ProfPic from "../../image/profpic/profile_picture.jpg";

const About = props => {
  const aboutDiv = createRef();
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      if (aboutDiv.current === null) return;
      if (aboutDiv.current.getBoundingClientRect().top <= 50) {
        setCollapsed(false);
      } else if (window.scrollY <= 50) {
        setCollapsed(true);
      }
    };
    // Scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="about" ref={aboutDiv}>
      <div className="about-title">
        <h2>ABOUT</h2>
      </div>
      <div className="about-content">
        <div className="about-content-left">
          <div className="profile-pic">
            <img src={ProfPic} alt="Potrait" />
          </div>
          <div className="profile-desc">
            <h2>Who am I?</h2>
            <p>
              My name is Naufal Dean Anugrah. I'm a second-year student in
              Informatics Engineering at Institut Teknologi Bandung.
              <br />
              <br />
              I'm participated in some clubs and organizations, such as HMIF
              (Himpunan Mahasiswa Informatika), URO (Unit Robotika), and ARC
              (Amateur Radio Club).
              <br />
              Furthermore, I'm active in learning and participating in CTF
              (Capture the Flag) competition.
              <br />
              <br />
              <span
                onClick={props.gotoContact}
                style={{ color: `#00838f`, cursor: `pointer` }}
              >
                Let's create something awesome!
              </span>
            </p>
          </div>
        </div>
        <div className="about-content-right">
          <Skillbar skills={skills} isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default About;
