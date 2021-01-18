import { React } from "react";
import "./SerialNo.css";

const block = (props) => {
  let classes = ["sn_block", "b_"+props._for];
  return <div className={classes.join(" ")}>{props.no}</div>;
};

export default block;
