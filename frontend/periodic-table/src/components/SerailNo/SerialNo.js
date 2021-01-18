import { React } from "react";
import "./SerialNo.css";
import Block from "./Block";

const serialNo = (props) => {
  let blocks = [];
  let classes = ["serial-no", props.direction];
  for (let i = 1; i <= props.no; i++) {
    const block = <Block key={props._for + i} _for={props._for} no={i} />;
    blocks.push(block);
  }

  return <div className={classes.join(" ")}>{blocks}</div>;
};

export default serialNo;
