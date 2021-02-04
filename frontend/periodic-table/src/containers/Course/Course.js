import React, { Component } from "react";

import Chapter from "../../components/chapter/Chapter";
import "./Course.css";
class Course extends Component {
  state = {
    chapters: [
      {
        id: 1,
        name: "Evolution",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#EC475A",
      },
      {
        id: 2,
        name: "Overview",
        topics: 5,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#F47C7C",
      },
      {
        id: 3,
        name: "How To Learn",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#ED1C24",
      },
      {
        id: 4,
        name: "Mnemonics",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Will help you in learning positions of element in eficient way",
        color: "#8f72ff",
      },
      {
        id: 5,
        name: "Mnemonics",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Will help you in learning positions of element in eficient way",
        color: "#8f72ff",
      },
      {
        id: 6,
        name: "Classification",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#EC475A",
      },
      {
        id: 7,
        name: "Electronic Configuration",
        topics: 5,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#F47C7C",
      },
      {
        id: 8,
        name: "Properties",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Get ready to learn about Evolution of periodic table.",
        color: "#ED1C24",
      },
      {
        id: 9,
        name: "Trends",
        topics: 9,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Will help you in learning positions of element in eficient way",
        color: "#8f72ff",
      },
      {
        id: 10,
        name: "Exceptions",
        topics: 8,
        topic_list: [
          "topic 1",
          "some thing ",
          "some value",
          "some interesting topic",
        ],
        about: "Will help you in learning positions of element in eficient way",
        color: "#8f72ff",
      },
    ],
    current_chapter: 2,
  };
  render() {
    const chapters = this.state.chapters.map((chapter) => {
      return (
        <Chapter
          color={chapter.color}
          name={chapter.name}
          topic_list={chapter.topic_list}
          current_chapter={this.state.current_chapter}
          key={chapter.id}
          id={chapter.id}
          topics={chapter.topics}
        />
      );
    });
    return (
      <div className="chapters">
        <h1 style={{ marginBottom: "20px" }}>Chapters</h1>
        <div className="structure">{chapters}</div>
      </div>
    );
  }
}
export default Course;
