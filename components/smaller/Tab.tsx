"use client";

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconType } from 'react-icons';

import { FaCompactDisc } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";


import { MdOutlineClose } from "react-icons/md";

interface TabProps {
    label: string,
    icon: string,
    href: string,
    isClosed: boolean | "disabled"
}

const Tab: React.FC<TabProps> = ({
    label,
    icon,
    href,
    isClosed
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname()

  return (
    isVisible && (
      <div 
        className={`
          ${pathname.startsWith(href)   
            ? "bg-[#181414] rounded-xl text-white" 
            : "bg-[#060606] text-textPrimary"} 
          flex 
          items-center 
          justify-between 
          w-60 
          px-4 
          py-3 
          relative
          group
          font-semibold
        `}>
        <Link href={href} className='flex gap-3 items-center w-full'>
          {icon === "artist" ? <FiUser size={22}/> : icon === "album" ? <FaCompactDisc size={22}/> : icon === "song" ? <IoMdMusicalNote size={22}/> : "no icon"}
  
          <div className={`text-sm `}>{label}</div>
        </Link>
  
        <button 
            onClick={() => { setIsVisible(false); console.log(isVisible); }} 
            className='p-1 hidden group-hover:block absolute top-2 right-2'>
            <MdOutlineClose size={20}/>
        </button> 
      </div>
    )
  )
  
}

export default Tab
