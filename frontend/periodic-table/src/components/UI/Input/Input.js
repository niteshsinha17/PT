import React from "react";
import "./Input.css";
const input = (props) => {
  let InputElement;

  switch (props.inputtype) {
    case "input":
      InputElement = <input {...props} />;
      break;

    default:
      break;
  }

  return (
    <div className="input-box">
      <label>{props.label}</label>
      {InputElement}
    </div>
  );
};

export default input;
