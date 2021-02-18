import React from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Course from "../Course/Course";
import StudyMaterial from "../StudyMaterial/StudyMaterial";
import { Route, Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";
import Board from "../../components/Board/Board";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Loader from "../../components/UI/Loader/Loader";
import LeftSlider from "../../components/Sliders/LeftSlider";
import RightSlider from "../../components/Sliders/RightSlider";
import BottomSlide from "../../components/Sliders/BottomSlide";
class Website extends React.Component {
  state = {
    loading: true,
  };

  hideLoader = () => {
    this.setState({ loading: false });
  };
  componentDidMount() {
    this.props.login();
    // setTimeout(() => {
    //   this.hideLoader();
    // }, 2000);
  }
  render() {
    const formVarient = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -500 },
      exit: { opacity: 0, y: -500 },
    };
    return (
      <div>
        <Header></Header>
        {/* <Route
          path="/"
          render={() => {
            if (this.state.loading) {
              return <Loader />;
            }
          }}
        /> */}
        <Route
          path="/"
          render={() => {
            if (this.props.showBackdrop) {
              return <Backdrop />;
            }
          }}
        />
        <Route
          path="/"
          exact
          render={() => {
            return <LeftSlider />;
          }}
        />

        <Route
          path="/"
          exact
          render={() => {
            return <RightSlider />;
          }}
        />
        <Route
          path="/course"
          exact
          render={() => {
            return <Course />;
          }}
        />
        <Route path="/" exact component={Overview} />
        <Route path="/course/:chapter/:topic/" component={Board} />
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
    authenticated: state.auth.isAuthenticated,
    study_material_access: state.material.is_access,
    showLoginForm: state.auth.showLoginForm,
    showRegisterForm: state.auth.showRegisterForm,
    showBackdrop: state.auth.showBackdrop,
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
