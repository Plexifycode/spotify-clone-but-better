"use client"

import React, { useContext } from 'react'
import PlayButton from '@/components/buttons/PlayButton'
import TimeStampBar from "@/components/main/TimeStampBar";

import { Shuffle, Repeat, SkipForward, SkipBack} from 'lucide-react';

import Image from 'next/image';


import { useMusic } from '@/lib/PlayStateContext';

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
  const { isPlaying, togglePlay, next, previous, currentSong, shuffleMode, toggleShuffle, loopMode, setLoop, setCurrentSong } = useMusic();


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

      <div>
        {currentSong ? (
          <>
            <div>
              {currentSong.title}
            </div>

            <div>
              {currentSong.album}
            </div>

            <div>
              {currentSong.artists.map((artist, index) => (
                <div key={index}>
                  {artist}
                </div>
              ))}
            </div>

            {currentSong.coverImage ? (
              <Image src={currentSong.coverImage} alt='song' width={50} height={50}/>
            ): (
              ""
            )}
              
            

            <div>
              {currentSong.duration}
            </div>
          </>
        ) : "nic"}
      </div>
    </div>
  )
}

export default PlayBar;
