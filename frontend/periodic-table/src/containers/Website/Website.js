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

class Website extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.login();
  }
  render() {
    const formVarient = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -500 },
    };
    return (
      <div>
        <Header></Header> {/*//Do you know why to use of switch? */}
        <Route
          path="/"
          render={() => {
            if (this.props.showLoginForm) {
              return (
                <AnimatePresence>
                  <motion.div
                    className="form"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVarient}
                  >
                    <LoginForm />
                  </motion.div>
                </AnimatePresence>
              );
            } else if (this.props.showRegisterForm) {
              return (
                <AnimatePresence>
                  <motion.div
                    className="form"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -500 }}
                    variants={this.formVarient}
                  >
                    <RegisterForm />
                  </motion.div>
                </AnimatePresence>
              );
            }
          }}
        />
        <Route
          path="/"
          render={() => {
            if (this.props.showBackdrop) {
              return <Backdrop />;
            }
          }}
        />
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
