import React from "react";
import "./Input.css";

const input = (props) => {
  let InputElement = null;
  const inputClasses = [];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("invalid");
  }

  switch (props.inputtype) {
    case "input":
      InputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    default:
      InputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }

  return <div className="input-box">{InputElement}</div>;
};

export default input;
