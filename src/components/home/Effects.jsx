import React, { useEffect } from "react";
import { TimelineLite } from "gsap";

import Bang from "./soundEffects/bang.png";

import Splat from "./soundEffects/splat.png";

function Effects() {
  useEffect(() => {
    const tl = new TimelineLite();
    tl.delay(4.5)
      .from(".splat", 1, { immediateRender: false, opacity: 1 })
      .from(".bang", 1, { immediateRender: false, opacity: 1 }, "-=0.5")
      .from(".splat1", 1, { immediateRender: false, opacity: 1 }, "-=0.2")
      .from(".bang1", 1, { immediateRender: false, opacity: 1 })
      .from(".splat1", 1, { immediateRender: false, opacity: 1 }, "+=18.5")
      .from(".bang1", 1, { immediateRender: false, opacity: 1 }, "+=0.5")
      .from(".bang", 1, { immediateRender: false, opacity: 1 }, "-=0.4")
      .from(".splat", 1, { immediateRender: false, opacity: 1 }, "-=0.4");
  });

  return (
    <div>
      <img className="effects effects__top splat" src={Splat} alt="Splat!!" />
      <img
        className="effects effects__bottom splat1"
        src={Splat}
        alt="Splat!!"
      />

      <img className="effects effects__top bang" src={Bang} alt="Bang!!" />
      <img className="effects effects__bottom bang1" src={Bang} alt="Bang!!" />
    </div>
  );
}

export default Effects;
