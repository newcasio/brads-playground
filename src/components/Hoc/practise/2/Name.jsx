import React, { Component } from "react";

import saveName from "./saveName";

class Name extends Component {
  render() {
    const { change, name } = this.props;
    return (
      <div>
        <form>
          <label>name:</label>
          <input type="text" onChange={change} />
        </form>
        <h3>Your name is {name}</h3>
      </div>
    );
  }
}

export default saveName(Name);
