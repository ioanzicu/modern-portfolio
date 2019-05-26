import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li className="nav-item current">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/work" className="nav-link">
            My Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            How To Reach Me
          </Link>
        </li>
      </ul>
    );
  }
}

// <header>
// <div className="menu-btn">
//   <div className="btn-line" />
//   <div className="btn-line" />
//   <div className="btn-line" />
// </div>

// <nav className="menu">
//   <div className="menu-branding">
//     <div className="portrait" />
//   </div>
//   <ul className="menu-nav">
//     <li className="nav-item current">
//       <a href="./" className="nav-link">
//         Home
//       </a>
//     </li>
//     <li className="nav-item">
//       <a href="./about.html" className="nav-link">
//         About Me
//       </a>
//     </li>
//     <li className="nav-item">
//       <a href="./work.html" className="nav-link">
//         My Work
//       </a>
//     </li>
//     <li className="nav-item">
//       <a href="./contact.html" className="nav-link">
//         How To Reach Me
//       </a>
//     </li>
//   </ul>
// </nav>
// </header>
