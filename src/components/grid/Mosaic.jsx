import React from "react";

import "./mosaic.css";

function Mosaic() {
  return (
    <div className="mosaicWrapper" data-test="grid">
      <div className="box box1 ">
        <img
          data-test="testImage"
          src={require("./cat1.jpg")}
          alt="swimming in money"
        />
      </div>
      <div className="box box2">
        <img
          data-test="testImage"
          src={require("./cat.png")}
          alt="samurai cat "
        />
      </div>
      <div className="box box3">
        <img
          data-test="testImage"
          src={require("./cat1.jpg")}
          alt="swimming in money"
        />
      </div>
      <div className="box box4">
        <img
          data-test="testImage"
          src={require("./cat.png")}
          alt="samurai cat"
        />
      </div>
      <div className="box box5">
        <img
          data-test="testImage"
          src={require("./cat1.jpg")}
          alt="swimming in money"
        />
      </div>
      <div className="box box6">
        <img
          data-test="testImage"
          src={require("./cat.png")}
          alt="samurai cat"
        />
      </div>
      <div className="box box7">
        <img
          data-test="testImage"
          src={require("./cat1.jpg")}
          alt="swimming in money"
        />
      </div>
      <div className="box box8">
        <img
          data-test="testImage"
          src={require("./cat.png")}
          alt="samurai cat"
        />
      </div>
    </div>
  );
}

export default Mosaic;
