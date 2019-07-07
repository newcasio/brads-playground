import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import HomePage from "./components/Home/HomePage";
import MyMap from "./components/Map/MyMap";
import Mosaic from "./components/Grid/Mosaic";
import Side from "./components/Nav/Side";
import Unfocus from "./components/Nav/Unfocus";

import "./App.css";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const sideToggleClickHandler = () => {
    if (sideOpen === true) {
      setSideOpen(false);
    } else {
      setSideOpen(true);
    }
  };

  const unfocusClickHandler = () => {
    setSideOpen(false);
  };

  let unfocus;

  if (sideOpen) {
    unfocus = <Unfocus click={unfocusClickHandler} />;
  }
  return (
    <div className="App">
      <Side show={sideOpen} />
      {unfocus}
      <Router>
        <Nav sideToggleHandler={sideToggleClickHandler} />
        <div style={{ marginTop: "12vh" }}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/map" component={MyMap} />
            <Route path="/css_grid" component={Mosaic} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
