import React, { Component } from "react";
import "./PeriodicTable.css";
import Controls from "../../components/Controls/Controls";
import SBlock from "../../components/SBlock/SBlock";
import DBlock from "../../components/DBlock/DBlock";
import PBlock from "../../components/PBlock/PBlock";
import FBlock from "../../components/FBlock/FBlock";
import ControlContext from "../../context/control";
import ElementDetail from "../../components/ElementDetail/ElementDetail";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class PeriodicTable extends Component {
  state = {
    selected: null,
    selected_no: 0,
    selected_block: null,
  };

  componentDidMount() {
    const { loadTable, loaded } = this.props;
    loadTable(loaded);
  }

  changeSelected = (selected, value) => {
    console.log(selected, value);
    this.setState({
      selected: selected,
      selected_no: value,
    });
  };

  changeType = (type) => {
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
    let elementDetail = "";
    let table = <div>Loading</div>;
    if (this.props.loaded === true) {
      table = (
        <div className="table-wrapper">
          <div className="table">
            <div className="block">
              <SBlock start={0} elements={this.props.s_block} />
            </div>
            <div className="block">
              <DBlock start={2} elements={this.props.d_block} />
            </div>
            <div className="block">
              <PBlock start={12} elements={this.props.p_block} />
            </div>
          </div>
          <FBlock start={-2} elements={this.props.f_block} />
        </div>
      );
    }
    return (
      <div>
        <ControlContext.Provider
          value={{
            selected: this.state.selected,
            selected_no: this.state.selected_no,
            changeState: this.changeType,
            change: this.changeSelected,
            clear: this.clearSelected,
            showElement: this.showElement,
            hideElement: this.hideElement,
          }}
        >
          {this.props.controls ? <Controls /> : null}
          {table}
          {this.props.selectedElement && <ElementDetail />}
        </ControlContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loaded: state.table.loaded,
    s_block: state.table.s_block,
    p_block: state.table.p_block,
    d_block: state.table.d_block,
    f_block: state.table.f_block,
    selectedElement: state.table.selectedElement,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTable: (loaded) => dispatch(actions.tableLoad({ loaded: loaded })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodicTable);
