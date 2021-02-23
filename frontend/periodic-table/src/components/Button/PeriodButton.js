import React from "react";
import "./PeriodButton.css";
const periodButton = (props) => {
  let classes = ["period-btn"]
  if(props.active){
    classes.push("period-active")
  }
  return (
    <div onClick={props.click} className={classes.join(" ")}>
      {props.name}
    </div>
  );
};

export default periodButton;
