import { React, Component } from "react";
import "./Controls.css";
import Button from "../Button/Button";
import ControlContext from "../../context/control";
class Controls extends Component {
  state = {
    state_buttons: [
      {
        id: "metal",
        name: "metal",
      },
      {
        id: "non_metal",
        name: "non-metal",
      },
      {
        id: "metaloid",
        name: "metaloid",
      },
      {
        id: "radio_active_element",
        name: "radio_active_element",
      },
    ],
  };

  static contextType = ControlContext;

  getButtons = (name, n) => {
    let buttons = [];
    if (name === "block") {
      let blocks = ["s", "p", "d", "f"];
      blocks.forEach((element) => {
        let classes = ["number-btn"];
        if (this.context.selected === element) {
          classes.push("active-btn");
        }
        buttons.push(
          <Button
            key={element}
            class={classes.join(" ")}
            name={element}
            type="other"
            click={() => this.context.changeState(element)}
          />
        );
      });
      return buttons;
    }
    for (let i = 1; i <= n; i++) {
      let classes = ["number-btn"];

      if (this.context.selected === name && i === this.context.selected_no) {
        classes.push("active-btn");
      }
      buttons.push(
        <Button
          click={() => this.context.change(name, i)}
          key={name + i}
          class={classes.join(" ")}
          name={i}
          type={name}
        />
      );
    }
    if (name === "period") {
      let others = ["Lanthanides", "Actanides"];
      others.forEach((element) => {
        let classes = ["number-btn"];
        if (this.context.selected === element) {
          classes.push("active-btn");
        }
        buttons.push(
          <Button
            key={element}
            class={classes.join(" ")}
            name={element}
            type="other"
            click={() => this.context.changeState(element)}
          />
        );
      });
    }
    return buttons;
  };

  render() {
    let stateButtons = (
      <div className="control-state">
        {this.state.state_buttons.map((button) => {
          let classes = ["state-btn"];
          if (button.name === this.context.selected) {
            classes.push("active-btn");
          }
          return (
            <Button
              click={() => this.context.changeState(button.name)}
              class={classes.join(" ")}
              key={button.id}
              name={button.name}
            />
          );
        })}
      </div>
    );

    let groupButtons = this.getButtons("group", 18);
    let periodButtons = this.getButtons("period", 7);
    let blockButtons = this.getButtons("block", 4);
    return (
      <div className="control-wrapper">
        <div className="control-upper">
          <div>Classifications {stateButtons}</div>
          <Button
            class="state-btn"
            name="Clear Filter"
            click={this.context.clear}
          />
        </div>
        <div className="control-lower">
          <div className="control-section">
            Groups <div>{groupButtons}</div>
          </div>
          <div className="control-section">
            Blocks <div>{blockButtons}</div>
          </div>
          <div className="control-section">
            Period <div>{periodButtons}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
