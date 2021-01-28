import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Email } from "../../assets/images/gmail.svg";
import BuyMe from "../BuyMe/BuyMe";
const Footer = (props) => {
  return (
    <div className={classes.Footer} style={{ fontSize: "2rem" }}>
      <p>Made with ❤️ by Rammah</p>
      <div className={classes.Social}>
        <a href="https://twitter.com/ramma_h" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a
          href="mailto:ramahnore@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--red)" }}
        >
          <Email />
        </a>
        <a href="https://github.com/Rammah-N" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </div>
      <BuyMe click={props.buyClick} />
    </div>
  );
};

export default Footer;
