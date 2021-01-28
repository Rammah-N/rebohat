import React from "react";
import classes from "./Cards.module.css";
import Card from "./RepoCard/Card";
const Cards = (props) => {
  console.log(props.data);
  const userData = Object.keys(props.data).map((key) => {
    // console.log(`key is: ${key}`)
    return {
      name: props.data[key].name,
      id: props.data[key].id,
      repos: props.data[key].repos,
    };
  });
  const finalRepos = [];
  const userRepos = userData.map(user => {
    const arrs = user.repos.flat(1).map(item => {
      // console.log(`item is:`, item);
      finalRepos.push(item);
    });
    return arrs;
  });
  console.log(userData.find(user => user.id === 1).name)
  console.log('finalRepos are:', finalRepos)
  // console.log(`user data is:` , userData)
  // console.log(`User repos are: `, userRepos);
  return (
    <ul className={classes.Cards}>
      {finalRepos.map(repo => {
        return <li key={`repo-${repo.id}-${repo['user-id']}`}>
          <Card creator={userData.find(user => user.id === repo['user_id']).name} description={repo.description} visitLink={repo.url} title={repo.name}  />
        </li>
      })}
    </ul>
  );
};

export default Cards;

/*         <li key={`card-${user.id}-${i}`}>
          <ul className={classes.userCards}>
            {user.repos.map((repo) => {
              return (
                <li key={`user-${repo["user_id"]}-${repo.id}`}>
                  <Card
                    title={repo.name}
                    description={repo.description}
                    creator={user.name}
                    visitLink={repo.url}
                  />
                </li>
              );
            })}
          </ul>
        </li> */