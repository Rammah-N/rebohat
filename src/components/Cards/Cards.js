import React from "react";
import classes from "./Cards.module.css";
import Card from "./RepoCard/Card";
const Cards = ({ data }) => {

	// eslint-disable-next-line no-unused-vars
	const userRepos = data
		.map((user) => {
			return user.ownerRepos.map((repo) => repo);
		})
		.flat();
	return (
		<>
			<ul
				className={classes.Cards}
				style={
					userRepos.length < 5
						? {
								gridTemplateColumns: "repeat(auto-fit, minmax(250px, 250px))",
						  }
						: {
								gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
						  }
				}
			>
				{userRepos.map((repo, i) => {
					return (
						<li key={`repo-${repo.title}-${i}`}>
							<Card
								creator={repo.creator}
								description={repo.description}
								visitLink={repo.url}
								title={repo.title}
								lang={repo.language}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Cards;
