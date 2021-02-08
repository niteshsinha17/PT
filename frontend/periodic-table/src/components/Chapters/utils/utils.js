import React from "react";

export const Heading = (props) => <h2 className="heading">{props.children}</h2>;

export const SubHeading = (props) => (
  <h2 className="sub-heading">{props.children}</h2>
);

export const Para = (props) => <p className="para">{props.children}</p>;

export const List = (props) => {
  let classes = ["list"];
  if (props.arrow) {
    classes.push("arrow-list");
  }
  return <ul className={classes.join(" ")}>{props.children}</ul>;
};

export const Note = (props) => <div className="note">{props.children}</div>;

export const HeadingList = (props) => {
  return (
    <div className={"heading-list " + props.type}>
      <div className="heading-list-heading">{props.heading}</div>
      <ul className="list">{props.children}</ul>
    </div>
  );
};

export const HeadingBox = (props) => {
  return (
    <div className={"heading-box " + props.type}>
      <div className="heading-box-heading">{props.heading}</div>
      <p>{props.children}</p>
    </div>
  );
};
