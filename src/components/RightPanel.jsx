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

export default function Rightpanel ({ data = defaultData }) {
  const { playlist, band, song, imageUrl, artistImage, artistBiography } = data

  return (
    <div className='bg-green-200 grow w-1/4 px-3'>
      <div className='flex justify-between'>
        <span>{playlist}</span>
        <span><Close /></span>
      </div>
      <img className='' src={imageUrl} />
      <div className='flex justify-between'>
        <div>
          <div>{song}</div>
          <div>{band}</div>
        </div>
        <div className='flex items-center'><Check fill='green' /><Menu /></div>
      </div>

      <div className='relative'>
        <img className='' src={artistImage} />
        <div className='absolute top-2 left-3 text-white text-md tracking-wide'>About the Artist</div>
      </div>
      <div>
        <div>{band}</div>
        <div className='flex justify-between'>
          <div>10,000,000 monthly listeners</div>
          <button>Follow</button>
        </div>
        <div>{artistBiography}</div>
      </div>

      <div>
        <div className='flex justify-between'>
          <div><Music /></div>
          <div>Next in queue</div>
          <a href=''>Open queue</a>
        </div>
      </div>
    </div>
  )
}
