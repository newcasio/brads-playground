import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

import "./hoc.css";

class ClickCounter extends Component {
  render() {
    const { name, counter, currentCount } = this.props;
    return (
      <div className="click__button">
        <button onClick={counter}>
          {name} clicked {currentCount} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 1);
