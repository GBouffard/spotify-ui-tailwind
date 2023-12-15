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
import Repeat from './icons/Repeat'

const fakeData = {
  band: 'Metallica',
  song: 'Battery',
  imageUrl: '/img/m1.jpg'
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

      <div className='flex w-2/5 flex-col'>
        <div className='flex justify-center items-center mb-2'>
          <span className='mx-3'><Random fill='springgreen' /></span>
          <span className='mx-3'><Previous fill='grey' /></span>
          <span className='mx-3'><Play size={32} /></span>
          <span className='mx-3'><Next fill='grey' /></span>
          <span className='mx-3'><Repeat fill='grey' /></span>
        </div>
        <div className='w-full flex items-center text-xs text-neutral-400'>
          <span className='mx-2'>0:00</span><div className='bg-neutral-700 w-full grow h-1 rounded-full' /><span className='mx-2'>5:13</span>
        </div>
      </div>

      <div className='flex'>
        <Radio /><Carousel /><Speaker /><Expand />
      </div>
    </div>
  )
}
