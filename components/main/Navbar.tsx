"use client"

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { BellRing, House, Search, Settings, LockKeyholeOpen, Users } from 'lucide-react';

import  Tab from "@/components/smaller/Tab"

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const ChangeRouteToSearch = () => {
    router.push("/search");
  }

  const splittedPathname = pathname.split("/");
  splittedPathname.shift();

  if (pathname !== "/search") {
      if (pathname.includes("/artists")) {
        
        console.log(splittedPathname);

        switch (splittedPathname.length) {
          case 2:
            console.log("artysta")
            break;
          case 4:
            console.log("album")
            break;
          case 5:
            console.log("nutka")
            break;
          default:
            break;
        }
      }
  }

  const createNewTab = (type: string) => {
    switch (type) {
      case "settings":
        return (
          <Tab 
            label='settings'
            icon='album'
            href='/account/settings'
            isClosed
          />
        )
        break;
      case "profile":
        return (
          <Tab 
            label='profile'
            icon='album'
            href='/account/profile'
            isClosed
          />
        )
        break;    
      default:

        break;
    }
  }


  return (
    <div className='w-full h-full flex justify-between items-center overflow-hidden '>
      
      <div className='flex gap-2 items-center '>
        <Link href={"/"} className={`${pathname === "/" ? "bg-[#181414] rounded-xl" : "bg-[#060606]"} flex items-center gap-3 w-60 px-4 py-3`}>
          <House className={`${pathname === "/" ? "text-white" : "text-textPrimary"}`}/>

          <p className={`${pathname === "/" ? "text-white" : "text-textPrimary"} text-sm pt-1 font-semibold`}>Home</p>
        </Link>

        <label htmlFor="search" className={`${pathname === "/search" ? "bg-[#181414] rounded-xl" : "bg-[#060606]"} flex items-center gap-3 w-60 px-4 py-3`} onClick={ChangeRouteToSearch}>
          <Search  className={`${pathname === "/search" ? "text-white" : "text-textPrimary"}`}/>
          
          <input 
            type="text" 
            placeholder='Search...' 
            id='search' 
            className={`
              ${pathname === "/search" ? "bg-[#181414] placeholder:text-white" : "bg-[#060606] placeholder:text-textPrimary"} 
              outline-none 
              text-sm
              text-white
              font-semibold
             `}/>
        </label>
          
        <Tab 
          label='Oki'
          href='/artists/oki'
          icon="artist"
          isClosed={false}
        />

        <Tab 
          label='Era 47'
          href='/artists/oki/albums/era47'
          icon="album"
          isClosed={false}
        />

        <Tab 
          label='Deszcz Na Betonie'
          href='/artists/taco-hemingway/songs/deszcz-na-betonie'
          icon="song"
          isClosed={false}
        />

        
        
      </div>


      <div className='flex gap-8 items-center pr-5'>
          <button>
            <BellRing/>
          </button>

          <button>
            <LockKeyholeOpen />
          </button>

          <button>
            <Users />
          </button>

          <Link href={"/account/settings"} onClick={() => {createNewTab("settings")}}>
            <Settings/>
          </Link>

          <Link href={"/account/profile"} onClick={() => {createNewTab("profile")}}>
              <div className='w-7 h-7 bg-purple-700 rounded-full'></div>
          </Link>
      </div>
    </div>
  )
}

export default Navbar
