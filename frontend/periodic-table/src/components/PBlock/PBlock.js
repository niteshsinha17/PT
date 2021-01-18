import React from "react";
import Element from "../Element/Element";

const pBlock = (props) => {
  // console.log(props.elements);
  const get_groups = (elements) => {
    let i = props.start;
    let groups = elements.groups.map((group) => {
      i += 1;
      return (
        <div key={"g-" + i} className="group">
          {group.map((element) => {
            return <Element group={i} block="p" key={element.number} el={element} />;
          })}
        </div>
      );
    });
    return groups;
  };
  return <div className="p-block">{get_groups(props.elements)}</div>;
};

export default pBlock;
