import React from "react";
import "./SeriesButton.css";
const seriesButton = (props) => {
  let classes = ["series-btn"];
  if (props.active) {
    classes.push("series-active");
  }
  return (
    <div onClick={props.click} className={classes.join(" ")}>
      {props.name}
    </div>
  );
};

export default seriesButton;
