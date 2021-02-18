import React from "react";
import "./BlockButton.css";
const blockButton = (props) => {
  return (
    <div className="block-btn">
      <div className="block-btn-ring">
        <span style={{ backgroundColor: props.color }}></span>
      </div>
      {props.name}
    </div>
  );
};

export default blockButton;
