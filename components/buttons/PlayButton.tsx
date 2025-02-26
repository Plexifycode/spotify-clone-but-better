"use client"

import React, { useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";

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
        relative
        text-center
        group
        transition
        hover:scale-105
        '>
            {
              isClicked ? (
                <FaPause size={16} className='text-black absolute top-4 transition-transform left-[17px]'/>
              ) : (
                <FaPlay size={16} className='text-black absolute top-4 transition-transform left-[18px]'/>
              )
            }
    </button>
  )
}

export default PlayButton
