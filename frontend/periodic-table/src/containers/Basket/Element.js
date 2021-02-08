import React from "react";

const element = (props) => {
  return (
    <div className="basket-element">
      <div className="basket-element-symbol">{props.symbol}</div>
      <div className="basket-element-name">{props.name}</div>
    </div>
  );
};

export default element;
