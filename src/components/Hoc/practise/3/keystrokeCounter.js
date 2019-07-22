import React, { Component } from "react";

const keyStrokeCounter = WrapppedComponent => {
  class KeyStrokeCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strokes: 0
      };
      this.count = this.count.bind(this);
    }

    count() {
      this.setState({
        strokes: this.state.strokes + 1
      });
    }
    render() {
      return (
        <WrapppedComponent counter={this.count} strokes={this.state.strokes} />
      );
    }
  }
  return KeyStrokeCounter;
};

export default keyStrokeCounter;
