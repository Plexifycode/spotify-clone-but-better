"use client";
import React, { useRef } from 'react'

interface CategoryElementProps {
    id: number,
    label: string,
    image: string,
    backgroundColor: string // hex values
    ref: RefObject<HTMLDivElement | null>
}

const CategoryElement: React.FC<CategoryElementProps> = ({
    id, label, image, backgroundColor, ref
}) => {
  const lastElRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className='min-w-[10.4rem] min-h-[10.4rem] w-[10.4rem] h-[10.4rem] overflox-hidden bg-blue-900 rounded-xl text-left text-white font-black text-xl py-5 px-6 tracking-widest '>
      {label}
    </div>
  )
}

export default CategoryElement
