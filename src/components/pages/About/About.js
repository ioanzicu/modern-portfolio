import React from "react";
// import Tilt from "react-tilt";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { ExperienceCard } from "../../Card/Card";
import Heading from "../../Heading/Heading";
import { expConfig } from "./config";
import "./About.css";

import portrait from "../../../img/portrait.jpg";

const About = ({ location }) => (
  <>
    <Menu location={location.pathname} className="page" />
    <div>
      <main id="about">
        <Heading title="About" />
        <div className="about-info">
          <img src={portrait} alt="Ioan Zîcu" className="bio-image" />
          <div className="bio">
            <h2 className="text-secondary">
              Let me tell you a few things...
              <hr />
            </h2>
            <div>
              I am:
              <ul>
                <li>
                  engineer with bachelor in Computer Science speciality "Mobile and Cloud
                  Computing"
                </li>
                <li>
                  passionate about web technologies, programming
                  languages and cloud computing
                </li>
                <li>
                  curious in
                  learning new practical skills for increasing problem-solving
                  ability.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="exp-container">
          {expConfig && expConfig.map(({ id, icon, title, from, to, company, addres, tasks }, index) => (
            <ExperienceCard
              key={id}
              className="Tilt-inner"
              // icon={icon}
              title={title}
              from={from}
              to={to}
              company={company}
              addres={addres}
              tasks={tasks}
              index={index + 1}
            />
          ))}
        </div>
      </main>
    </div >
    <Footer />
  </>
);

export default About;
