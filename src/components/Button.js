import React from "react";
import wrappedIncrement from "./wrappedIncrement";

const Button = (props) => {
  return (
    <button onClick={props.useIncrement}> Value : {props.increment} </button>
  );
};

export default wrappedIncrement(Button);
