import React from "react";
import Header from "../../components/Header/Header";
import Overview from "../Overview/Overview";
import Course from "../Course/Course";
import StudyMaterial from "../StudyMaterial/StudyMaterial";
import {Route} from "react-router-dom";

const website = (props) => {
  return (
    <div>
      <Header></Header>       {/*//Do you know why to use of switch? */}
      <Route path="/" exact component={Overview} />
      <Route path="/course" exact component={Course} />
      <Route path="/study-material" exact component={StudyMaterial} />
    </div>
  );
};

export default website;
