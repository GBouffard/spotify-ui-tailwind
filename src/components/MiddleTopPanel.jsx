import React from 'react'
import Time from './icons/Time'
import People from './icons/People'
import Bell from './icons/Bell'
import More from './icons/More'
import Less from './icons/Less'

import Play from './icons/Play'
import Random from './icons/Random'
import Download from './icons/Download'
import PlusUser from './icons/PlusUser'
import Menu from './icons/Menu'
import Search from './icons/Search'
import List from './icons/List'

export default function MiddleTopPanel () {
  return (
    <div className='bg-indigo-400'>
      <div className='flex justify-between'>
        <div className='flex'><Less /><More /></div>
        <div className='flex'><Bell /><People /> ME</div>
      </div>
      <div className='flex'>
        <img className='w-52 h-52' src='/img/Boubou.jpg' />
        <div>
          <div>Public Playlist</div>
          <div>Boubou</div>
          <div>Boubou's tunes</div>
          <div className='flex'>
            <img className='w-8 h-8' src='/img/Boubou.jpg' />
            <span>Boubou Thulium</span> • 1 Like • 4,818 songs, 303 hr 12min
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex'><Play /><Random /><Download /><PlusUser /><Menu /></div>
        <div className='flex'><Search /><span>Artist</span><List /></div>
      </div>

      <div className='flex justify-between items-center bg-green-600'>
        <div className='flex w-10 justify-center'>#</div>
        <div className='w-2/5 grow'>Artist</div>
        <div className='w-1/5 grow'>Album</div>
        <div className='w-1/5 grow'>Date Added</div>
        <div className='w-1/5 grow justify-center flex'><Time /></div>
      </div>
    </div>
  )
}
