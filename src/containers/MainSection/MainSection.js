import React, { Component } from "react";
import classes from "./MainSection.module.css";
import Cards from "../../components/Cards/Cards";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Filter from "../../components/Filter/Filter";
import firebase from "firebase/app";
import "firebase/firestore";

class MainSection extends Component {
	state = {
		data: null,
		filteredData: null,
		loading: true,
		filterLanguages: null,
		slideText: false,
		currentFilter: "All",
	};

	async componentDidMount() {

		// Fetching the database from Firestore and setting the state
		await firebase
			.firestore()
			.collection("users")
			.get()
			.then((querySnapshot) => {
				const dataArr = [];
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					dataArr.push(data);
				});
				const languages = dataArr
					.map((userData) => {
						const lang = userData.ownerRepos.map((repo) => {
							return repo.language;
						});
						return lang;
					})
					.flat();
				languages.unshift("All");
				this.setState((prevState) => ({
					...prevState,
					data: dataArr,
					filteredData: dataArr,
					filterLanguages: [...new Set(languages)].filter((item) => item),
					loading: false,
				}));
			});
	}
	filterRepos = (lang) => {
		if (lang === "All") {
			this.setState((prevState) => ({
				filteredData: prevState.data,
			}));
		} else {
			const dataToBeFiltered = this.state.data.map((user) => {
				return {
					...user,
					ownerRepos: user.ownerRepos.filter((repo) => repo.language === lang),
				};
			});
			this.setState((prevState) => ({
				...prevState,
				filteredData: dataToBeFiltered,
			}));
		}
	};
	animateFilterOptions = () => {
		this.setState((prevState) => ({
			...prevState,
			slideText: !prevState.slideText,
		}));
	};
	render() {
		if (this.state.loading) {
			return (
				<Loader
					className={classes.Loader}
					type="TailSpin"
					color="#00BFFF"
					height={100}
					width={100} //3 secs
				/>
			);
		}
		if (this.state.data) {
			return (
				<>
					<Filter
						filterRepos={(event) => this.filterRepos(event.target.value)}
						slideText={this.state.slideText}
						btnClick={this.animateFilterOptions}
						languages={this.state.filterLanguages}
					/>
					<div className={classes.Main}>
						<Cards data={this.state.filteredData} />
					</div>
				</>
			);
		}
	}
}

export default MainSection;
