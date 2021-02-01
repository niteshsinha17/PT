import React from "react";
import { NavLink } from "react-router-dom";
import Lock from "../../components/UI/Lock/Lock";

const navItem = (props) => {
  const locker = props.locked === true ? <Lock /> : null;
  return (
    <li className="nav-item">
      {locker}
      <NavLink
        to={props.to}
        exact={props.exact}
        activeClassName="active-link"
        className="nav-link"
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;
