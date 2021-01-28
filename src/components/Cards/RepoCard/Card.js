import React, { useState } from "react";
import classes from "./Card.module.css";
import Button from "../../Button/Button";
const Card = (props) => {
  const [showDescription, setState] = useState(false);
  const paragraphStyle = {
    padding: "0 20px",
    display: showDescription ? "block" : "none",
    textAlign: "left",
  };
  const showInfo = () => {
    setState(!showDescription);
  };
  return (
    <div className={classes.Card}>
      <h3>{props.title}</h3>
      <h4>Creator: {props.creator}</h4>
        <p style={paragraphStyle}>
          {props.description ? props.description : "No description found"}
        </p>
      <div style={{ marginTop: "20px" }}>
        <Button
          btnStyle={{
            padding: "10px 20px",
            backgroundColor: "var(--red)",
            color: "#fff",
            marginRight: "10px",
          }}
          btnText="Description"
          btnClick={showInfo}
        />
        <a href={props.visitLink} target="_blank" rel="noreferrer">
        <Button
          btnStyle={{
            padding: "10px 40px",
            backgroundColor: "var(--red)",
            color: "#fff",
          }}
          btnText="Visit"
        />
        </a>
      </div>
    </div>
  );
};

export default Card;
