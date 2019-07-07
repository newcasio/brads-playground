import React from "react";

import "./Nav.css";

function SideToggle(props) {
  return (
    <button className="hamburger" onClick={props.click}>
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
    </button>
  );
}

export default SideToggle;
