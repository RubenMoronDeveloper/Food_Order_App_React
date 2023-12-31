import React from "react";
import classes from "./Input.module.css";
export const Input = (props) => {
  return (
    <div className={classes.input}>
      <label  htmlFor={props.input.id}>{props.label}</label>
      <input id={props.id} {...props.input}/>
    </div>
  );
};
