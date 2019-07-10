import React from "react";

import Bang from "./soundEffects/bang.png";

import Splat from "./soundEffects/splat.png";

function Effects() {
  return (
    <div>
      <img className="splat" src={Splat} alt="Splat!!" />

      <img className="bang" src={Bang} alt="Bang!!" />
    </div>
  );
}

export default Effects;
