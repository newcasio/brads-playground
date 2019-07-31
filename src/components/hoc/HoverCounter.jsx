import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="click__button">
        <h2 onMouseOver={this.props.counter}>
          {this.props.name} hovered {this.props.currentCount} times
        </h2>
        <p> my id from prop: {id}</p>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter, 5);
