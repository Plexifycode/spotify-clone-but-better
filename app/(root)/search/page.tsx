import React from 'react';

import Carousel from '@/components/smaller/Carousel';

import { categorieItems } from '@/hardcoded/categories'; // hardcoded values

export default async function page() {
  
  //await new Promise((resolve) => setTimeout(resolve, 100000));

  return (
    
    <div className='px-6 py-4'>
      <h1 className='font-black text-white text-xl mb-8'>Browse all</h1>

      <div className='flex flex-col gap-8 -ml-6 overflow-x-hidden '>
          {categorieItems.map((category, index) => (
            <Carousel
              key={index}
              label={category.label}
              id={category.id}
              subCategorie={category.categoriesList}
            />
          ))}
      </div>
    </div>
  )
}


