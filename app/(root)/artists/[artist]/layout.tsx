

import React from "react";

import ArtistPageLinks from "@/components/smaller/ArtistPageLinks";

import PlayButton from "@/components/buttons/PlayButton";

import { MdOutlineLibraryAdd } from "react-icons/md";
import { HiOutlineQueueList } from "react-icons/hi2";

import Image from 'next/image';

import OkiBg from "./../../../public/artists/oki/okibg.jpg";

import { artists } from "@/hardcoded/artists";


interface Artist {
    id: number;
    name: string;
    href: string;
    albums: string;
    albumCount: number;
    pfp: string;
    banner: string;
    label: string;
  }

export async function generateStaticParams() {
    return artists.map((artist) => ({
        artist: artist.link,
    }));
}

export default async function NestedLayout  ({ children, params }: {children:  React.ReactNode;  params: Promise<{ artist: string }>}) {
    
    if (!params) {
        return <div>404: Artist not found</div>;
      }
      const resolvedParams = await params
      const artistName = resolvedParams.artist
      const artist = artists.find((a) => a.link === artistName);
    
      if (!artist) {
        return <div>404: Artist not found</div>;
    }
    
    const isFollowed = false;

    return (
        <>
            <div className='bg-[url("/artists/oki/okibg.jpg")] w-full h-[26rem] bg-center bg-cover rounded-t-xl bg-no-repeat z-10 relative '>
            <div className='w-full h-[26rem] absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-90 '></div>
            <div className='pt-[14rem] relative z-20 px-10 py-4'>
                <h1 className='text-white font-[900] text-[4rem]  font-roboto tracking-wide '>{artist.name}</h1>

                <div className='mt-4'>
                    <div className='flex justify-between items-center'>
                        <span className='text-white'>2,322,003 monthly listeners</span>

                        <div className='flex items-center gap-7'>
                            {isFollowed ? (
                                <button className='bg-[#565656] text-white opacity-90 tracking-widest font-[500] rounded-full px-6 text-sm  py-3 hover:cursor-pointer'>Followed</button>
                            ) : (
                                <button className='bg-[#27D16D] text-white tracking-widest font-[500] rounded-full px-6 text-sm  py-3 hover:cursor-pointer'>Follow</button>
                            )}

                            <button className="text-white">
                                <MdOutlineLibraryAdd size={30}/>
                            </button>

                            <button className="text-white">
                                <HiOutlineQueueList size={30}/>
                            </button>

                            <button className='flex gap-1'>
                                <div className='w-1 h-1 bg-textPrimary rounded-full bg-white'></div>
                                <div className='w-1 h-1 bg-textPrimary rounded-full bg-white'></div>
                                <div className='w-1 h-1 bg-textPrimary rounded-full bg-white'></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='mt-[1.25rem] px-10 flex gap-[2rem] border-b-[1px] border-[#181414]'>
                <ArtistPageLinks name={artist.link}/>
            </div>

            <div className="px-10 py-6">
                {children}
            </div>
        </>
    );
  };
  
