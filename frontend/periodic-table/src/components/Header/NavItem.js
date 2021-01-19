import React from "react";

const navItem = (props) => {
  return (
    <li className="nav-item">
      <a className={"nav-link " + props.class} href="">
        {props.children}
      </a>
    </li>
  );
};

export default navItem;
