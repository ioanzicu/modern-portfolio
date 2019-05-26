import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div>
          <main id="contact">
            <h1 className="lg-heading">
              Contact
              <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">This is how you can reach me...</h2>
            <div className="boxes">
              <div>
                <span className="text-secondary">Email: </span> email@test.com
              </div>
              <div>
                <span className="text-secondary">Phone: </span> (333)-333-555
              </div>
              <div>
                <span className="text-secondary">Address: </span> 50 Main st
                Bostan MA 0815
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
