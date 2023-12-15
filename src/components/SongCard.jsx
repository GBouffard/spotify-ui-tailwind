import React from 'react'

export default function SongCard ({ data, index }) {
  const { song, band, album, imageUrl, dateAdded, duration } = data

  return (
    <div className='flex justify-between items-center bg-neutral-900 text-neutral-400 font-normal text-xs py-2 hover:bg-neutral-800'>
      <div className='flex w-10 mx-2 justify-center text-lg font-extralight'>{index + 1}</div>
      <div className='w-2/5 grow flex items-center'>
        <img className='w-10 h-10 rounded-md mr-3' src={imageUrl} />
        <div>
          <div className='text-neutral-100 font-normal text-sm'>{song || 'SONG'}</div>
          <div className='mt-1 hover:text-white hover:underline hover:cursor-pointer'>{band}</div>
        </div>
      </div>
      <div className='w-1/5 grow hover:text-white hover:underline hover:cursor-pointer'>{album}</div>
      <div className='w-1/5 grow'>{dateAdded || 'DATE ADDED'}</div>
      <div className='w-1/5 grow text-center'>{duration || 'DURATION'}</div>
    </div>
  )
}
