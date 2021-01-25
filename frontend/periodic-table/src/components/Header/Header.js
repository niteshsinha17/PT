import React, { Component } from "react";
import logo from "../../Eu.png";
import NavItem from "./NavItem";
import HeaderButton from "./HeaderButton";
import Input from "../UI/Input/Input";
import Model from "../UI/Model/Model";
import "./Header.css";

import LoginForm from "../Forms/LoginForm/LoginForm";

class Header extends Component {
  state = {
    showLoginForm: false,
    showRegisterForm: false,
  };

  formCloseHandler = () => {
    this.setState({ showLoginForm: false, showRegisterForm: false });
  };

  showLoginForm = () => {
    this.setState({ showLoginForm: true, showRegisterForm: false });
  };
  showRegisterForm = () => {
    this.setState({ showLoginForm: false, showRegisterForm: true });
  };
  render() {
    return (
      <div className="navbar">
        <ul className="nav">
          <li className="nav-item">
          <span className="navbar-brand"><img src={logo} alt="" /></span>          
          </li>
          <NavItem to='/' exact={true} >Overview</NavItem>
          <NavItem to='/course' exact={true} >Course</NavItem>
          <NavItem to='/study-material' exact={false} >Study Material</NavItem>
        </ul>
        <div className="account-info">
          <HeaderButton click={this.showRegisterForm} _for="register-btn">
            Register
          </HeaderButton>
          <HeaderButton click={this.showLoginForm} _for="login-btn">
            Login
          </HeaderButton>
        </div>
        <LoginForm
          close={this.formCloseHandler}
          show={this.state.showLoginForm}
        />

        <Model
          close={this.formCloseHandler}
          modelType="form-model"
          show={this.state.showRegisterForm}
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

export default Header;
