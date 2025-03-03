"use client"

import React from 'react'
import PlayButton from '@/components/buttons/PlayButton'
import TimeStampBar from "@/components/main/TimeStampBar";

import { Shuffle, Repeat, SkipForward, SkipBack} from 'lucide-react';

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
            <SkipBack />
        </button>

        <button>
          <SkipForward />
        </button>

        <button>
          <Shuffle />
        </button>

        <button>
          <Repeat />
        </button>
      </div>

      <div>
        <TimeStampBar />
      </div>
    </div>
  )
}

export default PlayBar;
