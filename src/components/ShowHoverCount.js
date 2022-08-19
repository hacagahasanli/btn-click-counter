import React from "react";
import wrappedIncrement from "./wrappedIncrement";

const ShowHoverCount = (props) => {
  return (
    <h1 onMouseOver={props.useIncrement}>Hover {props.increment} Times</h1>
  );
};

export default wrappedIncrement(ShowHoverCount);
