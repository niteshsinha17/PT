import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Question from "./Question";
import Option from "./Options";

class Quize extends Component {
  render() {
    let show;
    let q = this.props.questions.filter((question) => {
      return question.id === this.props.current_question;
    });
    q = q[0];
    if (this.props.result) {
    } else {
      show = (
        <div className="kbc">
          <div className="kbc-controls">
            <button>Prev</button>
            <div className="kbc-info">1/4</div>
            <button>Next</button>
          </div>
          <div className="kbc-points">
            <b>Points:</b> 5
          </div>
          <Question question={q.question} />
          <div className="kbc-options">
            {q.options.map((option) => {
              return (
                <Option
                  key={option.id}
                  selected={q.selected}
                  option={option.option}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return <div className="quize">{show}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.quize.questions,
    current_question: state.quize.current_question,
    result: state.quize.result,
  };
};

export default connect(mapStateToProps, null)(Quize);
