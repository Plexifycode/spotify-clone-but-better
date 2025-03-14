import React from 'react';

import SongElement from '@/components/smaller/SongElement';


export default async function page ()  {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return (
    <div className='flex flex-col gap-10'>
      <div className='w-3/5'>
        <h1 className='text-white text-[1.1rem] font-semibold mb-5 tracking-widest'>Your Most Played</h1>

        <SongElement title='AGENT 47' authors={["Oki"]} duration='2:30' id={1} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47' isExplicit={true}/>
        <SongElement title='Whoop?' authors={["Oki"]} duration='3:10' id={2} cover={"/artists/oki/albums-covers/47universe.jpg"} album='47UNIVERSE' isExplicit={true}/>
        <SongElement title='Biggie' authors={["Oki", "Otsochodzi", "Young Igi", "OIO", "jakastisyrekoskarnajlepszuzawodnikamongusnaswiecie"]} duration='2:21' id={3} cover={"/artists/oki/albums-covers/oio.jpg"} album='OIO'/>
        <SongElement title='Justin Bieber' authors={["Oki"]} duration='1:10' id={4} cover={"/artists/oki/albums-covers/47playground.jpg"} album='47playground'/>
        <SongElement title='WODA SODOWA' authors={["Oki"]} duration='3:26' id={5} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47' isExplicit={true}/>

      </div>

      <div className='w-3/5'>
        <h1 className='text-white text-[1.1rem] font-semibold mb-5 tracking-widest'>Most Popular</h1>

        <SongElement title='AGENT 47' authors={["Oki"]} duration='2:30' id={1} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47' isExplicit={true}/>
        <SongElement title='WODA SODOWA' authors={["Oki"]} duration='3:10' id={2} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47'/>
        <SongElement title='WRAK' authors={["Oki"]} duration='2:21' id={3} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47'/>
        <SongElement title='KAUCJA' authors={["Oki"]} duration='1:10' id={4} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47'/>
        <SongElement title='SEROTONINA' authors={["Oki"]} duration='3:26' id={5} cover={"/artists/oki/albums-covers/era47.jpg"} album='ERA 47'/>
        
      </div>
    </div>
  )
}
