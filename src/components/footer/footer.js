import React, { useState } from 'react';
import Sound from 'react-sound';
import TheOtherSide from './music.mp3';
import './footer.css';

// import {Frame,   Scroll } from "framer"
// super(props);
const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <footer>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? '@' : <i class="fas fa-volume-up"> </i>}
            </button>
            {new Date().getFullYear()} by bartlomiejra
            <Sound
                url={TheOtherSide}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </footer>
    );
};

export default PlaySound;
