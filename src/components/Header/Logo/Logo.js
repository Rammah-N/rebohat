import React from 'react'
import classes from './Logo.module.css'
const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Logo
