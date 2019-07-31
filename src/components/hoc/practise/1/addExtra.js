import React, { Component } from "react";

const addExtra = WrappedComponent => {
  class AddExtra extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentNumber: 0
      };
    }
    incrementer = () => {
      return this.setState({
        currentNumber: this.state.currentNumber + 2
      });
    };

    render() {
      return (
        <WrappedComponent
          adder={this.incrementer}
          number={this.state.currentNumber}
        />
      );
    }
  }
  return AddExtra;
};

export default addExtra;
