import React from "react";

import "./Project.css";
import { ProjectItem } from "../../component/ProjectItem";

const Project = props => {
  const projects = [
    {
      title: "Portfolio",
      text:
        "This is my portfolio website. It contains the information about me and some project that I was involved in.",
      tools: "React.js",
      thumbnail: "portfolio-thumbnail.png",
      images: [{ original: "portfolio-1.png" }, { original: "portfolio-2.png" }],
      github: "https://github.com/naufal-dean/portfolio",
      site: "https://naufal-dean.github.io/portfolio"
    },
    {
      title: "Tokemanager Website",
      text:
        "Tokemanager Website is a web to track market activity. It supports transaction, currency, and stock management system.",
      tools: "Laravel",
      thumbnail: "tokemanager-website-thumbnail.png",
      images: [{ original: "tokemanager-website.png" }],
      github: "https://github.com/naufal-dean/Tokemanager-Website"
    },
    {
      title: "Portfolio",
      text:
        "This is my portfolio website. It contains the information about me and some project that I was involved in.",
      tools: "React.js",
      thumbnail: "portfolio-thumbnail.png",
      images: [{ original: "portfolio-1.png" }, { original: "portfolio-2.png" }],
      github: "https://github.com/naufal-dean/portfolio",
      site: "https://naufal-dean.github.io/portfolio"
    },
    {
      title: "Tokemanager Website",
      text:
        "Tokemanager Website is a web to track market activity. It supports transaction, currency, and stock management system.",
      tools: "Laravel",
      thumbnail: "tokemanager-website-thumbnail.png",
      images: [{ original: "tokemanager-website.png" }],
      github: "https://github.com/naufal-dean/Tokemanager-Website"
    },
    {
      title: "Portfolio",
      text:
        "This is my portfolio website. It contains the information about me and some project that I was involved in.",
      tools: "React.js",
      thumbnail: "portfolio-thumbnail.png",
      images: [{ original: "portfolio-1.png" }, { original: "portfolio-2.png" }],
      github: "https://github.com/naufal-dean/portfolio",
      site: "https://naufal-dean.github.io/portfolio"
    },
    {
      title: "Tokemanager Website",
      text:
        "Tokemanager Website is a web to track market activity. It supports transaction, currency, and stock management system.",
      tools: "Laravel",
      thumbnail: "tokemanager-website-thumbnail.png",
      images: [{ original: "tokemanager-website.png" }],
      github: "https://github.com/naufal-dean/Tokemanager-Website"
    },
    {
      title: "Portfolio",
      text:
        "This is my portfolio website. It contains the information about me and some project that I was involved in.",
      tools: "React.js",
      thumbnail: "portfolio-thumbnail.png",
      images: [{ original: "portfolio-1.png" }, { original: "portfolio-2.png" }],
      github: "https://github.com/naufal-dean/portfolio",
      site: "https://naufal-dean.github.io/portfolio"
    }
  ];

  return (
    <div className="project">
      <div className="project-title">
        <h2>PROJECT</h2>
      </div>
      <div className="project-content">
        <div className="project-container">
          {projects.map((project, index) => (
            <ProjectItem
              key={`project-${index}`}
              title={project.title}
              tools={project.tools}
              text={project.text}
              thumbnail={project.thumbnail}
              images={project.images}
              github={project.github}
              site={project.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
