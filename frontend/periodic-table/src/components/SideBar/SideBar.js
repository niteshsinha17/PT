import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./Topic";
import Cross from "../../assests/icons/cross.png";
class SideBar extends Component {
  
  render() {
    const topics = this.props.topics.map((topic) => {
      return (
        <Topic
          key={topic.id}
          id={topic.id}
          name={topic.name}
          current_topic={this.props.current_topic}
        />
      );
    });

    return (
      <div className={"sidebar"}>
        <div className="cross-bar">
          <button onClick={()=>this.props.click()}>
            <img src={Cross} alt="" />
          </button>
        </div>
        <ul className="sidebar-list">{topics}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.course.topics,
    current_topic: state.course.current_topic,
  };
};

export default connect(mapStateToProps, null)(SideBar);
