import React from 'react'
import Close from './icons/Close'
import Check from './icons/Check'
import Menu from './icons/Menu'
import Music from './icons/Music'

const defaultData = {
  playlist: 'Boubou\'s playlist',
  band: 'Metallica',
  song: 'Battery',
  imageUrl: '/img/m1.jpg',
  artistImage: '/img/abouttheartist.avif',
  artistBiography: 'Bla bla bla...'
}

const defaultNext = {
  nextBand: 'Nirvana',
  nextSong: 'Smells Like Teen Spirit',
  nextImageUrl: '/img/n.jpg'
}

export default function Rightpanel ({ data = defaultData, nextData = defaultNext }) {
  const { playlist, band, song, imageUrl, artistImage, artistBiography } = data
  const {
    nextBand,
    nextSong,
    nextImageUrl
  } = nextData

  return (
    <div className='bg-neutral-900 grow w-1/4 px-3 rounded-lg m-2 text-neutral-100'>
      <div className='flex justify-between mt-2 mb-4'>
        <span>{playlist}</span>
        <span className='hover:bg-neutral-700 cursor-pointer'><Close /></span>
      </div>
      <img className='rounded-lg' src={imageUrl} />
      <div className='flex justify-between mt-2 mb-4'>
        <div>
          <div className='text-2xl tracking-wide font-normal hover:underline hover:cursor-pointer'>{song}</div>
          <div className='text-neutral-400 font-light hover:text-white hover:underline hover:cursor-pointer'>{band}</div>
        </div>
        <div className='flex items-center'><Check fill='green' /><Menu /></div>
      </div>

      <div className='relative hover:cursor-pointer '>
        <img className='rounded-t-lg' src={artistImage} />
        <div className='absolute top-2 left-3 text-white text-md tracking-wide'>About the Artist</div>
      </div>
      <div className='text-neutral-400 hover:cursor-pointer mb-4 bg-neutral-800 rounded-b-lg'>
        <div className='text-neutral-100 py-3 px-2 font-semibold tracking-wide'><span className='hover:underline'>{band}</span></div>
        <div className='flex justify-between px-2'>
          <div className='text-neutral-400 font-light text-s'>10,000,000 monthly listeners</div>
          <button className='hover:border-neutral-400 text-xs tracking-wide text-neutral-100 font-normal border-neutral-700 border-2 px-3 py-1 rounded-full'>Follow</button>
        </div>
        <div className='px-2 py-3 text-neutral-400 font-normal text-xs'>{artistBiography}</div>
      </div>

      <div className='flex justify-between items-center rounded-t-lg bg-neutral-800 pt-3 px-2'>
        <div>Next in queue</div>
        <a className='hover:text-neutral-100 text-xs tracking-wide text-neutral-400 font-normal' href=''>Open queue</a>
      </div>

      <div className='flex items-center bg-neutral-800 rounded-b-lg py-4 px-2 hover:bg-neutral-700'>
        <div className='mr-3'><Music /></div>
        <div className='flex items-center'>
          <img className='w-10 h-10 rounded-md mr-3' src={nextImageUrl} />
          <div className='flex bg-blue- flex-col'>
            <div className='text-neutral-100 font-normal text-sm'><span className='hover:underline hover:cursor-pointer'>{nextSong}</span></div>
            <div className=' text-neutral-400 font-normal text-xs'><span className='hover:underline hover:cursor-pointer'>{nextBand}</span></div>
          </div>
        </div>
      </div>

    </div>
  )
}
