import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div>
          <main id="about">
            <h1 className="lg-heading">
              About
              <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">Let me tell you a few things...</h2>
            <div className="about-info">
              <img
                src="img/portrait.jpg"
                alt="John Doe"
                className="bio-image"
              />
              <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  magni, nemo corporis pariatur temporibus neque. Omnis ipsam
                  labore temporibus? Error optio ut cupiditate hic nulla
                  molestias repellendus laboriosam placeat necessitatibus!
                </p>
              </div>

              <div className="job job-1">
                <h3>123 WebShop</h3>
                <h6>Full Stack Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam exercitationem nobis eaque ducimus minus provident
                  inventore ad consequuntur quis minima.
                </p>
              </div>

              <div className="job job-2">
                <h3>Designers ABC</h3>
                <h6>Front End Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam exercitationem nobis eaque ducimus minus provident
                  inventore ad consequuntur quis minima.
                </p>
              </div>

              <div className="job job-3">
                <h3>Webworks</h3>
                <h6>Graphic Designer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam exercitationem nobis eaque ducimus minus provident
                  inventore ad consequuntur quis minima.
                </p>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
