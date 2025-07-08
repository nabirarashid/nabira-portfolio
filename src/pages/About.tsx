import CoreMemories from "../components/CoreMemories"
import aboutinfo from "../data/aboutinfo"
import StickyNote from "../components/StickyNote"
import InstagramPost from "../components/InstagramPost"
import MusicVideo from "../components/MusicVideo"

const About = () => {
  return (
    <>
    <div className="bg-slate-50 flex flex-col justify-center items-center gap-10 px-40">
      <h1 className="text-center py-4 justify-start text-zinc-800 text-5xl font-bold leading-[72px]">about me!</h1>

      { aboutinfo.map((info, index) => (
      
      <div
        key={index}
        className={`w-full flex flex-col md:flex-row items-center justify-center my-6 gap-6 ${
          index % 2 === 0 ? '' : 'md:flex-row-reverse'
        }`}
      >
        <StickyNote
          title={info.title}
          content={info.content}
          color={ index % 2 === 0 ? 'yellow' : 'pink'}
          alignment={index % 2 === 0 ? 'left' : 'right'}
          rotation={index % 2 === 0 ? -2 : 2}
        />

        {info.mediaType === "image" ? (
          <img
            src={info.media}
            alt={`Media for ${info.title}`}
            className="w-110 h-70 
              transition-all duration-300
              hover:scale-105 hover:shadow-xl
              cursor-pointer
              object-cover hover:scale-105 
              rounded-lg shadow-lg"
          />
        ) : info.mediaType === "video" ? (
          <MusicVideo />
          
        ) : info.mediaType === "frame" ? (
          < InstagramPost />
        ) : null}
      </div>

      ))}


      <h2 className="text-3xl font-bold">Photo Gallery</h2>
      <CoreMemories />

    </div>
</>
  )
}

export default About