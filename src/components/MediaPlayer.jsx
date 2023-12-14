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

export default function MediaPlayer () {
  return (
    <div className='bg-red-500 fixed bottom-0 w-full flex'>Music Bar <Check fill='green' /><Random /><Previous /><Play /><Next /><Radio /><Carousel /><Speaker /><Expand /></div>
  )
}
