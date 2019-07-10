import React, { useEffect } from "react";
import { TweenMax, Elastic } from "gsap/all";

let Name = () => {
  useEffect(() => {
    TweenMax.to(".homepage__text", 2.6, {
      rotation: 360,
      ease: Elastic.easeOut
    });
    TweenMax.from(".homepage__text", 4, { opacity: 0 });
  });
  return (
    <div className="homepage__text ">
      <h2>Bradley's Page</h2>
    </div>
  );
};

export default Name;
