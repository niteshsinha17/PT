import React, {Component} from "react";
import {motion} from "framer-motion";
import PeriodButton from "../Button/PeriodButton";
import "./Slider.css";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

class RightSlider extends Component {
  state = {
    groups: 18,
  };
  render() {
    let buttons = [];
    for (let i = 1; i <= this.state.groups; i++) {
      buttons.push(
        <li key={i}>
          <PeriodButton
            click={() => this.props.select("group", i)}
            active={
              this.props.selectionType === "group" && this.props.selected === i
            }
            name={i}
          />
        </li>
      );
    }
    return (
      <motion.div
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{delay: 0.6}}
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
const mapStateToProps = (state) => {
  return {
    selected: state.table.selected,
    selectionType: state.table.selectionType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    select: (type, select) =>
      dispatch(actions.select({type: type, select: select})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSlider);
