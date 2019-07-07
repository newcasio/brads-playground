import React from "react";

import "./mosaic.css";

function Mosaic() {
  return (
    <div className="mosaicWrapper">
      <div className="box box1 ">
        <img src={require("./cat1.jpg")} alt="swimming in money" />
      </div>
      <div className="box box2">
        <img src={require("./cat.png")} alt="samurai cat" />
      </div>
      <div className="box box3">
        <img src={require("./cat1.jpg")} alt="swimming in money" />
      </div>
      <div className="box box4">
        <img src={require("./cat.png")} alt="samurai cat" />
      </div>
      <div className="box box5">
        <img src={require("./cat1.jpg")} alt="swimming in money" />
      </div>
      <div className="box box6">
        <img src={require("./cat.png")} alt="samurai cat" />
      </div>
      <div className="box box7">
        <img src={require("./cat1.jpg")} alt="swimming in money" />
      </div>
      <div className="box box8">
        <img src={require("./cat.png")} alt="samurai cat" />
      </div>
    </div>
  );
}

export default Mosaic;
