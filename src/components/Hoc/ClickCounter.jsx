import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

import "./hoc.css";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "My own state",
      count: 33
    };
  }

  render() {
    const { name, counter, currentCount } = this.props;
    return (
      <div className="click__button ">
        <button
          onClick={counter}
          className="clickCounterClassForEnzymeTestingOnly"
        >
          {name} clicked {currentCount} times
        </button>
        <p>{this.state.text}</p>
        <p>Count in my state is {this.state.count}</p>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 1);
