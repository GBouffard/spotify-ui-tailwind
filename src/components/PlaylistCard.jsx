import React from 'react'

export default function PlaylistCard ({ data }) {
  const { name, imageUrl, creator } = data

  return (
    <div className='flex cursor-pointer transition duration-1000 ease-out hover:bg-neutral-800 last-of-type:rounded-b-lg'>
      <img className='w-12 h-12 rounded-md mr-3' src={imageUrl} />
      <div>
        <div className='text-neutral-100 font-normal text-sm'>{name}</div>
        <div className='text-neutral-400 font-normal text-xs mt-1'>Playlist • {creator}</div>
      </div>
    </div>
  )
}
