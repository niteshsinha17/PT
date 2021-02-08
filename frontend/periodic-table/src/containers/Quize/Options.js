import React from "react";

const option = (props) => {
  let classes = ["option"];
  if (props.id === props.selected) {
    classes.push("selected");
  }
  return <div className={classes.join(" ")}>{props.option}</div>;
};

export default option;
