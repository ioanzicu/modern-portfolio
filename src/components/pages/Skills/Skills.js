import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Heading from "../../Heading/Heading";
import { SkillsCard } from "../../Card/Card";
import { skillsConfig, achievements } from "./config";
import "./Skills.css";

function fillZero(num) {
  if (num.length === 1) {
    return `0${num}`
  }
  return num
}


const Achievements = () => (
  <div className="achievements">
    <table>
      <thead className="table-head">
        < tr >
          <th>Nr</th>
          <th className="month">Month</th>
          <th className="day">Day</th>
          <th className="year">Year</th>
          <th>Title</th>
        </tr>
      </thead >
      <tbody>
        {achievements &&
          achievements.map(({ url, title, year, month, day }, index) => (
            <tr key={url}>
              <td className="cell number">{index + 1}.</td>
              <td className="cell month">{month}</td>
              <td className="cell day">{fillZero(day)}</td>
              <td className="cell year">{year}</td>
              <td className="cell title"><a className="achievement-item" href={url}>
                {title}
              </a>
              </td>
            </tr>
          ))}

      </tbody>
    </table >
  </div >
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
              skillsConfig.map(({ id, title, icons }, index) => (
                <SkillsCard
                  key={id}
                  title={title}
                  icons={icons}
                  cardNr={index + 1}
                />
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
