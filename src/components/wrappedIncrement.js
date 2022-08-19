import React, { useState } from "react";

const WrappedIncrement = (OriginalComponent) => {
  const NewComponent = () => {
    const [increment, setIncrement] = useState(0);
    const increaseHandler = () => {
      setIncrement((prevValue) => {
        return prevValue + 1;
      });
    };
    return (
      <OriginalComponent useIncrement={increaseHandler} increment={increment} />
    );
  };
  return NewComponent;
};

export default WrappedIncrement;
