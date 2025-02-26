import SongElement from "@/components/smaller/SongElement"

export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <div className='flex flex-col gap-10 relative'>
      <div className="w-full h-full absolute top-0 left-0  z-10 bg-black "></div>
      <div className='w-3/5'>
        <h1 className='text-textPrimary --font-satoshi text-[1.1rem] font-semibold mb-5 tracking-widest'>Your Most Played</h1>

        <SongElement title='Song Name' authors={["Author"]} duration='0:00' id={1} cover={null} album='album name'/>
        <SongElement title='Song Name' authors={["Author"]} duration='0:00' id={1} cover={null} album='album name'/>
        <SongElement title='Song Name' authors={["Author"]} duration='0:00' id={1} cover={null} album='album name'/>
        <SongElement title='Song Name' authors={["Author"]} duration='0:00' id={1} cover={null} album='album name'/>
        <SongElement title='Song Name' authors={["Author"]} duration='0:00' id={1} cover={null} album='album name'/>
      </div>

      <div className='w-3/5'>
        <h1 className='text-textPrimary text-[1.1rem] font-semibold mb-5 tracking-widest'>Most Popular</h1>

        
      </div>


    </div>
    )
  }