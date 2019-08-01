import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Animation from "./components/animation/Animation";
import MyMap from "./components/map/MyMap";
import Mosaic from "./components/grid/Mosaic";
import Hoc from "./components/hoc/Hoc";
import Node from "./components/node/node";
import Side from "./components/nav/Side";
import Unfocus from "./components/nav/Unfocus";

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
            <Route path="/" exact component={Home} />
            <Route path="/animations" exact component={Animation} />
            <Route path="/map" component={MyMap} />
            <Route path="/css_grid" component={Mosaic} />
            <Route path="/hoc" component={Hoc} />
            <Route path="/node" component={Node} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
