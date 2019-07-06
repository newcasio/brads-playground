import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import NewPage from "./NewPage";
import Page2 from "./Page2";
import HomePage from "./HomePage";

import Heading from "./components/Heading";
import MyMap from "./components/map/MyMap";
import Mosaic from "./components/Mosaic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/page1" component={NewPage} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
      <Heading />
      <MyMap />
      <Mosaic />
    </div>
  );
}

export default App;
