import React, { Component } from "react";

import keystrokeCounter from "./keystrokeCounter";

class KeyStroke extends Component {
  render() {
    const { counter, strokes } = this.props;
    return (
      <div>
        <h4>Keystroke counter: {strokes}</h4>
        <form>
          <label>Type: </label>
          <textarea onKeyUp={counter} />
        </form>
      </div>
    );
  }
}

export default keystrokeCounter(KeyStroke);
