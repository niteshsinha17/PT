import React from "module";
import Tick from "../../assests/icons/tick.png";

const topic = (props) => {
  let classes = ["sidebar-item"];
  if (props.id === props.current_topic) {
    classes.push("topic-active");
  }
  let tick =
    props.id < props.current_topic ? <img src={Tick} alt="done" /> : null;
  return (
    <li className={classes.join(" ")}>
      <div className="covered">{tick}</div>
      <div className="sidebar-topic-name">{props.name}</div>
    </li>
  );
};

export default topic;
