import React from "react";
import {NavLink} from "react-router-dom"; 

const navItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink to={props.to} exact={props.exact} activeClassName="active-link" className="nav-link" >{props.children}</NavLink>
    </li>
  );
};

export default navItem;
