import React from "react";
import * as comp from "../../utils/utils";

const Dobereiner = (props) => {
  return (
    <div>
      <comp.Heading>Prout’s Hypothesis </comp.Heading>
      <comp.Para>
        According to this theory, hydrogen atom was considered as the
        fundamental unit from which all other atoms were made. It is also known
        as unitary theory.
      </comp.Para>
      <comp.Heading>Dobereiner's Traids</comp.Heading>
      <comp.Para>
        In 1829, 30 plus elements were known. Dobereiner, a German scientist
        made some groups of three elements each and called them triads.{" "}
      </comp.Para>
      <comp.HeadingList type="positive" heading="Classifications">
        <li>
          He arranged a group of three elements with similar properties in the
          order of increasing atomic masses and called it a triad.
        </li>
        <li>
          He showed that the atomic mass of the middle element is approximately
          the arithmetic mean of the other two.{" "}
        </li>
        <li>
          But, Dobereiner could identify only the following three triads from
          the elements known at that time.
        </li>
      </comp.HeadingList>
      <comp.HeadingList heading="Limitations" type="danger">
        <li>
          Dobereneir’s idea of classification of elements into triads did not
          receive wide acceptance as he could arrange only 9 elements in triad
          form.
        </li>
      </comp.HeadingList>
    </div>
  );
};

export default Dobereiner;
