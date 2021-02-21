import React, { Component } from "react";
import { motion } from "framer-motion";
import SliderButton from "../Button/SliderButton";
import BlockButton from "../Button/BlockButton";
import "./Slider.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class LeftSlider extends Component {
  state = {
    blocks: [
      {
        name: "s",
        color: "#FBD6D1",
        key: "s-block",
      },
      {
        name: "p",
        color: "#DD9B5E",
        key: "p-block",
      },
      {
        name: "d",
        color: "#94C6EB",
        key: "d-block",
      },
      {
        name: "f",
        color: "#F1CA4E",
        key: "f-block",
      },
    ],
    type: "block",
  };
  render() {
    const blockButtons = this.state.blocks.map((block) => {
      return (
        <li key={block.key}>
          <BlockButton
            active={
              this.state.type === this.props.selectionType &&
              block.name === this.props.selected
            }
            click={() => this.props.select(this.state.type, block.name)}
            name={block.name}
            color={block.color}
          />
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

const mapStateToProps = (state) => {
  return {
    selected: state.table.selected,
    selectionType: state.table.selectedType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    select: (type, select) =>
      dispatch(actions.select({ type: type, select: select })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSlider);
