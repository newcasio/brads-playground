import React from "react";

import GreenSock_logo from "./greensock-logo-man.svg";

function BigText(props) {
  let animateMe = () => {
    props.animate();
  };
  return (
    <div>
      <h1 className="big__text">{props.textForBigText}</h1>
      <button onClick={animateMe}>Click to animate your text</button>
      <p>
        <img
          className="logo__man"
          src={GreenSock_logo}
          alt="greensock man logo"
        />
        Powered by Greensock
      </p>
    </div>
  );
}

export default BigText;
