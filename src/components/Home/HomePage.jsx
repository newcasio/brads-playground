import React, { useState } from "react";
import { TweenMax } from "gsap/all";

import "./home.css";

import BigText from "./BigText";

function HomePage() {
  const [point, setPoint] = useState([]);
  const [text, setText] = useState("");

  //colour change
  function click(e) {
    let x = e.clientX;
    let y = e.clientY;
    setPoint([x, y]);
  }

  let x1 = (point[0] / 2500) * 255;
  let y1 = (point[1] / 2500) * 255;
  let colour = { color: `rgb(${x1},${y1},${x1})` };

  //input
  function onChangeHandler(e) {
    setText(e.target.value);
    // console.log(text);
  }

  //greensock animatino of input
  let run = () => {
    console.log("running");
    TweenMax.to(".big__text", 2, { rotation: 360 });
  };

  return (
    <div className="home__wrapper" onMouseMove={click}>
      <div className="home__titles">
        <h1 className="myName">Bradley Dong</h1>
        <h2 className="myTitle">Junior Developer </h2>
      </div>

      <h3 style={colour}>
        <p>
          Your mouse is at {point[0]}, {point[1]}
        </p>
        <p>Your text colour is changing according to the mouse position</p>
      </h3>

      <form>
        <label>Type here: </label>
        <input type="text" onChange={onChangeHandler} />
        {/* <h1>{text}</h1> */}
      </form>
      <BigText textForBigText={text} animate={run} />
    </div>
  );
}

export default HomePage;
