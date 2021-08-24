import React, { useState } from "react";
import Sound from "react-sound";
import TheOtherSide from "./Hero/music.mp3";
// import {Frame,   Scroll } from "framer"
// super(props);
const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Play" : "Stop"}
      </button>
      <Sound
        url={TheOtherSide}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        onloading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongPlaying}
      />
    </div>
  );
};

export default PlaySound;
