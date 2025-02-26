import React from 'react'

import libIcon from "@/public/library_music_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Image from 'next/image';
const Library = () => {
  return (
    <div className='h-full w-full row-span-2 pt-6'>
      <div className='flex gap-4 items-center px-5'>
        <Image src={libIcon} width={30} alt='' className=''/>

        <p className='font-satoshi font-semibold tracking-wide'>My Library</p>
      </div>
    </div>
  )
}

export default Library
