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

{ /* <div className='mt-2 bg-gradient-to-b from-yellow-600 to-neutral-900 rounded-t-lg'> */ }

export default function MiddleTopPanel () {
  return (
    <div className='mt-2 bg-gradient-to-b from-yellow-600 to-neutral-900 rounded-t-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex py-3 px-5'>
          <span className='bg-neutral-900 bg-opacity-80 rounded-full p-2 cursor-pointer mr-2'><Less /></span>
          <span className='bg-neutral-900 bg-opacity-50 rounded-full p-2 cursor-not-allowed'><More /></span>
        </div>

        <div className='flex justify-between rounded-t-lg items-center'>
          <div className='flex py-3 px-5'>
            <span className='bg-neutral-900 bg-opacity-70 rounded-full p-1 cursor-pointer mr-2'><Bell /></span>
            <span className='bg-neutral-900 bg-opacity-70 rounded-full p-1 cursor-pointer mr-2'><People /></span>
            <span className='bg-neutral-900 bg-opacity-70 rounded-full p-1 cursor-pointer mr-2 hover:bg-opacity-90'><img className='w-6 h-6 rounded-full' src='/img/Boubou.jpg' /></span>
          </div>
        </div>
      </div>

      <div className='flex pb-5 px-5 text-neutral-100'>
        <img className='w-52 h-52 rounded-md mr-5' src='/img/Boubou.jpg' />
        <div className='flex flex-col justify-between'>
          <div className='mt-6 text-xs font-light tracking-normal'>Public Playlist</div>
          <div className='text-8xl font-bold hover:cursor-pointer'>Boubou</div>

          <div className='flex flex-col'>
            <div className='text-xs font-light tracking-normal text-neutral-100 text-opacity-60 mb-3'>Boubou's tunes</div>
            <div className='flex text-xs font-extralight items-center text-neutral-100'>
              <img className='w-6 h-6 rounded-full mr-2' src='/img/Boubou.jpg' /> <span className='font-normal mr-1 hover:text-white hover:underline cursor-pointer'>Boubou Thulium</span> • 1 Like • 4,818 songs, 303 hr 12min
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex'><Play /><Random /><Download /><PlusUser /><Menu /></div>
        <div className='flex'><Search /><span>Artist</span><List /></div>
      </div>

      <div className='flex justify-between items-center bg-green-600 mx-3'>
        <div className='flex w-10 justify-center'>#</div>
        <div className='w-2/5 grow'>Artist</div>
        <div className='w-1/5 grow'>Album</div>
        <div className='w-1/5 grow'>Date Added</div>
        <div className='w-1/5 grow justify-center flex'><Time /></div>
      </div>
    </div>
  )
}
