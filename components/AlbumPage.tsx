"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SongElement from './smaller/SongElement';

import { era47songs } from '@/hardcoded/songs';
import era47 from "@/public/artists/oki/albums-covers/era47.jpg"

import { Shuffle, Search, Upload, Download } from 'lucide-react';

import PlayButton from './buttons/PlayButton';


interface AlbumPageProps {
    albumName: string;
    artists: string[],
    features: string[],
    producers: string[],
    normalizedArtists: string[],
    yearOfRelease: string,
    songsCount: number,
    albumLength: string,
    genres: string[],
}

const AlbumPage: React.FC<AlbumPageProps> = ({
    albumName, artists, features, producers, yearOfRelease, songsCount, normalizedArtists, genres
}) => {

    const expandImage = () => {
        
    }
  return (
    <div className='flex px-5 py-8 gap-[4rem]'>
        <div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-white text-5xl font-bold tracking-widest pb-3 font-raleway '>{albumName}</h1>

                <div className='flex gap-2 items-center pb-2'>
                    <p>O</p>

                    {artists.map((artist, index) => (
                        <Link className='text-white' key={index} href={`/artists/${normalizedArtists[index]}`}>{artist}</Link>
                    ))}

                    <div className='w-1 h-1 bg-textPrimary rounded-full'></div>

                    <p>{yearOfRelease}</p>

                    <div className='w-1 h-1 bg-textPrimary rounded-full'></div>

                    <p>{songsCount} songs</p>

                    <div className='w-1 h-1 bg-textPrimary rounded-full'></div>

                    <p>1hr 14min</p>
                </div>

                <div className='w-full flex justify-between items-center pb-3 pl-1'>
                    <div className='flex items-center gap-10'>
                        <PlayButton/>
                        
                        <Shuffle size={35} className='text-textPrimary'/>

                        {/* plus icon */}

                        <p>BRAK</p>

                        <Download size={35}/>

                        <Upload size={28}/>
                    </div>

                    <Search size={25} />
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex border-b-[2.7px] border-b-[#181414] px-6 w-full py-3 mb-3'>
                        <p className=' w-[4rem] text-sm '>#</p>

                        <p className=' w-[28rem] text-sm'>Title</p>

                        <p className='w-[28rem] text-sm'>Duration</p>
                    </div>
                    
                    {era47songs.songsList.map((song, index) => (
                            <SongElement 
                                key={index}
                                title={song.songName}
                                id={song.id}
                                duration={song.duration}
                                authors={song.artists}
                                cover={null}
                            />
                        ))}
                    

                    
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-6 max-w-[50%]'>
            <button onClick={() => {expandImage}}>
                <Image src={era47} width={300} alt='era47 cover' className='rounded-xl' />
            </button>

            <div className='flex gap-3 flex-wrap'>
                {genres.map((genre, index) => (
                    <div key={index} className='
                        bg-transparent
                        border-[2.7px]
                        border-[#181414]
                        rounded-full
                        px-5
                        py-3
                        text-sm
                    '>
                        {genre}
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-4 mt-3'>
                {artists.map((artist, index) => (
                    <div key={index} className='flex items-center gap-5'>
                        <div className='w-12 h-12 bg-gray-500 rounded-full'></div>

                        <p className='text-[1.1rem]'>{artist}</p>
                    </div> 
                ))}
            </div>

           
        </div>
    </div>
  )
}

export default AlbumPage
