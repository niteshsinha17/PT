import React, { Component } from "react";
import { motion } from "framer-motion";
import SliderButton from "../Button/SliderButton";
import BlockButton from "../Button/BlockButton";
import "./Slider.css";

class LeftSlider extends Component {
  state = {
    periods: [
      {
        name: "1",
      },
      {
        name: "2",
      },
      {
        name: "3",
      },
      {
        name: "4",
      },
      {
        name: "5",
      },
      {
        name: "6",
      },
      {
        name: "7",
      },
    ],
    other: [
      {
        name: "Lanthanide",
      },
      {
        name: "Actanide",
      },
    ],
  };
  render() {
    const periodButtons = this.state.periods.map((period) => {
      return (
        <li key={period.name.toLowerCase()}>
          <PeroidButton name={period.name} />
        </li>
      );
    });
    return (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6 }}
        className="left-slider"
      >
        <div className="left-handle">
          <ul className="handle">{blockButtons}</ul>
          <SliderButton />
        </div>
      </motion.div>
    );
  }
}

export default LeftSlider;
