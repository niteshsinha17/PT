import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../Eu.png";
import NavItem from "./NavItem";
import HeaderButton from "./HeaderButton";
import Input from "../../components/UI/Input/Input";
import Model from "../../components/UI/Model/Model";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Setting from "../Setting/Setting";
import "./Header.css";
import * as actions from "../../store/actions/index";

class Header extends Component {
  render() {
    let loginForm =
      this.props.authenticated === false ? (
        <LoginForm
          close={this.props.loginFormViewHandler}
          show={this.props.showLoginForm}
        />
      ) : <Setting />;

    let account =this.props.authenticated === true ? null : (
      <div>
        <HeaderButton
          click={this.props.showRegisterFormViewHandler}
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
    )
    return (
      <div className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <span className="navbar-brand">
              <img src={logo} alt="" />
            </span>
          </li>
          <NavItem to="/" exact={true} locked={false}>
            Overview
          </NavItem>
          <NavItem to="/course" exact={true} locked={!this.props.authenticated}>
            Course
          </NavItem>
          <NavItem
            to="/games"
            exact={false}
          >
            Games
          </NavItem>
        </ul>
        {account}
        {loginForm}
        <Model
          close={this.props.loginFormViewHandler}
          modelType="form-model"
          show={this.props.showRegisterForm}
        >
          <form>
            <h2>Register Form</h2>
            <Input
              inputtype="input"
              type="text"
              label="Username"
              placeholder="Username"
            />
            <Input
              inputtype="input"
              type="password"
              label="Password"
              placeholder="Passwprd"
            />
            <Input
              inputtype="input"
              type="password"
              label="Reenter Password"
              placeholder="Confirm Passwprd"
            />
            <input
              type="submit"
              className="register-form-btn"
              value="Register"
            />
          </form>
        </Model>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.is_authenticated,
    material_access: state.material.is_access,
    showLoginForm: state.auth.showLoginForm,
    showRegisterForm: state.auth.showRegisterForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFormViewHandler: () => {
      dispatch(actions.loginFormHandler());
    },
    registerFormHandler: () => {
      dispatch(actions.registerFormHandler());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
