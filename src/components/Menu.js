import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  state = {
    showMenu: false
  };

  toggleMenu() {
    if (!this.state.showMenu) {
      this.setState({
        showMenu: true
      });
    } else {
      this.setState({
        showMenu: false
      });
    }
  }

  render() {
    return (
      <header>
        <div
          onClick={this.toggleMenu.bind(this)}
          className={this.state.showMenu ? "menu-btn close" : "menu-btn"}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={this.state.showMenu ? "menu show" : "menu"}>
          <div
            className={
              this.state.showMenu ? "menu-branding show" : "menu-branding"
            }
          >
            <div className="portrait" />
          </div>

          <ul className={this.state.showMenu ? "menu-nav show" : "menu-nav"}>
            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link
                to="/"
                className={
                  this.props.location === "/" ? "nav-link current" : "nav-link"
                }
              >
                <i className="fas fa-home" /> <span>Home</span>
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link
                to="/skills"
                className={
                  this.props.location === "/skills"
                    ? "nav-link current"
                    : "nav-link"
                }
              >
                <i className="fas fa-laptop-code" /> Skills
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link
                to="/about"
                className={
                  this.props.location === "/about"
                    ? "nav-link current"
                    : "nav-link"
                }
              >
                <i className="fas fa-user" /> About Me
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link
                to="/work"
                className={
                  this.props.location === "/work"
                    ? "nav-link current"
                    : "nav-link"
                }
              >
                <i className="fas fa-project-diagram" /> My Work
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link
                to="/contact"
                className={
                  this.props.location === "/contact"
                    ? "nav-link current"
                    : "nav-link"
                }
              >
                <i className="fas fa-phone" /> Contact Me
              </Link>
            </li>
            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <a
                href="https://codepen.io/ioanzicu/full/yRGdWp"
                className="nav-link"
              >
                <i className="fas fa-gamepad" /> Play RGB Game
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
