import React, { useState } from "react";

import "./home.css";

function HomePage() {
  const [point, setPoint] = useState([]);

  function click(e) {
    let x = e.clientX;
    let y = e.clientY;
    setPoint([x, y]);
  }

  let x1 = (point[0] / 2500) * 255;
  let y1 = (point[1] / 2500) * 255;
  let colour = { color: `rgb(${x1},${y1},${x1})` };

  return (
    <div className="home__wrapper" onMouseMove={click}>
      <div className="home__titles">
        <h1 className="myName">Bradley Dong</h1>
        <h2 className="myTitle">Junior Developer </h2>
      </div>

      <h3 style={colour}>
        Your mouse is at {point[0]}, {point[1]}
      </h3>
      <h3 style={colour}>Your colour is </h3>
    </div>
  );
}

export default HomePage;
