import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import data from '../../db/data.json'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filters</h2>
      </div>
     
      {
       data && data.map(item=>
    {
      return(
        <VideoRow
        views={item.views}
        subs={item.views}
        description={item.videoName}
        timestamp="3 years ago"
        channel={item.channelName}
        title={item.videoName}
        image={item.videoThumbnail}
      />
      )
    }
       )}
    
    </div>
  );
}

export default SearchPage;
