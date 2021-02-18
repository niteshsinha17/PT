import React, { Component } from "react";
import { motion } from "framer-motion";
import PeriodButton from "../Button/PeriodButton";
import SeriesButton from "../Button/SeriesButton";
import "./Slider.css";

class RightSlider extends Component {
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
    series: [
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
          <PeriodButton name={period.name} />
        </li>
      );
    });
    const seriesButtons = this.state.series.map((series) => {
      return (
        <li key={series.name.toLowerCase()}>
          <SeriesButton name={series.name} />
        </li>
      );
    });
    return (
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6 }}
        className="right-slider"
      >
        <ul className="right-handle">
          <li className="list-name">Periods</li>
          {periodButtons}
          <li className="list-name">Series</li>
          {seriesButtons}
        </ul>
      </motion.div>
    );
  }
}

export default RightSlider;
