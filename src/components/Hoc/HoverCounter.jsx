import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.counter}>
          {this.props.name} hovered {this.props.currentCount} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter, 5);
