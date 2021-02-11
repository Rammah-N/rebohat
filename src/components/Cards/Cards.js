import React from "react";
import classes from "./Cards.module.css";
import Card from "./RepoCard/Card";
const Cards = ({ data }) => {
	const userData = Object.keys(data).map((key) => {
		return {
			name: data[key].name,
			id: data[key].id,
			repos: data[key].repos,
		};
	});
	// eslint-disable-next-line no-unused-vars
	const userRepos = userData
		.map((user) => {
			const arrs = user.repos.map((item) => {
				return item;
			});
			return arrs;
		})
		.flat();
	return (
		<>
			<ul
				className={classes.Cards}
				style={
					userRepos.length < 5
						? {
								gridTemplateColumns:
									"repeat(auto-fit, minmax(250px, 250px))",
						  }
						: {
								gridTemplateColumns:
									"repeat(auto-fit, minmax(250px, 1fr)",
						  }
				}
			>
				{userRepos.map((repo, i) => {
					return (
						<li key={`repo-${repo.id}-${repo["user-id"]}-${i}`}>
							<Card
								creator={
									userData.find(
										(user) => user.id === repo["user_id"]
									).name
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
		</>
	);
};

export default Cards;
