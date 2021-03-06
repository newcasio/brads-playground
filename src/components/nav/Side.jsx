import React from "react";

import "./nav.css";

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
        <li>
          <a href="/node">Node</a>
        </li>
      </ul>
    </nav>
  );
}

export default Side;
