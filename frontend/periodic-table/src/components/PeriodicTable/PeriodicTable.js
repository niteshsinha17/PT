import React, { Component } from "react";
import "./PeriodicTable.css";
import Controls from "../Controls/Controls";
import SerialNo from "../SerailNo/SerialNo";
import { s_block, p_block, d_block, f_block } from "../../Data/elements";
import SBlock from "../SBlock/SBlock";
import DBlock from "../DBlock/DBlock";
import PBlock from "../PBlock/PBlock";
import ControlContext from "../../context/control";

class PeriodicTable extends Component {
  state = {
    s_block: s_block,
    p_block: p_block,
    d_block: d_block,
    f_block: f_block,
    selected: null,
    selected_no: 0,
    selected_block: null,
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
  render() {
    return (
      <div className="App">
        <ControlContext.Provider
          value={{
            selected: this.state.selected,
            selected_no: this.state.selected_no,
            changeState: this.changeState,
            change: this.changeSelected,
            clear: this.clearSelected,
          }}
        >
          <Controls />
          <div className="table-wrapper">
            <SerialNo no={7} _for="period" direction="vertical" />
            <SerialNo no={18} _for="group" direction="horizontal" />
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
        </ControlContext.Provider>
      </div>
    );
  }
}

export default PeriodicTable;
