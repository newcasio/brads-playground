import React from "react";

import "./Nav.css";

function Side(props) {
  let sideClass = "side";
  if (props.show) {
    sideClass = "side showSide";
  }
  return (
    <nav className={sideClass}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Google Map</a>
        </li>
        <li>
          <a href="/">CSS grid</a>
        </li>
      </ul>
    </nav>
  );
}

export default Side;
