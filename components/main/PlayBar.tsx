"use client"

import React from 'react'
import PlayButton from '@/components/buttons/PlayButton'
import TimeStampBar from "@/components/main/TimeStampBar";

import { RiSkipForwardFill } from "react-icons/ri";
import { RiSkipBackFill } from "react-icons/ri";
import { ImLoop } from "react-icons/im";
import { PiShuffleFill } from "react-icons/pi";

interface PlayBarProps {
    currentlyPlayed: object,
    isPlaying: boolean,
    songDuration: string,
    title: string,
    cover: string,
    authors: string[],
    album: string,
    lyrics: string[]
}

const PlayBar = () => {
  return (
    <div className='py-2 px-4 bg-gray-300 bg-opacity-25 rounded-md flex items-center gap-7'>
      <div className='flex items-center gap-5'>
        
        <PlayButton onClick={() => {}} />

        <button>
            <RiSkipBackFill  size={22}/>
        </button>

        <button>
            <RiSkipForwardFill size={22}/>
        </button>

        <button>
            <PiShuffleFill size={25}/>
        </button>

        <button>
            <ImLoop size={18}/>
        </button>
      </div>

      <div>
        <TimeStampBar isPlayed={true} duration='2:45'/>
      </div>
    </div>
  )
}

export default PlayBar;
