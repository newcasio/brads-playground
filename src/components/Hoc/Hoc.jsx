import React, { Component } from "react";

import ClickCounter from "./ClickCounter.jsx";
import HoverCounter from "./HoverCounter.jsx";

import "./hoc.css";

class Hoc extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default Hoc;
