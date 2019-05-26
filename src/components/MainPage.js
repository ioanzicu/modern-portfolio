import React, { Component } from "react";
import Menu from "./Menu";

export default class MainPage extends Component {
  render() {
    return (
      <main id="home">
        <Menu />
        <h1 className="lg-heading">
          Ioan
          <span className="text-secondary">Zîcu</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Progrmmer, Designer & Entrepreneur
        </h2>
        <div className="icons">
          <a href="#!">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="#!">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="#!">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="#!">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}
