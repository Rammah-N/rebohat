import React from 'react'
import axios from 'axios';
import './Form.css';
const Form = (props) => {
  return (
    <form className="Form" action="https://backendkham.herokuapp.com/api/post" method="POST">
      <input placeholder="Enter your Github Username"/>
      <button type="submit" onSubmit={props.onSubmit}>Submit</button>
    </form>
  )
}

export default Form
