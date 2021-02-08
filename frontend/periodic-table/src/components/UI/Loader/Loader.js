import React from "react";
import "./Loader.css";

const loader = (props) => {
  return (
    <div className="loader">
      <div class="wrap">
        <div class="loading">
          <div class="bounceball"></div>
        </div>
      </div>
    </div>
  );
};

export default loader;
