import React, { Component } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Header.css";
import * as actions from "../../store/actions/index";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav">
          <motion.li
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <NavLink
              to="/"
              exact
              activeClassName="active-link"
              className="nav-link"
            >
              Overview
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ delay: 0.5 }}
            className="link-seperator"
          ></motion.li>
          <motion.li
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <NavLink
              to="/games/"
              exact
              activeClassName="active-link"
              className="nav-link"
            >
              Game
            </NavLink>
          </motion.li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.isAuthenticated,
    material_access: state.material.is_access,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFormViewHandler: () => {
      dispatch(actions.toggleLoginForm());
    },
    registerFormHandler: () => {
      dispatch(actions.toggleRegisterForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
