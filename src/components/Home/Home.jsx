import React from "react";

import Name from "./Name";
import Effects from "./Effects";
import Music from "./Music";

import "./home.css";

function Home() {
  return (
    <div className="home__wrapper">
      <Name />
      <Music />
      <Effects />
    </div>
  );
}

export default Home;
