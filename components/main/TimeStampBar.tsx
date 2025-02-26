"use client"

import React, { useState, useRef, useEffect } from 'react'

interface TimeStampBarProps {
  isPlayed: boolean
  duration: string,
}

const TimeStampBar: React.FC<TimeStampBarProps> = ({
  isPlayed, duration
}) => {
  const [currentTimeInSecs, setCurrentTimeInSecs] = useState(165) // 2:45 w sekundach
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  const songDuration = "4:45"
  const durationTimeArr = songDuration.split(":")
  const durationTimeInSecs = parseInt(durationTimeArr[0]) * 60 + parseInt(durationTimeArr[1])

  const [width, setWidth] = useState((currentTimeInSecs / durationTimeInSecs) * 100)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current) return
    
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
    const rect = sliderRef.current.getBoundingClientRect()
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const newTime = Math.floor((offsetX / rect.width) * durationTimeInSecs)

    setWidth(newTime)
  }

  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleMouseMove)
    document.addEventListener('touchend', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleMouseMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className='flex items-center gap-3 relative'>
      <p className='absolute '>{formatTime(currentTimeInSecs)}</p>

      <div
        className='ml-[3.5rem] py-2 px-0 hover:cursor-pointer'
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const offsetX = e.clientX - rect.left 
          console.log(offsetX, "o")
          const newTime = (offsetX / rect.width) * durationTimeInSecs 
          newTime > 0 ? setCurrentTimeInSecs(newTime) : setCurrentTimeInSecs(0.0)
          console.log(newTime)
        }}
      >
        <div 
          ref={sliderRef}
          className='relative w-40 h-1 bg-gray-500  cursor-pointer'
          
        >
          <div 
            className='absolute h-full bg-white '
            style={{ width: `${(currentTimeInSecs / durationTimeInSecs) * 100}%` }}
          >
            
          </div>
        </div>
      </div>

      <p className='absolute -right-[4rem]'>{songDuration}</p>
    </div>
  )
}

export default TimeStampBar