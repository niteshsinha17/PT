import React from "react";

const basket = (props) => {
  return (
    <div className="basket">
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </div>
  );
};

export default basket;
