import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
const Header = () => (
  <div className={classes.Header}>
    <Logo text="Rebohat" />
  </div>
);

export default Header;
