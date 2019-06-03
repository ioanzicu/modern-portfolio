import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default class About extends Component {
  render() {
    return (
      <React.Fragment className="page">
        <Menu location={this.props.location.pathname} />
        <div>
          <main id="about">
            <h1 className="lg-heading">
              My
              <span className="text-secondary"> Skills</span>
            </h1>
            <div className="achievements">
              <div>
                <h1>Achievements</h1>
                <i className="text-secondary fas fa-medal fa-4x" />
              </div>
              <ul>
                <li>
                  <h2>
                    <a
                      className="achievement-item"
                      href="https://www.freecodecamp.org/certification/fccdeddf4b2-8af4-4000-95ab-864887c0afab/responsive-web-design"
                    >
                      Responsive Web Design{"   "}
                    </a>
                  </h2>
                </li>
                <li>
                  <h2>
                    <a
                      className="achievement-item"
                      href="https://www.freecodecamp.org/certification/fccdeddf4b2-8af4-4000-95ab-864887c0afab/javascript-algorithms-and-data-structures"
                    >
                      JavaScript Algorithms and Data Structures
                    </a>
                  </h2>
                </li>
              </ul>
            </div>

            <div className="about-info">
              <div className="job job-1">
                <h2 className="job-title">
                  <b>Coding Languages</b>
                  <hr />
                </h2>
                <div className="box-icon-wrapper">
                  <div className="box-icon">
                    <dfn data-info="JavaScript, ECMAScipt 6, OOP Javascript">
                      <i className="fab fa-js fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Python v3.6+">
                      <i className="fab fa-python fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Functional PHP, OOP PHP">
                      <i className="fab fa-php fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Node JS, Express JS">
                      <i className="fab fa-node fa-4x" />
                    </dfn>
                  </div>
                </div>
              </div>

              <div className="job job-2">
                <h2 className="job-title">
                  <b>Front End</b>
                  <hr />
                </h2>
                <div className="box-icon-wrapper">
                  <div className="box-icon">
                    <dfn data-info="HTML5">
                      <i className="fab fa-html5 fa-4x" />
                    </dfn>
                  </div>

                  <div className="box-icon">
                    <dfn data-info="CSS 3, Animations, Key-Frames Animations, Responsive Design">
                      <i className="fab fa-css3-alt fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="SASS CSS Preprocessor">
                      <i className="fab fa-sass fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Bootstrap 4">
                      <i className="fab fa-bootstrap fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="React JS, Redux, React Router">
                      <i className="fab fa-react fa-4x" />
                    </dfn>
                  </div>
                </div>
              </div>
              <div className="job job-3">
                <h2 className="job-title">
                  <b>Toolset</b>
                  <hr />
                </h2>
                <div className="box-icon-wrapper">
                  <div className="box-icon">
                    <dfn data-info="Git & GitHub">
                      <i className="fab fa-git fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="NPM Package Manger for NodeJS">
                      <i className="fab fa-npm fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="MySQL, PostgresSQL, MSSQL, MongoDB">
                      <i className="fas fa-database fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Linux OS">
                      <i className="fab fa-linux fa-4x" />
                    </dfn>
                  </div>
                  <div className="box-icon">
                    <dfn data-info="Windows 10 OS">
                      <i className="fab fa-windows fa-4x" />
                    </dfn>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
