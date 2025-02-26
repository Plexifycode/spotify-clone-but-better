import { NextResponse } from 'next/server';

const artists = [
  
    {
      id: 1,
      name: "Taco Hemingway",
      href: "https://open.spotify.com/artist/5SyGEPymt1G2uto47tVWvZ",
      albums: ["Marmur", "Pocztówka z WWA, lato ‘19", "Szprycer", "Europa"],
      albumCount: 4,
      pfp: "https://link-to-taco-pfp.jpg",
      banner: "https://link-to-taco-banner.jpg",
      label: "2020",
    },
    {
      id: 2,
      name: "Quebonafide",
      href: "https://open.spotify.com/artist/3nmyv5cvLtbPqUGTKIVgYJ",
      albums: ["Egzotyka", "Romantic Psycho", "Ezoteryka"],
      albumCount: 3,
      pfp: "https://link-to-quebo-pfp.jpg",
      banner: "https://link-to-quebo-banner.jpg",
      label: "QueQuality",
    },
    {
      id: 3,
      name: "O.S.T.R.",
      href: "https://open.spotify.com/artist/2a6cbH7i7jUEgsB6pk29K7",
      albums: ["Podróż zwana życiem", "Gniew", "Życie po śmierci"],
      albumCount: 3,
      pfp: "https://link-to-ostr-pfp.jpg",
      banner: "https://link-to-ostr-banner.jpg",
      label: "Asfalt Records",
    },
  
    // Zagraniczni artyści
    {
      id: 4,
      name: "Kendrick Lamar",
      href: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg",
      albums: ["good kid, m.A.A.d city", "To Pimp a Butterfly", "DAMN.", "Mr. Morale & The Big Steppers"],
      albumCount: 4,
      pfp: "https://link-to-kendrick-pfp.jpg",
      banner: "https://link-to-kendrick-banner.jpg",
      label: "Top Dawg Entertainment",
    },
    {
      id: 5,
      name: "J. Cole",
      href: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
      albums: ["2014 Forest Hills Drive", "KOD", "The Off-Season"],
      albumCount: 3,
      pfp: "https://link-to-jcole-pfp.jpg",
      banner: "https://link-to-jcole-banner.jpg",
      label: "Dreamville Records",
    },
    {
      id: 6,
      name: "Drake",
      href: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
      albums: ["Take Care", "Nothing Was the Same", "Scorpion", "Certified Lover Boy"],
      albumCount: 4,
      pfp: "https://link-to-drake-pfp.jpg",
      banner: "https://link-to-drake-banner.jpg",
      label: "OVO Sound",
    },
  ];

  export async function GET() {
    return NextResponse.json(artists);
  }
  
  // POST request to add a new song
  export async function POST(request) {
    const body = await request.json();
    artists.push({ id: artists.id + 1, name: body.name });
    return NextResponse.json({ message: 'Song added!' });
  }
  