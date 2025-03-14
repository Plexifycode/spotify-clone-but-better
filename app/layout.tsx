import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Library from "../components/main/Library";
import Navbar from "../components/main/Navbar";
import PlayBar from "@/components/main/PlayBar";

import { MusicProvider } from "@/lib/PlayStateContext";


const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Black.otf",
      
    },
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      
    },
    {
      path: '../public/fonts/Satoshi-Light.otf',
      
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      
    },
    {
      path: '../public/fonts/Satoshi-Regular.otf',
      
    },
    
  ],
  variable: '--font-satoshi',
})

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-Black.ttf",
    },

    {
      path: "../public/fonts/Raleway-Bold.ttf",
    },

    {
      path: "../public/fonts/Raleway-ExtraBold.ttf",
    },
  ],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Spotify Clone (better)",
  description: "Made by @plexify.code, desing is not mine, design author: Juxtopossed on yt",
};

const initialSong = {
  title: "Initial Song",
  artists: ["Artist 1"],
  duration: "3:00",
  albumCover: "url-to-cover",
  albumTitle: "Initial Album",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${roboto.variable}  antialiased`}
      >
          <MusicProvider>
            <div className="
              text-textPrimary
              w-screen
              h-screen
              grid
              grid-cols-[15%,84%]
              grid-rows-[6%,86%,7.5%]
            ">
              <div className="row-span-3">
                <Library />
              </div>

              <Navbar />
              
              <div className="w-full overflow-auto  border-[2.7px] border-[#181414] rounded-md mb-2">
                {children}
              </div>

              <PlayBar />
            </div>
          </MusicProvider>
      </body>
    </html>
  );
}
