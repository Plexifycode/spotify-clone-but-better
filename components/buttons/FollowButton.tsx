"use client"

import React, { useState } from 'react'

const FollowButton = (isUserFollowing: boolean) => {

  const [isFollowed, setIsFollowed] = useState(isUserFollowing);

  return (
    <>
        {isFollowed ? (
            <button onClick={() => {setIsFollowed(!isFollowed)}} className='bg-[#565656] text-white opacity-90 tracking-widest font-semibold rounded-full px-6 text-sm  py-3 hover:cursor-pointer'>Followed</button>
        ) : (
            <button onClick={() => {setIsFollowed(!isFollowed)}} className='bg-[#27D16D] text-white tracking-widest font-[500] rounded-full px-6 text-sm  py-3 hover:cursor-pointer'>Follow</button>
        )}
    </>
  )
}

export default FollowButton
