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
          <a href="/animations">Animations</a>
        </li>
        <li>
          <a href="/map">Google Map</a>
        </li>
        <li>
          <a href="/css_grid">CSS grid</a>
        </li>
        <li>
          <a href="/hoc">Higher order components</a>
        </li>
      </ul>
    </nav>
  );
}

export default Side;
