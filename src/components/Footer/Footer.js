import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Email } from "../../assets/images/gmail.svg";
const Footer = (props) => {
  return (
    <div className={classes.Footer} style={{ fontSize: "2rem" }}>
      <p>Made with ❤️</p>
      <div className={classes.Social}>
        <a
          href="mailto:raminoreldaim@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--red)" }}
        >
          <Email />
        </a>
        <a href="https://github.com/ramiinour" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Footer;
