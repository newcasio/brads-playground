import React from "react";

const logo = props => {
  return (
    <img
      className="logo"
      data-test="logo"
      src={require("./logo.jpeg")}
      alt="losadfgo"
    />
  );
};

export default logo;
