import React, { createRef, useEffect, useState } from "react";

import "./About.css";
import { Skillbar } from "../../component/Skillbar";
import ProfPic from "../../image/profile_picture.jpg";

const About = props => {
  // Skill section logic
  const skills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 80 },
    { name: "C#", value: 80 },
    { name: "Java", value: 75 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 80 },
    { name: "React.js", value: 75 },
    { name: "Node.js", value: 70 },
    { name: "CorelDraw", value: 70 },
    { name: "Git", value: 90 }
  ];
  const aboutDiv = createRef();
  const [isCollapsed, setCollapsed] = useState(false);

  const handleScroll = () => {
    if (aboutDiv.current === null) return;
    if (aboutDiv.current.getBoundingClientRect().top <= 50) {
      setCollapsed(false);
    } else if (window.scrollY === 0) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

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
