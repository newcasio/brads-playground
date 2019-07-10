import React from "react";

import Name from "./Name";
import Music from "./Music";

import "./home.css";

function Home() {
  return (
    <div className="home__wrapper">
      <Name />
      <Music />
    </div>
  );
}

export default Home;
