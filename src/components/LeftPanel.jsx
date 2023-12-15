import React from 'react'
import PlaylistCard from './PlaylistCard'
import Home from './icons/Home'
import Search from './icons/Search'
import Library from './icons/Library'
import Plus from './icons/Plus'
import Arrow from './icons/Arrow'
import List from './icons/List'
import playlistsData from '../data/playlistsList'

const sharedClass = 'flex bg-neutral-900 p-3 tracking-wider text-neutral-400 cursor-pointer font-normal hover:text-white'

export default function LeftPanel () {
  return (
    <div className='bg-black grow w-1/4 mx-2'>
      <div className='my-2'>
        <div className={`${sharedClass} rounded-t-lg`}><span className='mr-4'><Home /></span>Home</div>
        <div className={`${sharedClass} rounded-b-lg`}><span className='mr-4'><Search /></span>Search</div>
      </div>
      <div className={`${sharedClass} rounded-t-lg w-full justify-between`}>
        <div className='flex'>
          <span className='mr-4'><Library fill='grey' /></span>
          Your library
        </div>
        <div>
          <button className='mr-5'><Plus /></button><button className='mr-2'><Arrow /></button>
        </div>
      </div>
      <div className='bg-neutral-900 py-2'>
        <button className='bg-neutral-700 text-xs text-white rounded-full px-3 py-1 font-light tracking-wide'>Playlists</button>
      </div>

      <div className='space-y-2 bg-neutral-900 overflow-y-scroll h-screen'>
        <div className={`${sharedClass}w-full justify-between`}>
          <Search />
          <div>
            <a className='flex font-light text-xs text- items-center hover:text-white'>Recents<span className='mr-3 ml-1'><List /></span></a>
          </div>
        </div>

        {playlistsData.map((data, index) => (
          <PlaylistCard data={data} key={`playlist ${index}`} />
        ))}
      </div>
    </div>
  )
}
