import React, { Component } from "react";
import { motion } from "framer-motion";
import PeriodButton from "../Button/PeriodButton";
import SeriesButton from "../Button/SeriesButton";
import "./Slider.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class RightSlider extends Component {
  state = {
    periods: [
      {
        name: 1,
      },
      {
        name: 2,
      },
      {
        name: 3,
      },
      {
        name: 4,
      },
      {
        name: 5,
      },
      {
        name: 6,
      },
      {
        name: 7,
      },
    ],
    series: [
      {
        name: "Lanthanide",
        key: "lan",
      },
      {
        name: "Actanide",
        key: "act",
      },
    ],
  };
  render() {
    const periodButtons = this.state.periods.map((period) => {
      return (
        <li key={period.name}>
          <PeriodButton
            active={
              this.props.selectionType === "period" &&
              this.props.selected === period.name
            }
            click={() => this.props.select("period", period.name)}
            name={period.name}
          />
        </li>
      );
    });
    const seriesButtons = this.state.series.map((series) => {
      return (
        <li key={series.key}>
          <SeriesButton
            click={() => this.props.select("series", series.key)}
            name={series.name}
          />
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

const mapStateToProps = (state) => {
  return {
    selected: state.table.selected,
    selectionType: state.table.selectionType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    select: (type, select) =>
      dispatch(actions.select({ type: type, select: select })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightSlider);
