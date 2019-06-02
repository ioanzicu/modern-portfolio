import React, { Component } from "react";
import Menu from "./Menu";

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            Ioan
            <span className="text-secondary"> Zîcu</span>
          </h1>

          <p className="subtitle">
            geek + smart + curious + nerd + ingenious + cunning ={" "}
            <span className="text-secondary"> ME </span>
          </p>

          <h2 className="sm-heading">
            Full Stack Developer, Programmer, Designer & Entrepreneur
          </h2>
          <div className="icons">
            <a href="https://codepen.io/ioanzicu/">
              <i class="fab fa-codepen fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/ioan-z%C3%AEcu-29109b161/">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://www.github.com/ioanzicu">
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
