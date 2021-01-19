import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ElementDetail.css";

class ElementDetail extends Component {
  constructor(props) {
    super(props);
    this.elementModelRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      var model = ReactDOM.findDOMNode(this.elementModelRef.current);
      if (!this.elementModelRef.current.contains(e.target)) {
        model.classList.add("hide-model");
      }
    });
  }

  componentWillUpdate(oldProps, oldState) {
    console.log("will mount");
    var model = ReactDOM.findDOMNode(this.elementModelRef.current);

    if (model.classList.contains("hide-model")) {
      model.classList.toggle("hide-model");
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // const elementModelRef = useRef(null);
  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     console.log("here");

  //     var model = ReactDOM.findDOMNode(elementModelRef.current);
  //     if (!elementModelRef.current.contains(e.target)) {
  //       model = ReactDOM.findDOMNode(elementModelRef.current);
  //       model.classList.add("hide-model");
  //     }
  //     // if (model.classList.contains("hide-model")) {
  //     // model.classList.toggle("hide-model");
  //     // }
  //   });
  // }, []);

  render() {
    return (
      <div ref={this.elementModelRef} className="element-model">
        <h2>{this.props.element.name}</h2>
      </div>
    );
  }
}
export default ElementDetail;
