import React from "react";
import "./Button.css";
const Button = (props) => {
  const classNames = props.classnames ? props.classNames.join(" ") : "";
  return (
    <button
      className={`button ${classNames}`}
      onClick={props.btnClick}
      style={props.btnStyle}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
