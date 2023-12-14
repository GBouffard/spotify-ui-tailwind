import React from "react";

import albumsInfo from "./data/albumsInfo";
import PlaylistCard from "./components/PlaylistCard";
import SongCard from "./components/SongCard";
import RightPanel from "./components/RightPanel";

const playlistsData = [{
  name: `Boubou's playlist`,
  imageUrl: "/img/m1.jpg",
  creator: "Guillaume Bouffard"
},
{
  name: 'Classical Music',
  imageUrl: "/img/m2.jpg",
  creator: 'Wolfgang Amadeus Mozart'
},
]

export default function SpotifyUi() {
  return (
    <div className="bg-gray-950 flex w-full">
      <div className="bg-yellow-200 grow w-1/4">
        <div className="">+ Home</div>
        <div>+ Search</div>
        <div>+ Your library + +</div>
        <div>
          <span>Playlists</span>
        </div>
        <div>+ Recents +</div>
        {playlistsData.map((data, index) => (
          <PlaylistCard data={data} key={`playlist ${index}`} />
        ))}
      </div>

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