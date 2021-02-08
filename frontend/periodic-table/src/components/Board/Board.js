import React, { Component } from "react";
import Evolution from "../Chapters/Evolution/Evolution";
import Mnemoics from "../Chapters/Mnemoics/Mnemoics";
import SideBar from "../../components/SideBar/SideBar";

import "./Board.css";

class Board extends Component {
  state = {
    open: true,
  };

  sidebarHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        open: !prevState.open,
      };
    });
  };
  render() {
    let chapter = null;
    switch (this.props.match.params.chapter) {
      case "evolution":
        chapter = <Evolution {...this.props} />;
        break;
      case "mnemoics":
        chapter = <Mnemoics {...this.props} />;
        break;

      default:
        break;
    }
    let sidebarShowClass = this.state.open === false ? "close" : "";
    return (
      <div className="board-wrapper">
        <div className="board-chapter-name">
          <b>Chapter: </b> {this.props.match.params.chapter}
        </div>
        <div className={"board " + sidebarShowClass}>
          <SideBar click={this.sidebarHandler} />
          <div className="content">{chapter}</div>
        </div>
      </div>
    );
  }
}

export default Board;
