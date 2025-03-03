"use client"

import React, { useState } from 'react';

import Image from 'next/image';

import { Play, Heart, Pause } from 'lucide-react';


interface SongElementProps {
    title: string,
    id: number,
    authors: string[],
    duration: string,
    cover: string | null,
    album?: string
}

const SongElement: React.FC<SongElementProps> = ({
   title, id, authors, duration, cover, album
}) => {
  const [isLiked, setIsLiked] = useState(false) 
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <div className='hover:cursor-pointer flex items-center gap-2 px-6 hover:bg-[#222] bg-opacity-0 rounded-md py-3 transition' onDoubleClick={() => {setIsPlayed(!isPlayed)}}>
        {isPlayed ? (
            <button className={`${cover ? "w-[2rem]" : "w-[3rem]"} pt-1  px-3  transition`}>
                <Pause className='text-emerald-500' onClick={() => {setIsPlayed(!isPlayed)}}/>
            </button>
        ) : (
            <>
                <p className={`${cover ? "w-[2.5rem]" : "w-[4rem]"} group-hover:hidden px-4 pt-1 pr-3 `}>{id}</p>
                    
                <button className={`${cover ? "w-[2.5rem]" : "w-[4rem]"} pt-1 hidden group-hover:block px-3`}>
                    <Play className='text-emerald-500'  onClick={() => {setIsPlayed(!isPlayed)}}/>
                </button>
            </>
        )}
        
      <div className='flex items-center group transition'>
        {cover ? (<Image src={cover} alt={`${authors[0]}'s ${album} album`} width={50} height={50} className='mr-5 rounded-sm'/>) : (<></>)}

        <div className='flex flex-col'>
            <p className={`${isPlayed ? " text-emerald-500" : "text-white"} ' w-[28rem] text-left transition'`}>{title}</p>

            <div className='flex gap-2 '>
                {authors.map((author, index) => (
                    <p key={index} className='text-sm max-w-[13rem] text-ellipsis overflow-hidden'>
                        {author}
                        <span className='text-xl '>{authors.length -1 === index ? "" : ","}</span>
                    </p>
                ))}
            </div>
        </div>

        <p className='w-[10rem]'>{duration}</p>  
      </div>

      {isLiked ? (
            <button className='text-emerald-500 hover:scale-[1.15] transition p-2' onClick={() => {setIsLiked(!isLiked)}}>
                <Heart  /> 
            </button> 
        ) : (
            <button className='text-emerald-500 p-2 hover:scale-[1.15] transition' onClick={() => {setIsLiked(!isLiked)}}>
                <Heart fill='#10b981' className=''/> 
            </button>   
        )}
      
    </div>
  )
}

export default SongElement
