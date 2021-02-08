import React, { Component } from "react";
import "./Setting.css";
import ProfileImage from "../../assests/images/profile.jpg";
import Down from "../../assests/icons/down.png";
import Up from "../../assests/icons/up.png";

class Setting extends Component {
  state = {
    showSetting: false,
  };

  settingToggleHandler = () => {
    this.setState((prevState) => {
      return { ...this.state, showSetting: !prevState.showSetting };
    });
  };

  render() {
    return (
      <div className="setting-wrapper">
        <div className="user">
          <div className="user-img">
            <img src={ProfileImage} alt="" />
            Nitesh Sinha
          </div>
          <button onClick={this.settingToggleHandler}>
            <img src={this.state.showSetting ? Up : Down} alt="" />
          </button>
        </div>
        {this.state.showSetting ? (
          <ul className="setting">
            <li className="setting-item">My Profile</li>
            <li className="setting-item">Change Password</li>
            <li className="setting-item">
              Change Email{" "}
              <span className="email">niteshsinha1707@gmail.com</span>
            </li>
            <li className="setting-item">Logout</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Setting;
