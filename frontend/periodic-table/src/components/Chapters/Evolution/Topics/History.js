import React from "react";
import * as comp from "../../utils/utils";

const history = (props) => {
  return (
    <div>
      <comp.Para>
        In the universe 118 elements have been discovered till today. Each of
        these elements possesses different properties. It is difficult to
        understand and use the properties of each element at a time. Hence,
        attempts were made to discover ways to learn the properties of elements
        in systematic order. Placing similar groups and species together is
        known as Classification. Classification is needed to easily understand
        the properties of different elements in a periodic table. Elements with
        similar properties are placed in one group to understand them easily.
      </comp.Para>
      <comp.Heading>Earlier Attempts to Classify Elements</comp.Heading>
      <comp.List arrow={true}>
        <li>Prout’s Hypothesis (1815) </li>
        <li> Dobereiner’s Triads (1829)</li>
        <li>Newland’s Octaves (1864) (Law of Octaves)</li>
        <li>Mendeleev’s Periodic Table (1869) </li>
        <li>Modern Periodic Table</li>
      </comp.List>

      <comp.Note>
        We are going to study all these attemps in the next lectures
      </comp.Note>
    </div>
  );
};

export default history;
