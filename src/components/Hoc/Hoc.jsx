import React, { Component } from "react";

import ClickCounter from "./ClickCounter.jsx";
import HoverCounter from "./HoverCounter.jsx";
import Logo from "./Logo.jsx";

import "./hoc.css";

class Hoc extends Component {
  render() {
    return (
      <div>
        <Logo />

        <ClickCounter name="Brad" />
        <HoverCounter name="Gav" id="100" />
      </div>
    );
  }
}

export default Hoc;
