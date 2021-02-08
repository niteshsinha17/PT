import React, { Component } from "react";
import Blue from "../../assests/images/blue.jpg";
import Yellow from "../../assests/images/yellow.jpg";
import Basket from "./Basket";
import Element from "./Element";
import "./Basket.css";

class BasketGame extends Component {
  state = {
    element: {
      name: "Oxygen",
      symbol: "O",
    },
    yellow: {
      points: 0,
      elements: [],
      name: "Group 1",
    },
    blue: {
      points: 0,
      elements: [],
      name: "Group2",
    },
    baskets: ["yellow", "blue"],
  };
  render() {
    return (
      <div className="basket-game">
        <div className="basket-score-board"></div>
        <div className="basket-board">
          <Element
            name={this.state.element.name}
            symbol={this.state.element.symbol}
          />
          <div className="baskets">
            <Basket img={Yellow} name={this.state.yellow.name} />
            <Basket img={Blue} name={this.state.blue.name} />
          </div>
        </div>
        <div className="basket-score-board"></div>
      </div>
    );
  }
}

export default BasketGame;
