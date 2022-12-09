import React from 'react';
import { useLastFM } from 'use-last-fm';
import { Button } from '../Button/Button';

function Currentplaying() {
  const lastFM = useLastFM('bartx8', '6a14b60f0715465a2be8527105ab48e7');
  return (
    <>
      {lastFM.status === 'playing' ? (
        <fieldset className="myMusic">
          <legend>I am listening to</legend>
          <img
            alt="currentMusic"
            height="50px"
            width="50px"
            src={lastFM.song.art}
          />
          <div className="AboutSong">
            <b>{lastFM.song.name} </b>
            by <b> {lastFM.song.artist}</b>
          </div>
        </fieldset>
      ) : (
        <fieldset className="myMusic">
          <legend>I am listening to</legend>
          <img
            alt="currentMusic"
            height="50px"
            width="50px"
            src={
              'https://whichmeamitoday.files.wordpress.com/2017/01/img_42981.jpg'
            }
          />
          <div className="AboutSong">
            <b> 4'33 </b>
            <b> by </b>
            <b> John Cage </b>
          </div>
        </fieldset>
      )}
    </>
  );
}

export default Currentplaying;
