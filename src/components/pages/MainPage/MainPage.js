import React from "react";
import Menu from "../Menu/Menu";
import Heading from "../../Heading/Heading";
import "./MainPage.css";

const Typewriter = () => (
  <div className="typewriter ">
    <p className="subtitle" id='normal-typewriter'>
      geek + smart + curious + creative + ingenious ={" "}
      <span className="text-secondary">
        <b>
          ME
          <span className="smile-section">
            <i className="top-smile fas fa-smile-wink fa-2x" />
            <i className="bottom-smile fas fa-smile fa-2x" />
          </span>
        </b>
      </span>
    </p>

    <p className="subtitle" id="hidden-typewriter">
      geek + smart + curious + creative ={" "}
      <span className="text-secondary">
        <b>
          ME
          <span className="smile-section">
            <i className="top-smile fas fa-smile-wink fa-2x" />
            <i className="bottom-smile fas fa-smile fa-2x" />
          </span>
        </b>
      </span>
    </p>
  </div>
);


// returns years, months
const workExperience = () => {
  // work + internships
  const hireDate = new Date('2020-09-01T00:00:00.000Z') // 2021-02-15T00:00:00.000Z - Nokia hire
  const currDate = new Date() 
  const diffTime = Math.abs(currDate - hireDate)
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24))
  return {years: Math.trunc(diffDays / 365)}
}

const MainPage = ({ location }) => (
  <>
    <Menu location={location.pathname} className="page" />
    <main id="home">
      <Heading title="Zîcu" secondaryTitle="Ioan" />

      <Typewriter />

      <h2 className="sm-heading mt-1">Full Stack Software Engineer</h2>

      <ul>

        <li>
          Highly motivated and skilled software engineer with Bachelor in Computer Science and {workExperience().years} years of commercial experience.
        </li>

        <li>
          Working with <b>Golang</b>, <b>Python</b>, <b>JavaScript / TypeScript</b>, Azure, Terraform, Docker, Kubernetes, and more.
        </li>

        <li>
          Strong understanding of Agile and Scrum methodologies, and experienced in test automation, software release, and troubleshooting.
        </li>

        <li>
          Certified Tester ISTQB® Test Automation Engineer
        </li>

        <li>
          Certified Azure Developer Associate - AZ 204
        </li>

        <li>
          Certified Azure DevOps Engineer - AZ 400
        </li>

        <li>
          Keen to learn and develop my skills, as a proof you can check my Skills page.
        </li>

      </ul>

      <div className="icons mt-2">
        <a
          href="https://codepen.io/ioanzicu/"
          title="See my projects on Codepen">
          <i className="fab fa-codepen fa-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/ioan-z%C3%AEcu-29109b161/"
          title="Keep in touch on Linkedin">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          href="https://www.github.com/ioanzicu"
          title="Check my projects on GitHub">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  </>
);

export default MainPage;
