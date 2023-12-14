import React from 'react'

export default function SongCard ({ data, index }) {
  const { song, band, album, imageUrl, dateAdded, duration } = data

  return (
    <div className='flex justify-between items-center'>
      <div className='flex w-10 justify-center'>{index + 1}</div>
      <div className='w-2/5 grow flex items-center'>
        <img className='w-10 h-10' src={imageUrl} />
        <div>
          <div>{song || 'SONG'}</div>
          <div>{band}</div>
        </div>
      </div>
      <div className='w-1/5 grow'>{album}</div>
      <div className='w-1/5 grow'>{dateAdded || 'DATE ADDED'}</div>
      <div className='w-1/5 grow text-center'>{duration || 'DURATION'}</div>
    </div>
  )
}
