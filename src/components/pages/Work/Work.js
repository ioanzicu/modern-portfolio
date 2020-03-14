import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Heading from "../../Heading/Heading";
import projects from "./config";
import "./Work.css";

const Project = ({ img, title, description, github, previewLink, codePen }) => (
  <div className="project">
    <img src={img} alt={title} />
    <div className="details">
      <h3>{title}</h3>
      <p>{description}</p>
      {previewLink && (
        <a href={previewLink}>
          <i className="fas fa-eye" /> Project
        </a>
      )}
      {github && (
        <a href={github}>
          <i className="fab fa-github" /> Github
        </a>
      )}
      {codePen && (
        <a href={codePen}>
          <i className="fab fa-codepen" /> Codepen
        </a>
      )}
    </div>
  </div>
);

const Work = ({ location }) => (
  <>
    <Menu location={location.pathname} className="page" />
    <main id="work">
      <Heading
        title="My"
        secondaryTitle="Work"
        subtitle="Check out some of my projects..."
      />

      <div className="projects">
        {projects.map(
          ({ img, title, description, github, previewLink, codePen }) => (
            <Project
              key={title}
              img={img}
              title={title}
              description={description}
              github={github}
              previewLink={previewLink}
              codePen={codePen}
            />
          )
        )}
      </div>
    </main>
    <Footer />
  </>
);

export default Work;
