"use client"
import React, { createContext, useContext } from 'react';

interface Artist { id: number; name: string; href: string; albums: string; albumCount: number; pfp: string; banner: string; label: string; }

const ArtistContext = createContext<Artist | null>(null);

export const ArtistProvider: React.FC<{ artist: Artist | null; children: React.ReactNode }> = ({ artist, children }) => {
  return (
    <ArtistContext.Provider value={artist}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => {
  return useContext(ArtistContext);
};
