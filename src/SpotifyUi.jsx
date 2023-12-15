import React from 'react'

import songsList from './data/songsList'
import SongCard from './components/SongCard'
import LeftPanel from './components/LeftPanel'
import MiddleTopPanel from './components/MiddleTopPanel'
import RightPanel from './components/RightPanel'
import MediaPlayer from './components/MediaPlayer'

export default function SpotifyUi () {
  return (
    <div className='bg-gray-950 flex w-full'>
      <LeftPanel />

      <div className='bg-neutral-900 grow w-2/4'>

        <MiddleTopPanel />

    <div className='mx-3'>
        {songsList.map((data, index) => (
          <SongCard data={data} key={`album ${index}`} index={index} />
        ))}
        </div>
      </div>

      <RightPanel />

      <MediaPlayer />
    </div>
  )
}
