import React from "react";

const button = (props) => {
  return (
    <button onClick={props.click} className={props.class}>
      {props.name}
    </button>
  );
};

export default button;
