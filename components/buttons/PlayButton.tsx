"use client"

import React, { useState } from 'react'

import { Play, Pause }  from 'lucide-react'


interface buttonProps {
    onClick: void,
    clickState: boolean
}

const PlayButton: React.FC<buttonProps> = ({
    onClick, clickState
}) => {
  const [isClicked, setIsClicked] = useState(clickState)
  return (
    <button
        onClick={() => {onClick; setIsClicked(!isClicked)}}
        className='
        bg-[#1ed760]
        hover:bg-[#3ad16f]
        rounded-full
        w-12
        h-12
        text-center
        group
        transition
        hover:scale-[1.08]
        flex
        justify-center
        items-center
        '>
            {
              isClicked ? (
                <Pause className='text-black'  size={20} fill='#000'/>
              ) : (
                <Play className='text-black' size={18} fill='#000'/>
              )
            }
    </button>
  )
}

export default PlayButton
