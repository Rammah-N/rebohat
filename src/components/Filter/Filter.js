import React, {useState} from "react";
import classes from "./Filter.module.css";
import Button from '../Button/Button'
const Filter = (props) => {
	// const langs = props.lang || null;
	const [slideText , setSlideText] = useState(false)
	return (
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
				btnClick={() => setSlideText(!slideText)}
			/>
			<div
				className={[
					classes.Filters,
					slideText ? classes.slide : "",
				].join(" ")}
			>
				{props.languages.map((lang) => {
					return (
						<option
							value={lang}
							key={lang}
							onClick={props.filterRepos}
						>
							{lang}
						</option>
					);
				})}
			</div>
		</div>
	);
};

export default Filter;
