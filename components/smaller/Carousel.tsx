"use client"

import React, { useState, useRef } from 'react';

import CategoryElement from './CategoryElement';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface subCategory {
    id: number,
    label: string,
    image: string,
    backgroundColor: string
}

interface CarouselProps {
    id: number,
    label: string,
    subCategorie: subCategory[]
}

// translateX: 160px+20px



const Carousel: React.FC<CarouselProps> = ({
    id, label, subCategorie
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 8;
  const itemsPerSlide = 2;
  const itemWidth = 166;
  const gap = 20;

  const maxWidth = itemWidth * subCategorie.length + gap *  subCategorie.length

  const rect = ref.current?.getBoundingClientRect()
  console.log(rect)

  const maxIndex = Math.max(0, subCategorie.length - itemsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerSlide, maxIndex));
  }
    
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerSlide, 0));
    }
  }

  const translateX = -currentIndex * (itemWidth + gap);
  
  return (
    <div className='pl-6 flex flex-col gap-4'>
      <div className='flex w-full justify-between items-center '>
        <p className='text-white opacity-90 font-neutral text-[1.1rem]'>{label}</p>

        <div className='flex gap-5 pr-5'>
            <button onClick={handlePrev}>
                <FaArrowLeft />
            </button>

            <button  onClick={handleNext}>
                <FaArrowRight/>
            </button>
        </div>
      </div>

      <div className='flex  gap-5 transition-transform' style={{ transform: `translateX(${translateX}px)`}} ref={ref}>
        {subCategorie.map((subCategory, index) => 
          index === subCategorie.length-1 ? (
          <CategoryElement 
            key={index}
            id={subCategory.id}
            label={subCategory.label}
            backgroundColor={subCategory.backgroundColor}
            image={subCategory.image}
        />
      ) : (
          <CategoryElement 
                key={index}
                id={subCategory.id}
                label={subCategory.label}
                backgroundColor={subCategory.backgroundColor}
                image={subCategory.image}
                ref={lastElementRef}
            />
        )
          )}
      </div>
    </div>
  )
}

export default Carousel
