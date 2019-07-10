import React from "react";

function BigText(props) {
  let animateMe = () => {
    props.animate();
    // console.log(props);
  };
  return (
    <div>
      <h1 className="big__text">{props.textForBigText}</h1>
      <button onClick={animateMe}>Click to animate your text</button>
    </div>
  );
}

export default BigText;
