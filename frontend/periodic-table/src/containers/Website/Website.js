import React from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Course from "../Course/Course";
import StudyMaterial from "../StudyMaterial/StudyMaterial";
import { Route, Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";

class Website extends React.Component {
  componentDidMount() {
    this.props.login();
  }
  render() {
    return (
      <div>
        <Header></Header> {/*//Do you know why to use of switch? */}
        <Route path="/" exact component={Overview} />
        <Route
          path="/course"
          exact
          render={() => {
            console.log(this.props.authenticated);
            if (this.props.authenticated) {
              return <Course />;
            }
            return <Redirect to="/" />;
          }}
        />
        <Route
          path="/study-material"
          exact
          render={() => {
            if (this.props.study_material_access) {
              return <StudyMaterial />;
            }
            return <Redirect to="/" />;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.is_authenticated,
    study_material_access: state.material.is_access,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(actions.checkAuth());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Website);
