import React, { Component } from "react";

import Evolution from "../Chapters/Evolution/Evolution";
import Mnemoics from "../Chapters/Mnemoics/Mnemoics";
import "./Board.css";
class Board extends Component {
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
    return (
      <div>
        <div className="board">
          <div className="content">
            <h1>{this.props.match.params.chapter}</h1>
            {chapter}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
