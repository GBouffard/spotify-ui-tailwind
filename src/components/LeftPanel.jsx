import React from "react";
import PlaylistCard from "./PlaylistCard";

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

export default function LeftPanel() {
    return (
        <div className="bg-yellow-200 grow w-1/4">
        <div className="">+ Home</div>
        <div>+ Search</div>
        <div className="flex justify-between">
            <div>+ Your library</div>
            <button>+ +</button>
        </div>
        <div>
          <span>Playlists</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
              <div>+</div>
              <a>Recents +</a>
          </div>
          {playlistsData.map((data, index) => (
            <PlaylistCard data={data} key={`playlist ${index}`} />
          ))}
        </div>
      </div>
    );
}