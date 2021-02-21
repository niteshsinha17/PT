import React from "react";
import "./BlockButton.css";
const blockButton = (props) => {
  let classes = ["block-btn-ring "];
  if (props.active) {
    classes.push("block-active");
  }
  return (
    <div className="block-btn">
      <div className={classes.join(" ")}>
        <span
          onClick={props.click}
          style={{ backgroundColor: props.color }}
        ></span>
      </div>
      {props.name}
    </div>
  );
};

export default blockButton;
