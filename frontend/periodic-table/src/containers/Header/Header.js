import React, { Component } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import logo from "../../Eu.png";
import NavItem from "./NavItem";
import HeaderButton from "./HeaderButton";
import Setting from "../Setting/Setting";
import "./Header.css";
import * as actions from "../../store/actions/index";

class Header extends Component {
  render() {
    let account =
      this.props.authenticated === true ? (
        <Setting />
      ) : (
        <div>
          <HeaderButton
            click={this.props.registerFormHandler}
            _for="register-btn"
          >
            Register
          </HeaderButton>
          <HeaderButton
            click={this.props.loginFormViewHandler}
            _for="login-btn"
          >
            Login
          </HeaderButton>
        </div>
      );
    return (
      <motion.div
        transition={{ when: "beforeChildren" }}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="navbar"
      >
        <ul className="nav">
          <li className="nav-item">
            <span className="navbar-brand">
              <img src={logo} alt="" />
            </span>
          </li>
          <NavItem to="/" exact={true} locked={false}>
            Overview
          </NavItem>
          <NavItem to="/course" exact={true}>
            Course
          </NavItem>
          <NavItem to="/games" locked={!this.props.authenticated}>
            Games
          </NavItem>
        </ul>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1, type: "spring", stiffness: 2 }}
        >
          {account}
        </motion.div>
      </motion.div>
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
