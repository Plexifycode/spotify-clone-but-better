"use client";

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Disc3, User, Music2, X } from 'lucide-react';

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
          {icon === "artist" ? <User/> : icon === "album" ? <Disc3 /> : icon === "song" ? <Music2 /> : "no icon"}
  
          <div className={`text-sm `}>{label}</div>
        </Link>
  
        <button 
            onClick={() => { setIsVisible(false); console.log(isVisible); }} 
            className='p-1 hidden group-hover:block absolute top-2 right-2'>
            <X />
        </button> 
      </div>
    )
  )
  
}

export default Tab
