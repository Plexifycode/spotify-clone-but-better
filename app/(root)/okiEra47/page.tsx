import React from 'react'
import AlbumPage from "@/components/AlbumPage";


const page = () => {
    const okiEra47Songs = [
        {
            id: 1,
            songCover: "",
            songName: "WODA SODOWA",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "11 903 855",
            songLength: "2:35",
            isLiked: false,
        },
    
        {
            id: 2,
            songCover: "",
            songName: "NIEWOLNIK",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "4 494 218",
            songLength: "2:03",
            isLiked: false,
        },
    
        {
            id: 3,
            songCover: "",
            songName: "CERTIFIED LOVER",
            artists: ["Oki", "Bedoes 2115", "@atutowy"],
            additionalInfo: "6 972 241",
            songLength: "2:39",
            isLiked: false,
        },
    
        {
            id: 4,
            songCover: "",
            songName: "SPRZEDAŁEM SIĘ",
            artists: ["Oki", "Swizzy", "Worek", "Nolyrics Beats"],
            additionalInfo: "29 516 154",
            songLength: "3:27",
            isLiked: false,
        },
    
        {
            id: 5,
            songCover: "",
            songName: "PUK PUK PUK",
            artists: ["Oki", "Otsochodzi", "@atutowy"],
            additionalInfo: "3 267 782",
            songLength: "2:35",
            isLiked: false,
        },
    
        {
            id: 6,
            songCover: "",
            songName: "JEREMY SOCHAN SKIT",
            artists: ["Oki"],
            additionalInfo: "8115",
            songLength: "0:19",
            isLiked: false,
        },
    
        {
            id: 7,
            songCover: "",
            songName: "JEREMY SOCHAN",
            artists: ["Oki", "bvdy47"],
            additionalInfo: "41 626 131",
            songLength: "2:25",
            isLiked: false,
        },
    
        {
            id: 8,
            songCover: "",
            songName: "ŻYCIE TO ZA MAŁO",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "4 589 096",
            songLength: "2:18",
            isLiked: false,
        },
    
        {
            id: 9,
            songCover: "",
            songName: "ILE LAT?",
            artists: ["Oki", "Sobel", "@atutowy"],
            additionalInfo: "33 133 571",
            songLength: "2:30",
            isLiked: false,
        },
    
        {
            id: 10,
            songCover: "",
            songName: "JESTEŚMY ZA MŁODZI",
            artists: ["Oki", "Oskar83", "@atutowy"],
            additionalInfo: "2 856 487",
            songLength: "3:12",
            isLiked: false,
        },
    
        {
            id: 11,
            songCover: "",
            songName: "NA ZAWSZE MAŁOLAT",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "8 596 105",
            songLength: "2:54",
            isLiked: false,
        },
    
        {
            id: 12,
            songCover: "",
            songName: "OD ZERA",
            artists: ["Oki", "Blaki Selektah", "Deemz", "The Returners"],
            additionalInfo: "2 136 637",
            songLength: "4:42",
            isLiked: false,
        },
    
        {
            id: 13,
            songCover: "",
            songName: "JEŚLI CHCIAŁBYŚ TO MOŻESZ WPAŚĆ",
            artists: ["Oki", "Kuban", "@atutowy"],
            additionalInfo: "3 292 179",
            songLength: "2:20",
            isLiked: false,
        },
    
        {
            id: 14,
            songCover: "",
            songName: "WRAK",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "9 270 730",
            songLength: "3:19",
            isLiked: false,
        },
    
        {
            id: 15,
            songCover: "",
            songName: "SEROTONINA",
            artists: ["Oki", "SHDØW"],
            additionalInfo: "2 118 593",
            songLength: "2:23",
            isLiked: false,
        },
    
        {
            id: 16,
            songCover: "",
            songName: "QUAD STUDIO FREESTYLE",
            artists: ["Oki", "bvdy47"],
            additionalInfo: "4 500 814",
            songLength: "2:28",
            isLiked: false,
        },
    
        {
            id: 17,
            songCover: "",
            songName: "KAUCJA",
            artists: ["Oki", "bvdy47"],
            additionalInfo: "16 520 787",
            songLength: "2:27",
            isLiked: false,
        },
    
        {
            id: 18,
            songCover: "",
            songName: "OK OK OK",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "3 455 947",
            songLength: "3:36",
            isLiked: false,
        },
    
        {
            id: 19,
            songCover: "",
            songName: "DOM",
            artists: ["Oki", "Young Igi", "SHDØW"],
            additionalInfo: "2 057 737",
            songLength: "3:30",
            isLiked: false,
        },
    
    
        {
            id: 20,
            songCover: "",
            songName: "AGENT47",
            artists: ["Oki", "@atutowy"],
            additionalInfo: "14 868 229",
            songLength: "2:47",
            isLiked: false,
        },
    ];

   const era47 =  {
        id: 6,
        cover: "/artists/oki/albums-covers/era47.jpg",
        title: "ERA47",
        authors: ["Oki"],
        features: ["Taco Hemingway", "Bedoes 2115", "Sobel", "Otsochodzi", "Young Igi", "Oskar83", "Blaki Selektah", "Kuban"],
        producers: ["@atutowy", "bvdy47", "Swizzy", "SHDØW", "Deemz", "The Returners", "Nolyrics Beats", "Worek"],
        releaseDate: "06.06.2024",
        duration: "0 54 38",
        songsList: [
            "WODA SODOWA",
            "NIEWOLNIK",
            "CERTIFIED LOVER",
            "SPRZEDAŁEM SIĘ",
            "PUK PUK PUK",
            "JEREMY SOCHAN SKIT",
            "JEREMY SOCHAN",
            "ŻYCIE TO ZA MAŁO",
            "ILE LAT?",
            "JESTEŚMY ZA MŁODZI",
            "NA ZAWSZE MAŁOLAT",
            "OD ZERA",
            "JEŚLI CHCIAŁBYŚ TO MOŻESZ WPAŚĆ",
            "WRAK",
            "SEROTONINA",
            "QUAD STUDIO FREESTYLE",
            "KAUCJA",
            "OK OK OK",
            "DOM",
            "AGENT47"
        ],
        songsCount: 20,
        genres: ["Japanese Hip Hop/Rap", "UK Rap", "Rap Queb", "Hip Hop", "Rap", "J-Pop"]
    }

  return (
    <div className='w-full px-6 '>
      <AlbumPage
        albumName={era47.title}
        key={era47.id}
        artists={era47.authors}
        features={era47.features}
        producers={era47.producers}
        normalizedArtists={era47.authors.map((author) => author.trim().toLowerCase())}
        yearOfRelease='2024'
        songsCount={era47.songsCount}
        albumLength={era47.duration}
        genres={era47.genres}
      />
    </div>
  )
}

export default page
