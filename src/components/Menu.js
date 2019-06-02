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
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link to="/skills" className="nav-link">
                <i className="fas fa-laptop-code" /> Skills
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link to="/about" className="nav-link">
                <i className="fas fa-user" /> About Me
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link to="/work" className="nav-link">
                <i className="fas fa-project-diagram" /> My Work
              </Link>
            </li>

            <li className={this.state.showMenu ? "nav-item show" : "nav-item"}>
              <Link to="/contact" className="nav-link">
                <i className="fas fa-phone" /> How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
