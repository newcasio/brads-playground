import React from "react";

import "./nav.css";

function SideToggle(props) {
  return (
    <button className="hamburger" onClick={props.click}>
      <img src={require("./hamburger.png")} alt="cheeseburger" />
    </button>
  );
}

export default SideToggle;
