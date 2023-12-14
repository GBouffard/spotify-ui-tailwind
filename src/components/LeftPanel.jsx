import React from 'react'
import PlaylistCard from './PlaylistCard'
import Home from './icons/Home'
import Search from './icons/Search'
import Library from './icons/Library'
import Plus from './icons/Plus'
import Arrow from './icons/Arrow'
import List from './icons/List'

const playlistsData = [{
  name: 'Boubou',
  imageUrl: '/img/Boubou.jpg',
  creator: 'Guillaume Bouffard'
},
{
  name: 'Classical Music',
  imageUrl: '/img/m2.jpg',
  creator: 'Wolfgang Amadeus Mozart'
}
]

export default function LeftPanel () {
  return (
    <div className='bg-yellow-200 grow w-1/4'>
      <div className=''><Home /> Home</div>
      <div><Search /> Search</div>
      <div className='flex justify-between'>
        <div><Library /> Your library</div>
        <button className='flex'><Plus /> <Arrow /></button>
      </div>
      <div>
        <span>Playlists</span>
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between'>
          <div><Search /></div>
          <a>Recents <List /></a>
        </div>
        {playlistsData.map((data, index) => (
          <PlaylistCard data={data} key={`playlist ${index}`} />
        ))}
      </div>
    </div>
  )
}
