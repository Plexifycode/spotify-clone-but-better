"use client"

import React from 'react'

import { useMusic } from '@/lib/PlayStateContext'

import { Play, Pause }  from 'lucide-react'

const PlayButton = () => {
  const { isPlaying, setIsPlaying, currentSong } = useMusic()
  const id = 1;
  return (
    <button
        onClick={() => {setIsPlaying(!isPlaying)}}
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
              isPlaying && currentSong?.id === id ? (
                <Pause className='text-black'  size={20} fill='#000'/>
              ) : (
                <Play className='text-black' size={18} fill='#000'/>
              )
            }
    </button>
  )
}

export default PlayButton
