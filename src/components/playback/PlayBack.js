import React from "react";
import ReactPlayer from 'react-player'
import "./PlayBack.css";


function Playback() {
  return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=bEzbim8peGU'
          width='100%'
          height='100%'
        />
      </div>
  );
}

export default Playback;


