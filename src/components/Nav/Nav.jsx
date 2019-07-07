import React from "react";
import { Link } from "react-router-dom";

import SideToggle from "./SideToggle";

import "./Nav.css";

function Nav(props) {
  return (
    <div>
      <nav className="nav__contents">
        <div>
          <SideToggle click={props.sideToggleHandler} />
        </div>
        <div className="nav__logo">Brad's Playground</div>
        <div className="space" />
        <ul className="navlinks">
          <Link className="nav__link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav__link" to="/map">
            <li>Google Maps</li>
          </Link>
          <Link className="nav__link" to="/css_grid">
            <li>CSS grid</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
