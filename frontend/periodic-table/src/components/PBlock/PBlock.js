import React from "react";
import Element from "../Element/Element";

const pBlock = (props) => {
  // console.log(props.elements);
  const get_groups = (elements) => {
    let i = props.start;
    let groups = elements.map((group) => {
      i += 1;
      return (
        <div key={"pg-" + i} className="group">
          {group.elements.map((element) => {
            return <Element group={element.group} block="p" key={element.id} el={element} />;
          })}
        </div>
      );
    });
    return groups;
  };
  return <div className="p-block">{get_groups(props.elements)}</div>;
};

export default pBlock;
