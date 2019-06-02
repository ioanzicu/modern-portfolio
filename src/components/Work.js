import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

import img1 from "../img/projects/project1.jpg";
import img2 from "../img/projects/project2.jpg";
import img3 from "../img/projects/project3.jpg";
import img4 from "../img/projects/project4.jpg";
import img5 from "../img/projects/project5.jpg";

export default class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>

          <div className="projects">
            <div>
              <div class="dtl28">
                <img src={img1} alt="" />
                <div class="dtl">
                  <h3>Chatt App</h3>
                  <p>
                    Integer sollicitudin lacus libero, in iaculis turpis
                    tristique sit amet. Nullam augue elit, feugiat nec arcu
                    eget, sodales feugiat ligula.
                  </p>
                  <a href="#">Read More</a>
                  <a href="https://github.com/ioanzicu?tab=repositories" />
                  <a
                    href="https://github.com/ioanzicu?tab=repositories"
                    className="btn-light"
                  >
                    {" "}
                    <i className="fas fa-eye" /> Project{" "}
                  </a>
                  <a
                    href="https://github.com/ioanzicu?tab=repositories"
                    className="btn-dark"
                  >
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <a href="https://github.com/ioanzicu?tab=repositories">
                {/* <img src={img1} alt="Project" /> */}
              </a>
              {/* <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-light"
              >
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github
              </a> */}
            </div>

            <div className="item">
              <a href="https://github.com/ioanzicu?tab=repositories">
                <img src={img2} alt="Project" />
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-light"
              >
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/ioanzicu?tab=repositories">
                <img src={img3} alt="Project" />
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-light"
              >
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/ioanzicu?tab=repositories">
                <img src={img4} alt="Project" />
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-light"
              >
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/ioanzicu?tab=repositories">
                <img src={img5} alt="Project" />
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-light"
              >
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a
                href="https://github.com/ioanzicu?tab=repositories"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
