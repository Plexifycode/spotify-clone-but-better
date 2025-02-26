"use client"

import { usePathname } from 'next/navigation';
import Link from "next/link";

import React from 'react'

const ArtistPageLinks = ({name}: {name: string}) => {
    const pathname = usePathname();

    const ArtistsPageLinks = [
                {
                    label: "Home",
                    href: `/artists/${name}`,
                    active: pathname === `/artists/${name}` ? true : false,
                },
        
                {
                    label: "Albums",
                    href: `/artists/${name}/albums`,
                    active: pathname === `/artists/${name}/albums` ? true : false,
                },
        
                {
                    label: "Singles and EPs",
                    href: `/artists/${name}/singles-&-eps`,
                    active: pathname === `/artists/${name}/singles-&-eps` ? true : false,
                },
        
                {
                    label: "Compilations",
                    href: `/artists/${name}/compilations`,
                    active: pathname === `/artists/${name}/compilations` ? true : false,
                },
        
                {
                    label: "Merch",
                    href: `/artists/${name}/merch`,
                    active: pathname === `/artists/${name}/merch` ? true : false,
                },
        
                {
                    label: "About",
                    href: `/artists/${name}/about`,
                    active: pathname === `/artists/${name}/about` ? true : false,
                },
        
                {
                    label: "Features & More",
                    href: `/artists/${name}/features-&-more`,
                    active: pathname === `/artists/${name}/features-&-more` ? true : false,
                },
            ]
  return (
    <>
      {ArtistsPageLinks.map((link,index) => (
                    <Link
                        href={link.href}
                        key={index}
                        className={`
                            ${link.active 
                                ? "border-b-2 border-[#27D16D] pb-4  text-white" 
                                : "text-textPrimary border-b-none "}
                                text-[15px]
                                hover:cursor-pointer
                                px-2
                            `}
                    >{link.label}</Link>
                ))}
    </>
  )
}

export default ArtistPageLinks
