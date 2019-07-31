import React from "react";

import addExtra from "./addExtra.js";

class Number extends React.Component {
  render() {
    const { adder, number } = this.props;

    return (
      <div>
        <button onClick={adder}>This button: {number}</button>
      </div>
    );
  }
}

export default addExtra(Number);
