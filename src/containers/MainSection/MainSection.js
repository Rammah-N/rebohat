import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./MainSection.module.css";
import Cards from "../../components/Cards/Cards";
import Filter from "../../components/Filter/Filter";
import Button from "../../components/Button/Button";
import {useAsync} from "react-async";

const getData =  async () => {
  try {
    const resp = await axios.get(
      "https://backendkham.herokuapp.com/api/show"
    );
    const data = await resp.data.data;
    // console.log(resp)
    return data;
    // const languages = await axios.get(repoData[2].languages_url);
    // console.log(languages.data);
    // return resp.data;
  } catch (err) {
    console.log(err);
  }
};

const MainSection = (props) => {
  const [apiData, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);


  const {data, error, isLoading} = useAsync({promiseFn: getData})

  // for(let userData in data) {
  //   setFinalData([...finalData, {
  //     name: userData.name,
  //     repos: userData.repos
  //   }])
  // }
  // console.log(finalData);
  /// Load more and Filter Functionality

  // let reposToRender = [...repos];
  const [slideText, setSlideText] = useState(false);
  // const newReposPerPage = 5;
  // let holdReposArr = [];
  // const [reposToShow, setReposToShow] = useState([]);
  // const [next, setNext] = useState(5);
  // // console.log('Hold Repos Arr before slicing:', holdReposArr);

  // // This function slices the original Repos array and copies it's content based on the start and end numbers we pass.
  // const loopWithSlice = (repo,start, end) => {
  //   const slicedRepos = repo.slice(start, end);
  //   holdReposArr = [...holdReposArr, ...slicedRepos];
  //   // console.log('Hold Repos Arr after slicing:', holdReposArr);
  //   // console.log(holdReposArr, slicedRepos);
  //   setReposToShow(holdReposArr);
  // };
  // holdReposArr = reposToShow;

  // // console.log('Hold Repos Arr after LoopWithSlice():', holdReposArr);
  // // console.log("Repos to show are:", reposToShow);
  // useEffect(() => {
  //   loopWithSlice(reposToRender, 0, 10);
  // }, []);

  // // Function to show more repos when Load More button is pressed.
  // const showMoreRepos = (repo) => {
  //   // console.log('Showing more repos')
  //   loopWithSlice(repo, next, next + newReposPerPage);
  //   setNext(next + newReposPerPage);
  // };

  // Function to show the Filter Text and animate it.
  const showText = () => {
    setSlideText(!slideText);
  };

  // // A function that filters the Repositories List based on the Value of Option (Filter) checked

  // const filterRepos = (event) => {
  //   const optionVal = event.target.value;
  //   if(optionVal === 'all') {
  //     setReposToShow(repos)
  //   } else {
  //     const filteredRepos = [...reposToRender].filter(repo => repo.lang === optionVal);
  //     setReposToShow(filteredRepos);
  //   }
  // }
  // console.log("Hold Repos Arr is:", holdReposArr);
  if(isLoading) {
    return <h1>Loading</h1>
  }
  if(error) {
    return <h1>Can't Fetch the repositories data, please try again.</h1>
  }
  if(data) {
    return (
      <div className={classes.Main}>
        <Filter slideText={slideText} btnClick={showText} />
      <Cards data={data}/>
      </div>
    );
  }
};

export default MainSection;

// Get Request Object that's returned and its parameters
// created_at: "2021-01-27T16:48:47.000000Z"
// description: "Some handy array functions"
// id: 11
// languages: "PHP"
// name: "array-functions"
// updated_at: "2021-01-27T16:48:48.000000Z"
// url: "https://github.com/spatie/array-functions"
// user_id: 2
