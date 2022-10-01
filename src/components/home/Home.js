import React from "react";
import "./Home.css";
import VideoCard from "./VideoCard";


import data from '../../db/data.json'

function Home() {

  return (
    <div className="recommendedVideos">
      
      <h2>Recommended movies</h2>
      <div className="recommendedVideos__videos">
      {
       data && data.map(item=>
    {
      return(
        <VideoCard
        title={item.videoName}
        views={item.views}
        channelImage={item.channelThumbnail}
        channel={item.channelName}
        image={item.videoThumbnail}
      />
      )}
       )}
      </div>
    </div>
  );
}

export default Home;
