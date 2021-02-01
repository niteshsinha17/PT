import React from "react";
import Element from "../Element/Element";

const fBlock = (props) => {
  // console.log(props.elements);
  const get_groups = (elements) => {
    let i = props.start;
    let groups = elements.map((group) => {
      i += 1;
      return (
        <div key={"fg-" + i} className="group f-group">
          {group.elements.map((element) => {
            return <Element group={element.group} block="d" key={element.id} el={element} />;
          })}
        </div>
      );
    });
    return groups;
  };
  return <div className="f-block">{get_groups(props.elements)}</div>;
};

export default fBlock;
