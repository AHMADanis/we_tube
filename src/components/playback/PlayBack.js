import React from "react";


import data from '../../db/data.json'

function Playback() {
  return (
    <div>
     
      {
       data && data.map(item=>
    {
      return(
        <video controls width="100%">
      <source src={item.videoId} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
      )
    }
       )}
    
    </div>
  );
}

export default Playback;