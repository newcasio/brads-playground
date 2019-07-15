import React, { useState } from "react";
import Sound from "react-sound";

import batman from "./batman.mp3";
import batmanIcon from "./soundEffects/batman.png";
import noSound from "./soundEffects/noSound.png";

function Music() {
  const [playIcon, setPlayIcon] = useState(noSound);
  const [soundVolume, setSoundVolume] = useState("100");

  const stopMusic = () => {
    if (soundVolume === "100") {
      setSoundVolume("0");
      setPlayIcon(batmanIcon);
    } else {
      setSoundVolume("100");
      setPlayIcon(noSound);
    }
  };

  return (
    <div>
      <Sound
        url={batman}
        playStatus={Sound.status.PLAYING}
        volume={soundVolume}
      />
      ;
      <img
        onClick={stopMusic}
        className="sound__button"
        src={playIcon}
        alt="play/pause button"
      />
    </div>
  );
}

export default Music;
