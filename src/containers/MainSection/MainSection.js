import axios from "axios";
import React from "react";
import classes from "./MainSection.module.css";
import Cards from "../../components/Cards/Cards";
import { useAsync } from "react-async";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const getData = async () => {
  try {
    const resp = await axios.get("https://backendkham.herokuapp.com/api/show");
    const data = resp.data.data;
    return data;
  } catch (error) {
    return error;
  }
};
const MainSection = (props) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getData });

  if (isLoading) {
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
  if (error) {
    console.log(error);
    return <h1>Can't Fetch the repositories data, please try again.</h1>;
  }
  if (data) {

    return (
      <div className={classes.Main}>
        <Cards data={data} />
      </div>
    );
  }
};

export default MainSection;
