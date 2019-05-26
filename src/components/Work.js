import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="work">
          <Menu />
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className="projects">
            <div className="item">
              <a href="#">
                <img src="img/projects/project1.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/projects/project2.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/projects/project3.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/projects/project4.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github" /> Github
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img src="img/projects/project5.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                {" "}
                <i className="fas fa-eye" /> Project{" "}
              </a>
              <a href="#" className="btn-dark">
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
