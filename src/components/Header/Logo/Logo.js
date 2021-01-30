import React from "react";
import classes from "./Logo.module.css";
import {ReactComponent as LogoGit} from '../../../assets/images/logo.svg'
const Logo = (props) => {
  return (
    <div className={classes.Logo}>
    <LogoGit />
    </div>

  );
};

export default Logo;
