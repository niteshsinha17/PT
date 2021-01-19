import React, { useContext } from "react";
import "./Element.css";
import ControlContext from "../../context/control";

const Element = (props) => {
  const controlContext = useContext(ControlContext);
  let classes = ["element"];
  if (controlContext.selected === null) {
  } else if (controlContext.selected === "period") {
    if (controlContext.selected_no !== props.el.period) {
      classes.push("disable");
    }
  } else if (controlContext.selected === "group") {
    if (controlContext.selected_no !== props.group) {
      classes.push("disable");
    }
  } else if (
    controlContext.selected === "s" ||
    controlContext.selected === "p" ||
    controlContext.selected === "d" ||
    controlContext.selected === "f"
  ) {
    if (controlContext.selected !== props.block) {
      classes.push("disable");
    }
  } else if (
    controlContext.selected === "lanthanide" ||
    controlContext.selected === "actanide"
  ) {
  } else if (
    controlContext.selected === "metal" ||
    controlContext.selected === "non_metal"
  ) {
  }

  return (
    <div onClick={(event)=>controlContext.showElement(event,props.el)} className={classes.join(" ")}>
      <div className="atomic-no">{props.el.number}</div>
      <div className="symbol">{props.el.symbol}</div>
      <div className="name">{props.el.name}</div>
    </div>
  );
};

export default Element;
