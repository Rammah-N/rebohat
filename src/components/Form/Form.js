import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Form = (props) => {
  const [submitted, setSubmit] = useState(false);
  const [btnText, setBtnText] = useState("Submit");
  const formSubmit = (event) => {
    setBtnText(<Loader type="TailSpin" color="#fff" height={20} width={20} />);
    event.preventDefault();
    const userName = event.target[0].value;
    const sendUser = async (user) => {
      const gitData = await axios
        .post(`https://backendkham.herokuapp.com/api/add`, { username: user })
        .then((resp) => {
          setSubmit(true);
        });
      console.log(gitData);
    };
    sendUser(userName);
    console.log(userName);
    return false;
  };
  return (
    <form className="Form" onSubmit={(e) => formSubmit(e)} name="repoForm" data-netlify="true">
      <input placeholder="Github Username" required />
      {!submitted ? (
        <button type="submit">{btnText}</button>
      ) : (
        <p style={{ margin: "10px 0", fontSize: "2rem", color: "var(--red)" }}>
          Your username has been submitted succefully! your repositories will
          appear here soon.
        </p>
      )}
    </form>
  );
};

export default Form;
