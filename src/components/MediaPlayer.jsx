import React from 'react'
import Check from './icons/Check'
import Random from './icons/Random'
import Previous from './icons/Previous'
import Play from './icons/Play'
import Next from './icons/Next'
import Radio from './icons/Radio'
import Speaker from './icons/Speaker'
import Expand from './icons/Expand'
import Carousel from './icons/Carousel'

const fakeData = {
  band: 'Metallica',
  song: 'Battery',
  imageUrl: '/img/m1.jpg',
}

export default function MediaPlayer () {
  return (
    <div className='bg-black h-20 fixed bottom-0 w-full flex justify-between items-center'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <img className='w-14 h-14 rounded-md mx-3' src={fakeData.imageUrl} />
          <div className='flex bg-blue- flex-col'>
            <div className='text-neutral-100 font-normal tracking-wider text-sm'><span className='hover:underline hover:cursor-pointer'>{fakeData.song}</span></div>
            <div className=' text-neutral-400 font-normal text-xs'><span className='hover:underline hover:cursor-pointer'>{fakeData.band}</span></div>
          </div>
          <span className='ml-3'><Check fill='green' /></span>
        </div>
      </div>

      <div className='flex'>
 <Check fill='green' /><Random /><Previous /><Play /><Next />
      </div>

      <div className='flex'>
      <Radio /><Carousel /><Speaker /><Expand />
      </div>
     </div>
  )
}
