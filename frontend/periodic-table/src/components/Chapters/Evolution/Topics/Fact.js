import React from "react";
import * as comp from "../../utils/utils";

const facts = (props) => {
  return (
    <div>
      <comp.HeadingBox type="fact" heading="Facts">
        <b>Dmitri Mendeleev</b>, a Russian chemist and inventor, is considered
        the "father" of the periodic table. The table is also known as{" "}
        <b>Mendeleev Periodic Table</b>. The Periodic Table consists of names,
        symbols, atomic numbers and atomic weight of the element. The table is
        arranged in two manner that, elements within each vertical column are
        similar or have something in common are called Groups where elements in
        one period have same number of electron shells forms. Metals reside on
        the left side of the table, while non-metals reside on the right. There
        are <b>118 confirmed elements</b> in the periodic table. Among those, 90
        elements can be found in nature, others are man-made.
      </comp.HeadingBox>
      <h1>Game time Hurraayyy!</h1>
    </div>
  );
};

export default facts;
