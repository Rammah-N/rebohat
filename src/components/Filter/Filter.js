import React from "react";
import classes from "./Filter.module.css";
import Button from "../Button/Button";
const Filter = (props) => {
  return (
    <div>
      <div className={classes.Filter}>
        <Button
          btnStyle={{
            padding: "5px 15px",
            backgroundColor: "var(--blue)",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "700",
          }}
          btnText="Filter"
          btnClick={props.btnClick}
        />
        <div
          className={[
            classes.Filters,
            props.slideText ? classes.slide : "",
          ].join(" ")}
        >
          <option value="all" onClick={(event) => props.filterRepos(event)}>All</option>
          <option value="html" onClick={(event) => props.filterRepos(event)}>HTML</option>
          <option value="css" onClick={(event) => props.filterRepos(event)}>CSS</option>
          <option value="javascript" onClick={(event) => props.filterRepos(event)}>Javascript</option>
          <option value="react" onClick={(event) => props.filterRepos(event)}>React</option>
          <option value="java" onClick={(event) => props.filterRepos(event)}>Java</option>
          <option value="nodejs" onClick={(event) => props.filterRepos(event)}>NodeJs</option>
          <option value="django" onClick={(event) => props.filterRepos(event)}>Django</option>
          <option value="graphql" onClick={(event) => props.filterRepos(event)}>GraphQL</option>
          <option value="python" onClick={(event) => props.filterRepos(event)}>Python</option>
        </div>
      </div>
    </div>
  );
};

export default Filter;
