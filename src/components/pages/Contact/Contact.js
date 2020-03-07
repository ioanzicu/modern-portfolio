import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Heading from "../../Heading/Heading";
import contactsConfig from "./config";
import "./Contact.css";

const Box = ({ link, icon, title, value }) => {
  const styles = {
    fontFamily: "Capriola"
  };

  return (
    <div style={styles}>
      <a href={link}>
        <span className="text-secondary">
          <i className={icon}>
            <span style={styles}> {title}</span>:
          </i>{" "}
        </span>
        {value}
      </a>
    </div>
  );
};

const Contact = ({ location }) => (
  <>
    <Menu location={location.pathname} className="page" />
    <div>
      <main id="contact">
        <Heading title="Contact" subtitle="This is how you can reach me..." />
        <div className="boxes">
          {contactsConfig &&
            contactsConfig.map(({ link, icon, title, value }) => (
              <Box
                key={title}
                link={link}
                icon={icon}
                title={title}
                value={value}
              />
            ))}
        </div>
      </main>
    </div>
    <Footer />
  </>
);

export default Contact;
