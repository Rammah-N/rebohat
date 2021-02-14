import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainSection from "./containers/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import Login from "./components/GithubLogin/Login";
const App = () => {
	return (
		<div className={classes.App} style={{ textAlign: "center" }}>
			<Header />
			<Hero />
			<Login />
			<MainSection />
			<Footer />
		</div>
	);
};

export default App;
