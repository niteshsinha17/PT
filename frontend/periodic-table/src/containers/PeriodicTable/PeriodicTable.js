import React, { Component } from "react";
import "./PeriodicTable.css";
import Controls from "../../components/Controls/Controls";
// import SerialNo from "../SerailNo/SerialNo";
import { s_block, p_block, d_block, f_block } from "../../Data/elements";
import SBlock from "../../components/SBlock/SBlock";
import DBlock from "../../components/DBlock/DBlock";
import PBlock from "../../components/PBlock/PBlock";
import ControlContext from "../../context/control";
import ElementDetail from "../../components/ElementDetail/ElementDetail";

class PeriodicTable extends Component {
  state = {
    s_block: s_block,
    p_block: p_block,
    d_block: d_block,
    f_block: f_block,
    selected: null,
    selected_no: 0,
    selected_block: null,
    selectedElement: null,
  };

  changeSelected = (selected, value) => {
    console.log(selected, value);
    this.setState({
      selected: selected,
      selected_no: value,
    });
  };

  changeState = (type) => {
    this.setState({
      selected: type,
    });
  };

  clearSelected = () => {
    this.setState({
      selected: null,
      selected_no: 0,
      selected_block: null,
    });
  };
  showElement = (event, element) => {
    event.stopPropagation();
    this.setState({ selectedElement: element });
  };

  hideElement = () => {
    console.log("now");
    this.setState({ selectedElement: null });
  };
  render() {
    let elementDetail = "";
    if (this.state.selectedElement) {
      elementDetail = <ElementDetail element={this.state.selectedElement} />;
    }
    return (
      <div>
        <ControlContext.Provider
          value={{
            selected: this.state.selected,
            selected_no: this.state.selected_no,
            changeState: this.changeState,
            change: this.changeSelected,
            clear: this.clearSelected,
            showElement: this.showElement,
            hideElement: this.hideElement,
          }}
        >
          <Controls />
          <div className="table-wrapper">
            {/* <SerialNo no={7} _for="period" direction="vertical" />
            <SerialNo no={18} _for="group" direction="horizontal" /> */}
            <div className="table">
              <div className="block">
                <SBlock start={0} elements={this.state.s_block} />
              </div>
              <div className="block">
                <DBlock start={2} elements={this.state.d_block} />
              </div>
              <div className="block">
                <PBlock start={12} elements={this.state.p_block} />
              </div>
            </div>
          </div>
          {elementDetail}
        </ControlContext.Provider>
      </div>
    );
  }
}

export default PeriodicTable;
