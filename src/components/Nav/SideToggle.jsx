import React from "react";

import "./Nav.css";

function SideToggle(props) {
  return (
    <button className="hamburger" onClick={props.click}>
      <img src={require("./hamburger.png")} alt="cheeseburger" />
    </button>
  );
}

export default SideToggle;
