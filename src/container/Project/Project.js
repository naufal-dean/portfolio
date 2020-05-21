import React from "react";

import "./Project.css";
import { ProjectItem } from "../../component/ProjectItem";

const Project = props => {
  const projects = [
    {
      title: "Project 1",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "1.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 2",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "2.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 3",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "3.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 4",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "3.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 5",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "2.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 6",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "1.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 7",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "1.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 8.js",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "2.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 9.js",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "3.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 10",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "2.jpg",
      github: "https://github.com/naufal-dean"
    },
    {
      title: "Project 11",
      text: "This is a project",
      tools: "React.js Hehe.js",
      image: "1.jpg",
    }
  ];

  return (
    <div className="project">
      <div className="project-title">
        <h2>PROJECT</h2>
      </div>
      <div className="project-content">
        <div className="project-container">
          {projects.map(project => (
            <ProjectItem
              key={project.title}
              title={project.title}
              tools={project.tools}
              text={project.text}
              image={project.image}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
