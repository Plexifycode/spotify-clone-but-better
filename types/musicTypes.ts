export interface Song {
    id: string | number; 
    title: string;
    artists: string[];
    album: string; 
    duration: string; 
    url: string;      
    coverImage?: string; 
}


// Music Context types

// Loop mode type
export type LoopMode = 'none' | 'one' | 'all';
  
// Type for the context value
export interface MusicContextValue {
    currentSong: Song | null;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    shuffleMode: boolean;
    playlist: Song[];
    loopMode: LoopMode;
    togglePlay: () => void;
    next: () => void;
    previous: () => void;
    toggleShuffle: () => void;
    setLoop: (mode: LoopMode) => void;
    setCurrentSong: (song: Song | null) => void;
    setPlaylist: (playlist: Song[]) => void;
}

