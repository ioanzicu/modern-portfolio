import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = 1900 + date.getYear();

  return (
    <footer id="main-footer">
      Copyright &copy; {year}. All right reserved.
    </footer>
  );
};

export default Footer;
