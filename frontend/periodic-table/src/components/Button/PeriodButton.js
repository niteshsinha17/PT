import React from "react";
import "./PeriodButton.css";
const periodButton = (props) => {
  return (
    <div className="period-btn">
      {props.name}
    </div>
  );
};

export default periodButton;
