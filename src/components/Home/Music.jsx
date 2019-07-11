import React, { useState } from "react";
import Sound from "react-sound";

import batman from "./batman.mp3";
import batmanIcon from "./soundEffects/batman.png";
import noSound from "./soundEffects/noSound.png";

function Music() {
  const [sound, setSound] = useState(Sound.status.PLAYING);
  const [playIcon, setPlayIcon] = useState(noSound);

  const stopMusic = () => {
    if (sound === Sound.status.PLAYING) {
      setSound(Sound.status.PAUSE);
      setPlayIcon(batmanIcon);
    } else {
      setSound(Sound.status.PLAYING);
      setPlayIcon(noSound);
    }
  };

  return (
    <div>
      <Sound url={batman} playStatus={sound} />;
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
