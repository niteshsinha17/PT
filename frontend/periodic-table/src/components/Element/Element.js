import React, { useContext } from "react";
import { connect } from "react-redux";
import "./Element.css";
import Lock from "../UI/Lock/Lock";
import * as actions from ".././../store/actions/index";

const Element = (props) => {

  let classes = ["element"];
  if (props.selected === null) {
  } else if (props.selectionType === "period") {
    if (props.selected !== props.el.period) {
      classes.push("disable");
    }
  } else if (props.selectionType === "group") {
    if (props.selected !== props.group) {
      classes.push("disable");
    }
  } else if (
    props.selected === "s" ||
    props.selected === "p" ||
    props.selected === "d" ||
    props.selected === "f"
  ) {
    if (props.selected !== props.el.block) {
      classes.push("disable");
    }
  } else if (props.selectionType === "series") {
    if (props.series !== props.selected) {
      classes.push("disable");
    }
  }  else if (props.selected === "metal") {
    if (!props.el.metal) {
      classes.push("disable");
    }
  } else if (props.selected === "non-metal") {
    if (!props.el.non_metal) {
      classes.push("disable");
    }
  } else if (props.selected === "metalloid") {
    if (!props.el.metalloid) {
      classes.push("disable");
    }
  }
  classes.push(props.el.color.slice(1));
  if (props.selectedElement === props.el.id) {
    classes.push("selected");
  }
  return (
    <div
      onClick={() => props.showElement(props.el.atomic_number)}
      className={classes.join(" ")}
    >
      {props.el.atomic_number > 21 && props.authenticated === false ? (
        <Lock />
      ) : null}

      <div className="atomic-no">{props.el.atomic_number}</div>
      <div className="symbol">{props.el.symbol}</div>
      <div className="name">{props.el.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.isAuthenticated,
    selectedElement: state.table.selectedElement,
    selected:state.table.selected,
    selectionType:state.table.selectionType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showElement: (no) => dispatch(actions.showElement({ atomicNumber: no })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Element);
