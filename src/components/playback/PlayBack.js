import React from "react";
import ReactPlayer from "react-player";
import "./PlayBack.css";


function PlayBack() {
  return (
    <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=bEzbim8peGU"
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
  );
}

export default PlayBack;


