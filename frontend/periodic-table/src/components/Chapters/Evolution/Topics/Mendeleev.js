import React from "react";
import * as comp from "../../utils/utils";

const mendeleev = (props) => {
  return (
    <div>
      <comp.Heading>Mendeleev’s Periodic Table (1869) </comp.Heading>
      <comp.Para>
        Dmitry Mendeleev a Russian chemist in 1869 gave Mendeleev’s Periodic
        Table. <br />
        Till then 63 elements were known. <br />
        Mendeleev arranged elements in increasing order of their atomic mass. He
        tried to put elements with similar properties in a group. <br />
        Due to this we find empty boxes in his table. <br />
        The horizontal rows present in the periodic table are called periods .{" "}
        <br />
        The vertical columns present in it are called groups. There was total
        eight groups in Mendeleev’s periodic table, I to VIII. <br />
        Properties of elements in a particular period show regular gradation
        (i.e., increase or decrease) from left to right. <br />
        Groups I to VII are subdivided into A and B subgroups. Groups VIII don’t
        have any subgroups. <br />
        All the elements in a particular group have similar properties. They
        show regular gradation in their physical properties and chemical
        reactivities.
      </comp.Para>
      <comp.HeadingList
        type="positive"
        heading="Merits of Mendeleev's Periodic Table"
      >
        <li>
          Earlier 63 elements were known. Mendeleev discovered Prediction of new
          elements
        </li>
        <li>
          <b>For example, he proposed the existence of some unknown elements</b>
        </li>
        <li>1. Eka – boron → Scandium</li>
        <li>2. Eka – aluminium → Gallium</li>
        <li>3. Eka – silicon → Germanium</li>
        <li>
          Scandium, Gallium and Germanium were discovered later and their
          properties matched very closely with the predicted properties of Eka -
          boron, Eka – aluminium and Eka – silicon respectively.
        </li>
      </comp.HeadingList>
      <comp.HeadingList heading="Limitations" type="danger">
        <li>
          <b>Position of hydrogen:</b> Hydrogen resembles both, the alkali
          metals (IA) and the halogens (VIIA) in properties, so, Mendeleev could
          not justify its position.
        </li>
        <li>
          <b>Position of isotopes:</b> Atomic weight of isotopes differ, but
          they were not placed in different positions in Mendeleev’s periodic
          table.
        </li>
        <li>
          <b>Anomalous pairs of elements:</b> Cobalt (Co) has higher atomic
          weights but was placed before Nickel (Ni) in the periodic table.
        </li>
        <li>
          <b>Placement of like elements in different groups:</b> Platinum (Pt)
          and Gold (Au) have similar properties but were placed in different
          groups.
        </li>
        <li>
          <b>Cause of periodicity:</b> He could not explain the cause of
          periodicity among the elements.
        </li>
        <li>
          <b>Position of Lanthanoids and actinoids:</b> Lanthanoids and
          actinoids were not placed in the main Periodic Table.
        </li>
      </comp.HeadingList>
    </div>
  );
};

export default mendeleev;
