import React from "react";
import Element from "../Element/Element";

const dBlock = (props) => {
  // console.log(props.elements);
  const get_groups = (elements) => {
    let i = props.start;
    let groups = elements.map((group) => {
      i += 1;
      return (
        <div key={"dg-" + i} className="group">
          {group.elements.map((element) => {
            return <Element group={element.group} key={element.id} el={element} />;
          })}
        </div>
      );
    });
    return groups;
  };
  return <div className="d-block">{get_groups(props.elements)}</div>;
};

export default dBlock;
