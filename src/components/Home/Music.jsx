import React from "react";
import Sound from "react-sound";
import batman from "./batman.mp3";

function Music() {
  return <Sound url={batman} playStatus={Sound.status.PLAYING} />;
}

export default Music;
