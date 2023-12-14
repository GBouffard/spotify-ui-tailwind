import React from "react";

import albumsInfo from "./data/albumsInfo";
import PlaylistCard from "./components/PlaylistCard";

export default function SpotifyUi() {
  return (
    <div>
      Spotify UI to come

      <div>{albumsInfo.map((albumInfo, index) => (
            <PlaylistCard albumInfo={albumInfo} key={`album ${index}`} />
          ))}</div>
    </div>
  );
}