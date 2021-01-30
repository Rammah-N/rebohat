import React from "react";
import classes from "./BuyMe.module.css";
const BuyMe = (props) => {
  return (
    <div className={classes.BuyMe} onClick={props.click}>
      <p>Buy me a ☕</p>
    </div>
  );
};

export default BuyMe;
