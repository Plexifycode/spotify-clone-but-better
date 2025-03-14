import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SongDetailsProps {
    id: number,
    title: string,
    selectedSong: boolean,
    onClick: () => void
    cover: string | null,
    album: string | undefined,
    authors: string[]
}

const SongDetails: React.FC<SongDetailsProps> = ({
    id, selectedSong, cover, album, authors, title, onClick
}) => {
  return (
    <button className={`${selectedSong ? "bg-[#363636] " : "group-hover:bg-[#222] bg-transparent "} w-full transition px-[4rem] items-center py-2 rounded-md`} onClick={onClick}>
        <div className='flex gap-3'>
          {cover ? (
            <Image src={cover} alt={`${album} cover `} width={51} height={50} className='rounded-sm'/>
          ) : ""
          }

          
          <div className='flex flex-col justify-between'>
            <h1 className='text-left  text-white'>{title} {selectedSong}</h1>

            <div className='flex gap-2 '>
              
              {authors.map((author, index) => {
                const lowerCaseAuthor = author.toLocaleLowerCase();
                const splittedAuthor = lowerCaseAuthor.split(" ");
                const normalizedAuthor = splittedAuthor.join("-")
                return (
                  <div className='flex items-center gap-[2px]' key={index}>
                    <Link
                      
                      className='text-sm max-w-[13rem] text-ellipsis overflow-hidden'
                      href={normalizedAuthor}
                    >
                      {author}
                      
                    </Link>

                    <span className='text-xl '>{authors.length - 1 === index ? '' : ','}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div></div>

        
    </button>
  )
}

export default SongDetails
