import React from "react";
import classes from "./Hero.module.css";
import { ReactComponent as BgIcons } from "../../assets/images/BG Icons.svg";
const Hero = (props) => {
	return (
		<div className={classes.HeroContainer}>
			<div className={classes.Hero}>
				<p className={classes.Quote}>
					“Rebohat” is a reference of all Sudanese github repositories, i made
					this website to encourage developers to contribute to open-source
					projects and to help shed some light on hidden gems in the Sudanese
					development community.
				</p>
				<BgIcons className={classes.BG} />
			</div>
			<div className={classes.ctaContainer}>
				<p className={classes.ctaQuote}>
					Add your repository so everyone can contribute <br /> and see your
					awesome projects!
				</p>
			</div>
		</div>
	);
};

export default Hero;
