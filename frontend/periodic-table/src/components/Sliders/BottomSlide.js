import React, { Component } from "react";
import { motion } from "framer-motion";
import PeriodButton from "../Button/PeriodButton";
import "./Slider.css";

class RightSlider extends Component {
  state = {
    groups: 18,
  };
  render() {
    let buttons = [];
    for (let i = 1; i <= this.state.groups; i++) {
      buttons.push(
        <li key={i}>
          <PeriodButton name={i} />
        </li>
      );
    }
    return (
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
        className="bottom-slider"
      >
        <ul className="bottom-handle">
          <li className="list-name">Groups</li>
          {buttons}
        </ul>
      </motion.div>
    );
  }
}

export default RightSlider;
