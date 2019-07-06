import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <h3>I am the nav</h3>
        <ul className="navlinks">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/page1">
            <li>New Page</li>
          </Link>
          <Link to="/page2">
            <li>Second Page</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
