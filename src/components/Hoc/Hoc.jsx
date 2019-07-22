import React, { Component } from "react";

import ClickCounter from "./ClickCounter.jsx";
import HoverCounter from "./HoverCounter.jsx";

import "./hoc.css";

class Hoc extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={require("./logo.jpeg")} alt="losadfgo" />

        <ClickCounter name="Brad" />
        <HoverCounter name="Gav" id="100" />
      </div>
    );
  }
}

export default Hoc;
