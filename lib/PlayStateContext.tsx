"use client" 

import React, { useContext, createContext, useState, useCallback } from "react";

import { Song, LoopMode, MusicContextValue } from "@/types/musicTypes";

export const MusicContext = createContext<MusicContextValue | null>(null);

const MusicProvider = ({children} : {children: React.ReactNode}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [shuffleMode, setShuffleMode] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [loopMode, setLoopMode] = useState<LoopMode>('none');

  // Internal functions (using useCallback for optimization)
  const _togglePlay = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, []);

  const _next = useCallback(() => {
    const currentIndex = playlist.findIndex(song => song.id === currentSong?.id); // Use findIndex
    let nextIndex: number;

    if (shuffleMode) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else if (loopMode === 'all') {
      nextIndex = (currentIndex + 1) % playlist.length;
    } else {
      nextIndex = currentIndex + 1;
      if (nextIndex >= playlist.length) {
        nextIndex = -1; // Use -1 for "no next song"
      }
    }
    if (nextIndex !== -1 && playlist[nextIndex]) {
        setCurrentSong(playlist[nextIndex]);
    } else {
        setCurrentSong(null) //set to null
        setIsPlaying(false); //stop playing when is end of playlist
    }
  }, [playlist, currentSong, shuffleMode, loopMode]);


  const _previous = useCallback(() => {
    const currentIndex = playlist.findIndex(song => song.id === currentSong?.id); // Use findIndex
    let previousIndex: number;

    if (shuffleMode) {
      previousIndex = Math.floor(Math.random() * playlist.length);
    } else if (loopMode === 'all') {
      previousIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    } else {
      previousIndex = currentIndex - 1;
    }

    if (previousIndex >= 0 && playlist[previousIndex]) {
      setCurrentSong(playlist[previousIndex]);
    }
  }, [playlist, currentSong, shuffleMode, loopMode]);

  const _toggleShuffle = useCallback(() => {
    setShuffleMode((prevShuffleMode) => !prevShuffleMode);
  }, []);

  const _setLoop = useCallback((mode: LoopMode) => {
    setLoopMode(mode);
  }, []);


  const contextValue: MusicContextValue = {
    currentSong,
    isPlaying,
    setIsPlaying,
    shuffleMode,
    playlist,
    loopMode,
    togglePlay: _togglePlay,
    next: _next,
    previous: _previous,
    toggleShuffle: _toggleShuffle,
    setLoop: _setLoop,
    setCurrentSong,
    setPlaylist,
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
}

const useMusic = () => {
    const context = useContext(MusicContext);

    if (!context) {
        throw new Error('PlayStateContext must be used within PlayStateContextProvider!');
    }

    return context;
}

export { MusicProvider, useMusic };