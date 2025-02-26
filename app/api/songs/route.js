import { NextResponse } from 'next/server';

let okiAlbums = [
  {
      id: 1,
      albumCover: "/artists/oki/albums-covers/oki&nearr.jpg",
      title: "Oki & Nearr",
      authors: ["Oki", "Nearr"],
      releaseDate: "30.03.2018",
      length: "0 30 44",
      songsNamesList: [
          "Introdukcja",
          "Cześć, Oki",
          "Ślad",
          "Pokora",
          "Żyjemy",
          "Mam W Skit",
          "Mam W Nich",
          "Wstyd",
          "Fake",
          "Tjt"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "Introdukcja",
              artists: ["Oki", "Nearr"],
              additionalInfo: "207 448",
              songLength: "1:35",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Cześć, Oki",
              artists: ["Oki", "Nearr"],
              additionalInfo: "377 278",
              songLength: "3:34",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Ślad",
              artists: ["Oki", "Nearr"],
              additionalInfo: "248 362",
              songLength: "3:42",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Pokora",
              artists: ["Oki", "Nearr", "GIRSON", "DJ Blaki Selektah"],
              additionalInfo: "206 500",
              songLength: "3:27",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Żyjemy",
              artists: ["Oki", "Nearr"],
              additionalInfo: "178 446",
              songLength: "3:26",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Mam W Skit",
              artists: ["Oki", "Nearr"],
              additionalInfo: " ",
              songLength: "0:19",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Mam W Nich",
              artists: ["Oki", "Nearr"],
              additionalInfo: "249 192",
              songLength: "3:38",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Wstyd",
              artists: ["Oki", "Nearr", "GIRSON"],
              additionalInfo: "160 363",
              songLength: "3:46",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "Fake",
              artists: ["Oki", "Nearr", "senti"],
              additionalInfo: "159 215",
              songLength: "4:10",
              isLiked: false,
          },

          {
              id: 10,
              songCover: "",
              songName: "Tjt",
              artists: ["Oki", "Nearr"],
              additionalInfo: "242 283",
              songLength: "3:04",
              isLiked: false,
          },
       ],
      amountOfSongs: 10
  },

  {
      id: 2,
      albumCover: "/artists/oki/albums-covers/47universe.jpg",
      title: "47universe",
      authors: ["Oki"],
      releaseDate: "25.03.2019",
      length: "0 26 10",
      songsNamesList: [
          "47universe Arrival",
          "Drug",
          "Bije W Serce",
          "Fre4sty7e",
          "Zimna Wodka",
          "Pokolenie 98",
          "Musze Zyc",
          "Whoop?",
          "Vestax"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "47universe Arrival",
              artists: ["Oki"],
              additionalInfo: "607 466",
              songLength: "1:46",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Drug",
              artists: ["Oki", "The Returners"],
              additionalInfo: "782 179",
              songLength: "3:08",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Bije W Serce",
              artists: ["Oki"],
              additionalInfo: "692 314",
              songLength: "2:22",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Fre4sty7e",
              artists: ["Oki"],
              additionalInfo: "3 155 224",
              songLength: "1:59",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Zimna Wodka",
              artists: ["Oki"],
              additionalInfo: "2 166 032",
              songLength: "2:41",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Pokolenie 98",
              artists: ["Oki"],
              additionalInfo: "789 907",
              songLength: "3:05",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Musze Zyc",
              artists: ["Oki"],
              additionalInfo: "565 180",
              songLength: "3:15",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Whoop?",
              artists: ["Oki"],
              additionalInfo: "22 104 306",
              songLength: "3:32",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "Vestax",
              artists: ["Oki"],
              additionalInfo: "558 105",
              songLength: "4:18",
              isLiked: false,
          },
       ],
      amountOfSongs: 9
  },

  {
      id: 3,
      albumCover: "/artists/oki/albums-covers/47playground.jpg",
      title: "47playground",
      authors: ["Oki"],
      releaseDate: "10.01.2020",
      length: "0 34 12",
      songsNamesList: [
          "Ktoś czeka",
          "Voodoo",
          "Dysze",
          "Justin Bieber",
          "Na kodach",
          "Pull Up Faded",
          "Flashlight",
          "Kochać bloki",
          "Wracam do domu",
          "Tyle próśb"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "I To Jest Fakt",
              artists: ["Oki", "Magiera"],
              additionalInfo: "23 619 517",
              songLength: "1:11",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Perły",
              artists: ["Oki", "PSR"],
              additionalInfo: "7 886 484",
              songLength: "2:22",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Dzielny Pacjent",
              artists: ["Oki", "Sobel", "Young Igi", "Sekko"],
              additionalInfo: "15 047 532",
              songLength: "2:38",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Jeżyk!",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "52 366 061",
              songLength: "3:28",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Albo Jest Zajebiście Albo Jest Smutno",
              artists: ["Oki", "Young Igi", "@atutowy"],
              additionalInfo: "8 591 404",
              songLength: "3:13",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Stado Hartów",
              artists: ["Oki", "PSR", "Phunk'ill"],
              additionalInfo: "5 691 557",
              songLength: "2:41",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Jakie To Uczucie?",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "65 133 782",
              songLength: "2:42",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Sonic Skit",
              artists: ["Oki", "Bohdi"],
              additionalInfo: "40 063 606",
              songLength: "1:03",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "ADHD",
              artists: ["Oki", "Taco Hemingway", "PSR"],
              additionalInfo: "18 989 989",
              songLength: "3:35",
              isLiked: false,
          },
       ],
      amountOfSongs: 10
  },

  {
      id: 4,
      albumCover: "/artists/oki/albums-covers/77747mixtape.jpg",
      title: "77747mixtape",
      authors: ["Oki"],
      releaseDate: "25.09.2020",
      length: "0 40 42",
      songsNamesList: [
          "7747",
          "DLA ZIOMAL",
          "JEDEN DZIEŃ",
          "POLITYK",
          "ZA KAŻDĄ Z MOICH PRÓŚB",
          "NOWY CZEK",
          "SIRI",
          "SKIT O MARIHUANIE",
          "50 CENTÓW",
          "TAK BARDZO",
          "SUK",
          "NIE MARTW SIĘ MAMO",
          "OBRACAM KOŁEM",
          "TRUP"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "I To Jest Fakt",
              artists: ["Oki", "Magiera"],
              additionalInfo: "23 619 517",
              songLength: "1:11",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Perły",
              artists: ["Oki", "PSR"],
              additionalInfo: "7 886 484",
              songLength: "2:22",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Dzielny Pacjent",
              artists: ["Oki", "Sobel", "Young Igi", "Sekko"],
              additionalInfo: "15 047 532",
              songLength: "2:38",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Jeżyk!",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "52 366 061",
              songLength: "3:28",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Albo Jest Zajebiście Albo Jest Smutno",
              artists: ["Oki", "Young Igi", "@atutowy"],
              additionalInfo: "8 591 404",
              songLength: "3:13",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Stado Hartów",
              artists: ["Oki", "PSR", "Phunk'ill"],
              additionalInfo: "5 691 557",
              songLength: "2:41",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Jakie To Uczucie?",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "65 133 782",
              songLength: "2:42",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Sonic Skit",
              artists: ["Oki", "Bohdi"],
              additionalInfo: "40 063 606",
              songLength: "1:03",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "ADHD",
              artists: ["Oki", "Taco Hemingway", "PSR"],
              additionalInfo: "18 989 989",
              songLength: "3:35",
              isLiked: false,
          },
       ],
      amountOfSongs: 14
  },

  {
      id: 5,
      albumCover: "/artists/oki/albums-covers/oio.jpg",
      title: "OIO",
      authors: ["Oki", "Young Igi", "Otsochodzi"],
      releaseDate: "06.05.2021",
      length: "0 45 0",
      songsNamesList: [
          "Biggie",
          "Moonwalk",
          "Podzielony",
          "Jak To Ma Być",
          "Potłuczone Szkła",
          "Amerykańskie Teledyski",
          "Morze Łez",
          "Worki W Tłum",
          "MVP",
          "Przypadkiem",
          "5 AM",
          "Transparentny",
          "Trendsetting",
          "WMTB",
          "Paleta Barw"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "I To Jest Fakt",
              artists: ["Oki", "Magiera"],
              additionalInfo: "23 619 517",
              songLength: "1:11",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Perły",
              artists: ["Oki", "PSR"],
              additionalInfo: "7 886 484",
              songLength: "2:22",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Dzielny Pacjent",
              artists: ["Oki", "Sobel", "Young Igi", "Sekko"],
              additionalInfo: "15 047 532",
              songLength: "2:38",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Jeżyk!",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "52 366 061",
              songLength: "3:28",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Albo Jest Zajebiście Albo Jest Smutno",
              artists: ["Oki", "Young Igi", "@atutowy"],
              additionalInfo: "8 591 404",
              songLength: "3:13",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Stado Hartów",
              artists: ["Oki", "PSR", "Phunk'ill"],
              additionalInfo: "5 691 557",
              songLength: "2:41",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Jakie To Uczucie?",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "65 133 782",
              songLength: "2:42",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Sonic Skit",
              artists: ["Oki", "Bohdi"],
              additionalInfo: "40 063 606",
              songLength: "1:03",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "ADHD",
              artists: ["Oki", "Taco Hemingway", "PSR"],
              additionalInfo: "18 989 989",
              songLength: "3:35",
              isLiked: false,
          },
       ],
      amountOfSongs: 15
  },

  {
      id: 6,
      albumCover: "/artists/oki/albums-covers/produkt47.jpg",
      title: "PRODUKT47",
      authors: ["Oki"],
      releaseDate: "09.06.2022",
      length: "0 47 44",
      songsNamesList: [
          "I To Jest Fakt",
          "Perły",
          "Dzielny Pacjent",
          "Jeżyk!",
          "Albo Jest Zajebiście Albo Jest Smutno",
          "Stado Hartów",
          "Jakie To Uczucie?",
          "Sonic Skit",
          "ADHD",
          "Od Środy Do Wtorku",
          "Pieniądze, Dziewczyny, Zwrotki",
          "Fresh Water Soda",
          "Po Co Ten Foch?",
          "Doja Cat",
          "Bardziej Sobą Niż Kiedykolwiek",
          "Total Bandits Polne",
          "Zwariowane Polne"
      ],
      songsList: [
          {
              id: 1,
              songCover: "",
              songName: "I To Jest Fakt",
              artists: ["Oki", "Magiera"],
              additionalInfo: "23 619 517",
              songLength: "1:11",
              isLiked: false,
          },
      
          {
              id: 2,
              songCover: "",
              songName: "Perły",
              artists: ["Oki", "PSR"],
              additionalInfo: "7 886 484",
              songLength: "2:22",
              isLiked: false,
          },
      
          {
              id: 3,
              songCover: "",
              songName: "Dzielny Pacjent",
              artists: ["Oki", "Sobel", "Young Igi", "Sekko"],
              additionalInfo: "15 047 532",
              songLength: "2:38",
              isLiked: false,
          },
      
          {
              id: 4,
              songCover: "",
              songName: "Jeżyk!",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "52 366 061",
              songLength: "3:28",
              isLiked: false,
          },
      
          {
              id: 5,
              songCover: "",
              songName: "Albo Jest Zajebiście Albo Jest Smutno",
              artists: ["Oki", "Young Igi", "@atutowy"],
              additionalInfo: "8 591 404",
              songLength: "3:13",
              isLiked: false,
          },
      
          {
              id: 6,
              songCover: "",
              songName: "Stado Hartów",
              artists: ["Oki", "PSR", "Phunk'ill"],
              additionalInfo: "5 691 557",
              songLength: "2:41",
              isLiked: false,
          },
      
          {
              id: 7,
              songCover: "",
              songName: "Jakie To Uczucie?",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "65 133 782",
              songLength: "2:42",
              isLiked: false,
          },
      
          {
              id: 8,
              songCover: "",
              songName: "Sonic Skit",
              artists: ["Oki", "Bohdi"],
              additionalInfo: "40 063 606",
              songLength: "1:03",
              isLiked: false,
          },
      
          {
              id: 9,
              songCover: "",
              songName: "ADHD",
              artists: ["Oki", "Taco Hemingway", "PSR"],
              additionalInfo: "18 989 989",
              songLength: "3:35",
              isLiked: false,
          },
      
          {
              id: 10,
              songCover: "",
              songName: "Od Środy Do Wtorku",
              artists: ["Oki", "Nolyrics Beats"],
              additionalInfo: "4 866 130",
              songLength: "2:09",
              isLiked: false,
          },
      
          {
              id: 11,
              songCover: "",
              songName: "Pieniądze, Dziewczyny, Zwrotki",
              artists: ["Oki", "@atutowy"],
              additionalInfo: "29 423 930",
              songLength: "3:03",
              isLiked: false,
          },
      
          {
              id: 12,
              songCover: "",
              songName: "Fresh Water Soda",
              artists: ["Oki", "OSQAR", "SHDØW"],
              additionalInfo: "10 543 546",
              songLength: "2:28",
              isLiked: false,
          },
      
          {
              id: 13,
              songCover: "",
              songName: "Po Co Ten Foch?",
              artists: ["Oki", "Paluch", "maro"],
              additionalInfo: "4 760 593",
              songLength: "2:47",
              isLiked: false,
          },
      
          {
              id: 14,
              songCover: "",
              songName: "Doja Cat",
              artists: ["Oki", "@atutowy"],
              additionalInfo: "37 953 484",
              songLength: "2:47",
              isLiked: false,
          },
      
          {
              id: 15,
              songCover: "",
              songName: "Bardziej Sobą Niż Kiedykolwiek",
              artists: ["Oki", "@atutowy"],
              additionalInfo: "4 499 246",
              songLength: "3:31",
              isLiked: false,
          },
      
          {
              id: 16,
              songCover: "",
              songName: "Total Bandits Polne",
              artists: ["Oki", "Harnol Gang", "Master Orbit"],
              additionalInfo: "2 156 072",
              songLength: "4:47",
              isLiked: false,
          },
      
          {
              id: 17,
              songCover: "",
              songName: "Zwariowane Melodie",
              artists: ["Oki", "@atutowy"],
              additionalInfo: "3 501 005",
              songLength: "3:10",
              isLiked: false,
          },
      ], 
      amountOfSongs: 17
  },

  {
      id: 7,
      albumCover: "/artists/oki/albums-covers/era47.jpg",
      title: "ERA47",
      authors: ["Oki"],
      releaseDate: "06.06.2024",
      length: "0 54 38",
      songsNamesList: [
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
      songsList: [
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
      ],
      amountOfSongs: 20
  },
]

// GET request to fetch all songs
export async function GET() {
  return NextResponse.json(okiAlbums);
}

// POST request to add a new song
export async function POST(request) {
  const body = await request.json();
  okiAlbums.push({ id: okiAlbums.id + 1, name: body.title });
  return NextResponse.json({ message: 'Song added!' });
}
