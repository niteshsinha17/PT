import React, { Component } from "react";
import Model from "../UI/Model/Model";
import Input from "../UI/Input/Input";

class Forms extends Component {
  state = {
    // showLoginForm: false,
    // showRegisterForm: false,
  };

  render() {
    return (
      (
        <Model modelType="form-model" show={this.props.showLoginForm}>
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
            <input type="submit" className="login-btn" value="Login" />
          </form>
        </Model>
      ),
      (
        <Model modelType="form-model" show={this.props.showRegisterForm}>
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
            <input type="submit" className="register-btn" value="Register" />
          </form>
        </Model>
      )
    );
  }
}

export default Forms;
