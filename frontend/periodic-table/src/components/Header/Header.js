import React, { Component } from "react";
import logo from "../../Eu.png";
import NavItem from "./NavItem";
import HeaderButton from "./HeaderButton";
// import Forms from "../Forms/Forms";
import Input from "../UI/Input/Input";
import Model from "../UI/Model/Model";
import "./Header.css";

class Header extends Component {
  state = {
    showLoginForm: false,
    showRegisterForm: false,
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
            <a className="navbar-brand">
              <img src={logo} alt="" />
            </a>
          </li>
          <NavItem class="link-active">Overview</NavItem>
          <NavItem class="">Course</NavItem>
        </ul>
        <div className="account-info">
          <HeaderButton click={this.showRegisterForm} _for="register-btn">
            Register
          </HeaderButton>
          <HeaderButton click={this.showLoginForm} _for="login-btn">
            Login
          </HeaderButton>
        </div>
        <Model modelType="form-model" show={this.state.showLoginForm}>
          <form>
            <h2>Login Form</h2>
            <Input
              inputtype="input"
              label="Username"
              type="text"
              placeholder="Username"
            />
            <Input
              inputtype="input"
              label="Password"
              type="password"
              placeholder="Your Passwprd"
            />
            <input type="submit" className="login-form-btn" value="Login" />
          </form>
        </Model>
        <Model modelType="form-model" show={this.state.showRegisterForm}>
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
