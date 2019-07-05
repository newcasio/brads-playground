import React from "react";

import Heading from "./components/Heading";
import MyMap from "./components/map/MyMap";
import Mosaic from "./components/Mosaic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <MyMap />
      <Mosaic />
    </div>
  );
}

export default App;
