import axios from "axios";
import React, { Component } from "react";
import classes from "./MainSection.module.css";
import Cards from "../../components/Cards/Cards";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Filter from "../../components/Filter/Filter";
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
		try {
			// eslint-disable-next-line no-unused-vars
			const resp = await axios
				.get("https://backendkham.herokuapp.com/api/show")
				.then((response) => {
					const finalLangs = ["All"];
					// eslint-disable-next-line no-unused-vars
					const languages = response.data.data.forEach((element) => {
						element.repos.forEach((repo) => {
							// console.log(repo.languages)
							finalLangs.push(repo.languages);
						});
					});
					const validData = response.data.data.filter(
						(user) => user.repos.length > 0
					);
					this.setState((prevState) => ({
						...prevState,
						data: [...validData],
						filteredData: [...validData],
						loading: false,
						filterLanguages: [...new Set(finalLangs)].filter((item) => item),
					}));
				});
		} catch (error) {
			return Promise.reject(error);
		}
	}
	filterRepos = (lang) => {
		if (lang === "All") {
			this.setState((prevState) => ({
				filteredData: prevState.data,
			}));
		} else {
			const dataToBeFiltered = this.state.data.map((obj) => ({
				...obj,
				repos: obj.repos.filter((repo) => repo.languages === lang),
			}));
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
