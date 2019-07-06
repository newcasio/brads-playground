import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Heading from "./components/Heading";
import HomePage from "./components/Home/HomePage";
import MyMap from "./components/Map/MyMap";
import Mosaic from "./components/Grid/Mosaic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" component={MyMap} />
          <Route path="/css_grid" component={Mosaic} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
