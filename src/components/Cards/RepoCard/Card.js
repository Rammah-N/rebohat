import React, { useState } from "react";
import classes from "./Card.module.css";
import Button from "../../Button/Button";
const Card = ({ title, creator, lang, description, visitLink }) => {
	const [showDescription, setState] = useState(false);
	const paragraphStyle = {
		padding: "0 10px",
		display: showDescription ? "block" : "none",
		textAlign: "left",
	};
	const showInfo = () => {
		setState(!showDescription);
	};
	return (
		<div className={classes.Card}>
			<h3>{title}</h3>
			<h4>Creator: {creator}</h4>
			<h4>{`Main Language:  ${lang ? lang : "Undefined"}`}</h4>
			<p style={paragraphStyle}>
				{description ? description : "No description found"}
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
				<a href={visitLink} target="_blank" rel="noreferrer">
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
