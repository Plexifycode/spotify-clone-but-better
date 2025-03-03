"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import { okiAlbums } from '@/hardcoded/songs'

import { era47songs } from "@/hardcoded/songs"

import { Pause, ArrowDown, ArrowRight} from "lucide-react"

import SongElement from '@/components/smaller/SongElement'
import PlayButton from '@/components/buttons/PlayButton'

const page = () => {
  const arr = [];
  for (let i = okiAlbums.length-1; i >= 0; i--) {
    arr.push(okiAlbums[i])
  }

  const releaseDateInArr = ["02", "15", "2024"]//album releaseDate.split(".");
  const albumLengthInArr = ["2", "3", "3"] //duration.split(" ");
  const likedSong: string[] = [];

  for (let i = 0; i < albumLengthInArr.length; i++) {
    switch (i) {
        case 0:
            albumLengthInArr[0] = `${albumLengthInArr[0]} hr `
            break;
        case 1:
            albumLengthInArr[1] = `${albumLengthInArr[1]} min `
            break;
        case 2: 
            albumLengthInArr[2] = `${albumLengthInArr[2]} sec `
    }
    
  }

  for (let i = 0; i < albumLengthInArr.length; i++) {
    if (albumLengthInArr[i].startsWith("0") ) {
        albumLengthInArr.splice(i, 1);
    }
  }

  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlay = () => {
    // sprawdz czy nie jest juz grane

    setIsPlaying(!isPlaying)
  }

  const [displayAlbumDetails, setDisplayAlbumDetails] = useState(false);
  const expandAlbum = () => {
    setDisplayAlbumDetails(!displayAlbumDetails)
  }

  const [isLiked, setIsLiked] = useState({
    isLiked: false,
    index: 0,
  });

  const addToLiked = (songName: string, artists: string[], index: number) => {
    setIsLiked({
      isLiked: !isLiked.isLiked,
      index: isLiked ? index : 0,
    })
  }
  
  return (
    arr.map((album, index) => (
      <div className='flex flex-col gap-5 px-10' key={index}>
        <div className={`${index === (arr.length-1) ? "" : "border-b-[1px] border-b-[#181414]"} flex flex-col gap-5  py-10 w-full relative mt-3`}>
          <button className='flex gap-5 w-full border-b-[#181414]' onClick={expandAlbum} >
                {
                  album.cover != null ? (
                    <Image src={album.cover} width={130} height={130} alt={`${album.title} cover`} className='rounded-sm'/>
                  ) : (
                    <div className='rounded-sm bg-textPrimary w-[130px] h-[130px]'>
                        {album.cover}
                    </div>
                  )
                }

                <div className='flex justify-between w-full '>
                  <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-white text-xl font-black'>
                        {album.title}
                        
                    </h1>

                    <div className='flex gap-2 items-center'>
                        <p>{releaseDateInArr[2]}</p>
                        <div className='w-1 h-1 bg-textPrimary rounded-full'></div>
                        <p>{album.songsCount} songs</p>
                        <div className='w-1 h-1 bg-textPrimary rounded-full'></div>
                        <p>{albumLengthInArr}</p>
                        
                    </div>
                  </div>

                  {displayAlbumDetails ? (
                    <ArrowDown />
                  ) : (
                    <ArrowRight />
                  )}
                </div>
            </button>

            <div className='absolute z-10 top-[7.5rem] left-[9.5rem]'>
              {isPlaying ? (
                    <button
                        onClick={handlePlay}
                        className='
                        bg-[#1ed760]
                        hover:bg-[#2fee72]
                        rounded-full
                        w-12
                        h-12
                        relative
                        text-center
                        hover:scale-110
                        transition
                        '>
                            <Pause className='text-black absolute top-3 left-[12px]'/>
                    </button>
              ) : (
                
                <PlayButton onClick={handlePlay}/>
              )}
            </div>
                
            <div className='flex flex-col gap-2'>
                {displayAlbumDetails ? era47songs.songsList.map((song,index) => (
                  <SongElement 
                  key={index} 
                  title={song.songName}
                  duration={song.duration}
                  id={song.id}
                  authors={song.artists}
                  cover={null}
                  />
                )): (
                  ""
                )}
            </div>
        </div>
      </div>
    ))
  )
}

export default page