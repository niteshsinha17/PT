import React from "react";
import "./SeriesButton.css";
const seriesButton = (props) => {
  return (
    <div className="series-btn">
      {props.name}
    </div>
  );
};

export default seriesButton;
