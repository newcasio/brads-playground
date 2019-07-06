import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul className="navlinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/map">
            <li>Google Maps</li>
          </Link>
          <Link to="/css_grid">
            <li>CSS grid</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
