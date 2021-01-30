import React, { useState, useEffect } from "react";
import classes from "./Cards.module.css";
import Card from "./RepoCard/Card";
import Button from "../Button/Button";
const Cards = ({ data }) => {
  const userData = Object.keys(data).map((key) => {
    // console.log(`key is: ${key}`)
    return {
      name: data[key].name,
      id: data[key].id,
      repos: data[key].repos,
    };
  });
  const finalRepos = [];
  // eslint-disable-next-line no-unused-vars
  const userRepos = userData.map((user) => {
    const arrs = user.repos.flat(1).map((item) => {
      finalRepos.push(item);
      return item;
    });
    return arrs;
  });

  const newReposPerPage = 5;
  let holdReposArr = [];
  const [reposToShow, setReposToShow] = useState([]);
  const [next, setNext] = useState(5);

  //This function slices the original Repos array and copies it's content based on the start and end numbers we pass.
  const loopWithSlice = (repo, start, end) => {
    if (repo) {
      const slicedRepos = repo.slice(start, end);
      holdReposArr = [...holdReposArr, ...slicedRepos];
      setReposToShow(holdReposArr);
    }
  };
  holdReposArr = reposToShow;

  useEffect(() => {
    loopWithSlice(finalRepos, 0, 10);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Function to show more repos when Load More button is pressed.
  const showMoreRepos = (repo) => {
    loopWithSlice(repo, next, next + newReposPerPage);
    setNext(next + newReposPerPage);
  };
  const btnStyle = {
    padding: "10px 20px",
    fontSize: "2rem",
    backgroundColor: "var(--card-bg)",
    color: "var(--background)",
    fontWeight: "700",
  };
  return (
    <>
      <ul className={classes.Cards}>
        {reposToShow.map((repo, i) => {
          return (
            <li key={`repo-${repo.id}-${repo["user-id"]}-${i}`}>
              <Card
                creator={
                  userData.find((user) => user.id === repo["user_id"]).name
                }
                description={repo.description}
                visitLink={repo.url}
                title={repo.name}
                lang={repo.languages}
              />
            </li>
          );
        })}
      </ul>
      {finalRepos.length > 10 ? (
        <div style={{ display: "flex", placeContent: "center" }}>
          <Button
            btnStyle={btnStyle}
            btnText="Load More"
            btnClick={() => showMoreRepos(finalRepos)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Cards;
