import React, { Component } from "react";
import "./ElementDetail.css";
import LeftImg from "../../assests/icons/left.png";
import RightImg from "../../assests/icons/right.png";
import CloseIcon from "../../assests/icons/close.png";
import { motion } from "framer-motion";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class ElementDetail extends Component {
  render() {
    let boxClass = ["element-box"];
    let type = "Metal";
    console.log(this.props.err);
    if (!this.props.err) {
      boxClass.push(this.props.element.color.slice(1));

      if (this.props.element.non_metal) {
        type = "Non Metal";
      } else if (this.props.element.metalloid) {
        type = "Metalloid";
      }
    }

    return (
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        dragConstraints={{ left: -500, right: 20, top: -50, bottom: 200 }}
        dragElastic={0.2}
        drag
        className="element-model"
      >
        <button onClick={this.props.removeElement} className="element-close">
          <img src={CloseIcon} alt="" />
        </button>
        {this.props.err ? (
          <h2>{this.props.errMsg}</h2>
        ) : (
          <div>
            <div className="element-top">
              <div className={boxClass.join(" ")}>
                <div className="element-no">
                  {this.props.element.atomic_number}
                </div>
                <div className="element-symbol">
                  {this.props.element.symbol}
                </div>
                <div className="element-name">{this.props.element.name}</div>
              </div>
              <div className="element-ch">
                <div className="element-type">{this.props.element._type}</div>
                <div className="element-wt">{this.props.element.atomic_wt}</div>
                <ul className="element-list">
                  <li>
                    <span>protons- </span> {this.props.element.np}
                  </li>
                  <li>
                    <span>electrons- </span> {this.props.element.ne}
                  </li>
                  <li>
                    <span>neutrons- </span> {this.props.element.nn}
                  </li>
                </ul>
              </div>
            </div>
            <div className="element-divider"></div>
            <div className="element-buttons">
              {this.props.element.atomic_number > 1 ? (
                <button
                  onClick={() =>
                    this.props.getPrevElement(this.props.element.atomic_number)
                  }
                >
                  <img src={LeftImg} alt="" />
                </button>
              ) : null}
              {this.props.element.atomic_number < 117 ? (
                <button
                  onClick={() =>
                    this.props.getNextElement(this.props.element.atomic_number)
                  }
                >
                  <img src={RightImg} alt="" />
                </button>
              ) : null}
            </div>
            <div className="element-divider"></div>
            <div className="element-bottom">
              <ul className="element-left">
                <li>
                  <span>Block</span> {this.props.element.block}
                </li>
                <li>
                  <span>Period</span> {this.props.element.period}
                </li>
                <li>
                  <span>Group</span>
                  {this.props.element.group}
                </li>
                <li>
                  <span>Radioactive</span> {this.props.element.radioactive}
                </li>
                <li>
                  <span>Valency</span> {this.props.element.valency}
                </li>
              </ul>
              <ul className="element-right">
                <li>
                  <span>Type</span> {type}
                </li>
                <li>
                  <span>Phase</span> {this.props.element.phase}
                </li>
                <li>
                  <span>Electronegativity</span>
                  {this.props.element.electronegativity}
                </li>
                <li>
                  <span>No of Isotrops</span> {this.props.element.isotrops}
                </li>
              </ul>
            </div>
            <div className="element-divider"></div>
            <div className="element-ec">
              <div className="element-heading">Electronic Configuration</div>
              <div>{this.props.element.electronic_configuration}</div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    element: state.table.element,
    err: state.table.error,
    errMsg: state.table.errMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPrevElement: (no) => {
      console.log(no);
      return dispatch(actions.showElement({ atomicNumber: no - 1 }));
    },
    getNextElement: (no) =>
      dispatch(actions.showElement({ atomicNumber: no + 1 })),
    removeElement: () => dispatch(actions.removeElement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ElementDetail);
