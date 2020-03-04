import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Heading from "../../Heading/Heading";
import { SkillsCard } from "../../Card/Card";
import { skillsConfig, achievements } from "./config";
import "./Skills.css";

const Achievements = () => (
  <div className="achievements">
    {achievements.map(({ url, title }, index) => (
      <div>
        {index + 1}.{" "}
        <a className="achievement-item" href={url}>
          {title}
        </a>
      </div>
    ))}
  </div>
);

const Skills = ({ location }) => {
  return (
    <>
      <Menu location={location.pathname} className="page" />
      <div>
        <main id="about">
          <Heading
            title="My"
            secondaryTitle="Skills"
            subtitle="Achievements"
            subtitleIcon="text-secondary fas fa-medal fa-1x"
          />
          <Achievements />
          <div className="about-info">
            {skillsConfig &&
              skillsConfig.map(({ title, icons }, index) => (
                <SkillsCard title={title} icons={icons} cardNr={index + 1} />
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
