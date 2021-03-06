import React from "react";
import { Link } from "react-router-dom";

import SideToggle from "./SideToggle";
import Logo from "./Logo";

import "./nav.css";

function Nav(props) {
  return (
    <div>
      <nav className="nav__contents">
        <div>
          <SideToggle click={props.sideToggleHandler} />
        </div>
        <Logo className="nav__logo" />
        <div className="space" />
        <ul className="navlinks">
          <Link className="nav__link" to="/animations">
            <li>Animations</li>
          </Link>
          <Link className="nav__link" to="/map">
            <li>Google Maps</li>
          </Link>
          <Link className="nav__link" to="/css_grid">
            <li>CSS grid</li>
          </Link>
          <Link className="nav__link" to="/hoc">
            <li>Higher Order Components</li>
          </Link>
          <Link className="nav__link" to="/node">
            <li>Node</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
