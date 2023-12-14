import React from 'react'

export default function PlaylistCard ({ data }) {
  const { name, imageUrl, creator } = data

  return (
    <div className='flex'>
      <img className='w-12 h-12' src={imageUrl} />
      <div>
        <div>{name}</div>
        <div>Playlist • {creator}</div>
      </div>
    </div>
  )
}
