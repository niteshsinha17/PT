import React from "react";
import * as comp from "../../utils/utils";

const newLand = (props) => {
  return (
    <div>
      <comp.Heading> Newland’s Octaves (1864) (Law of Octaves) </comp.Heading>
      <comp.Para>
        Newland an English chemist in 1866 gave Law of Octaves. <br /> Till then
        56 elements were known. Law of Octaves says that “If elements are
        arranged by the increasing order of their atomic masses, property of
        every eighth element (starting from first element) repeats”.
      </comp.Para>
      <comp.HeadingList type="positive" heading="Classifications">
        <li>
          It contained the elements starting from hydrogen and ends at thorium.
        </li>
        <li>
          Properties of every eighth element follow of that of first element.
        </li>
        <li>
          Newlands compared these octaves to the series of eight notes of a
          musical scale.
        </li>
      </comp.HeadingList>
      <comp.HeadingList heading="Limitations" type="danger">
        <li>
          Similarity in properties of elements as per the law was seen up to
          calcium only.
        </li>
        <li>
          Only 56 elements known that time were talked about. At that time
          around 1 element was discovered every year. The elements to be
          discovered were not considered.
        </li>
        <li>
          At many places, 2 elements were placed in a single slot (ex Co &Ni)
        </li>
        <li>
          Placing of iron far away from cobalt and nickel, which have similar
          properties as iron, could also not be explained.
        </li>
        <li>
          When noble gas elements were discovered at a later stage, their
          inclusion in these octaves disturbed the entire arrangement.
        </li>
      </comp.HeadingList>
    </div>
  );
};

export default newLand;
