"use client"

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useMusic } from '@/lib/PlayStateContext'; 
import { Song } from '@/types/musicTypes';

import Image from 'next/image';
import Link from 'next/link';

import { Play, Heart, Pause } from 'lucide-react';
import SongDetails from './SongDetails';


interface SongElementProps {
  title: string;
  id: number;
  authors: string[];
  duration: string;
  cover: string | null;
  album?: string;
  isExplicit: boolean
}

const SongElement: React.FC<SongElementProps> = ({
  title, id, authors, duration, cover, album, isExplicit
}) => {
  const { isPlaying, togglePlay, setCurrentSong, currentSong } = useMusic(); // Only get what you need

  const [isLiked, setIsLiked] = useState(false);
  const [selectedSong, setSelectedSong] = useState<boolean | null>(null);

  const handleActivate = useCallback((id: number) => {
    setSelectedSong((prevActiveSongId) => {
      // Check if the clicked song is ALREADY active
      if (prevActiveSongId === id) {
        return prevActiveSongId; // Do nothing if already active
      }
      return id; // Otherwise, set as active
    });
  }, []); // Empty dependency array because it doesn't depend on anything outside

  useEffect(() => {
    console.log("Component re-rendered. Selected Song:", selectedSong);
  }, [selectedSong]);

  const handleClick = () => {
    setSelectedSong(true)
  }
  
  const handlePlayClick = useCallback(() => {
    const newSong: Song = {
      id: id,
      title: title,
      artists: authors,
      album: album || '',
      duration: "2:03",
      url: "/artists/oki/era47.jpg",
      coverImage: cover || "",
    };
    setCurrentSong(newSong);
    if (!isPlaying) {
      togglePlay();
    }
  }, [id, title, authors, album, cover, isPlaying, setCurrentSong, togglePlay]);
  
  const handlePauseClick = useCallback(() => {
    togglePlay();
  }, [togglePlay]);

  
  const isCurrentlyPlaying = currentSong?.id === id;

  const playPauseButton = useMemo(() => {
    if (isPlaying && currentSong?.id === id) {
      return (
        <button className='absolute top-[26px] left-[21px] hidden group-hover:block' onClick={handlePauseClick}>
          <Pause size={21} className='text-textPrimary' fill='#7b7b7b'/>
        </button>
      );
    } else {
      return (
        <button className='absolute top-[26px] left-[21px] hidden group-hover:block' onClick={handlePlayClick}>
          <Play size={21} className='text-textPrimary' fill='#7b7b7b'/>
        </button>
      );
    }
  }, [isPlaying, currentSong?.id, id, handlePauseClick, handlePlayClick]);



  return (
   <div className='relative mb-2 group'>
    <div className='relative group'>
      {
        isPlaying && currentSong?.id === id ? (
          <button className='absolute top-[26px] left-[21px] ' onClick={handlePauseClick}>
            <Pause size={21} className='text-white' fill='#fff'/>
          </button>
        ) : (
          <>
            <div className='absolute top-6 left-6  group-hover:hidden cursor-default'>
              {id}
            </div>

            {playPauseButton}
          </>
        )
      }
    </div>

    
    
    <SongDetails 
      title={title}
      id={id}
      selectedSong={selectedSong}
      cover={cover}
      album={album}
      authors={authors}
      onClick={handleClick}
    />

    <button className='absolute top-6 right-5' onClick={() => {setIsLiked(!isLiked)}}>
      {isLiked ? (
        <Heart fill='#10b981' className='text-emerald-500'/>
      ) : (
        <Heart />
      )}
    </button>
   </div>
  );
};

export default SongElement;


/* 
    <div
      className='hover:cursor-pointer flex items-center gap-2 px-6 hover:bg-[#222] bg-opacity-0 rounded-md py-3 transition group' // Add group here
       onDoubleClick={handlePlayClick}
    >
      {isCurrentlyPlaying ? (
        <button className={`${cover ? "w-[2rem]" : "w-[3rem]"} pt-1  px-3  transition`}>
          <Pause className='text-emerald-500' onClick={handlePauseClick} />
        </button>
      ) : (
        <>
          <p className={`${cover ? "w-[2.5rem]" : "w-[4rem]"}  px-4 pt-1 pr-3 `}>
            {id}
          </p>

          <button className={`${cover ? "w-[2.5rem]" : "w-[4rem]"} pt-1  px-3`}>
            <Play className='text-emerald-500' onClick={handlePlayClick} />
          </button>
        </>
      )}

      <div className='flex items-center  transition'>
        {cover ? (
          <Image
            src={cover}
            alt={`${authors[0]}'s ${album} album`}
            width={50}
            height={50}
            className='mr-5 rounded-sm'
          />
        ) : (
          <></>
        )}

        <div className='flex flex-col'>
          <p
            className={`${isCurrentlyPlaying ? 'text-emerald-500' : 'text-white'} w-[28rem] text-left transition`}
          >
            {title}
          </p>

          <div className='flex gap-2 '>
            {authors.map((author, index) => (
              <p
                key={index}
                className='text-sm max-w-[13rem] text-ellipsis overflow-hidden'
              >
                {author}
                <span className='text-xl '>{authors.length - 1 === index ? '' : ','}</span>
              </p>
            ))}
          </div>
        </div>

        <p className='w-[10rem]'>{duration}</p>
      </div>

      {isLiked ? (
        <button
          className='text-emerald-500 hover:scale-[1.15] transition p-2'
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <Heart />
        </button>
      ) : (
        <button
          className='text-emerald-500 p-2 hover:scale-[1.15] transition'
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <Heart fill='#10b981' className='' />
        </button>
      )}
    </div>
*/