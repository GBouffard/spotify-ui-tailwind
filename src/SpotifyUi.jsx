import React from "react";

import albumsInfo from "./data/albumsInfo";
import SongCard from "./components/SongCard";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function SpotifyUi() {
  return (
    <div className="bg-gray-950 flex w-full">
      <LeftPanel/>

      <div className="bg-blue-200 grow w-2/4">
        {albumsInfo.map((data, index) => (
          <SongCard data={data} key={`album ${index}`} />
        ))}
      </div>

      <RightPanel/>

      <div className="bg-red-500 fixed bottom-0 w-full">Music Bar</div>
    </div>
  );
}