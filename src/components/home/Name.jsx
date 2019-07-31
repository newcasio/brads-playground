import React, { useEffect, useState } from "react";
import { TweenMax, Elastic } from "gsap";

let Name = props => {
  const [title, setTitle] = useState(props.name);

  useEffect(() => {
    TweenMax.to(".homepage__text", 2.6, {
      rotation: 360,
      ease: Elastic.easeOut
    });
    TweenMax.from(".homepage__text", 4, { opacity: 0 });
  });
  return (
    <div className="homepage__text ">
      <h2 data-test="name">{title}</h2>
    </div>
  );
};

export default Name;
