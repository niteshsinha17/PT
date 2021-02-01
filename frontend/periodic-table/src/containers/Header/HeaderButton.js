import React from "react";

const headerButton = (props) => {
  return (
    <button onClick={props.click} className={"header-button " + props._for}>{props.children}</button>
  );
};

export default headerButton