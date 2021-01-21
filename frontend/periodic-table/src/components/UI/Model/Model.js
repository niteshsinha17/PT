import React from "react";
import "./Model.css";

const model = (props) => {
  let show_class = props.show === true ? " " : "hide";
  return (
    <div className={props.modelType + " model " + show_class}>
      <span onClick={props.close} className="cross"></span>

      {props.children}
    </div>
  );
};

export default model;
