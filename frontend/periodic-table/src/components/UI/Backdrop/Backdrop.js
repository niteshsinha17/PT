import React, { Component } from "react";
import { connect } from "react-redux";
import "./Backdrop.css";
import { closeAll } from "../../../store/actions/index";

class Backdrop extends Component {
  render() {
    return <div onClick={this.props.closeAll} className="backdrop"></div>;
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    closeAll: () => dispatch(closeAll()),
  };
};

export default connect(null, mapDipatchToProps)(Backdrop);
