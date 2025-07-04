import CoreMemories from "../components/CoreMemories"
import aboutinfo from "../data/aboutinfo"
import StickyNote from "../components/StickyNote"

const About = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-10 px-40">
      <h1 className="text-center py-4 justify-start text-zinc-800 text-5xl font-bold leading-[72px]">about me!</h1>
      { aboutinfo.map((info, index) => (
        <StickyNote
        key={index}
        title={info.title}
        content={info.content}
        alignment={index % 2 === 0 ? 'left' : 'right'}
        rotation={index % 2 === 0 ? -2 : 2}
        />
      ))}

      <h2 className="text-3xl font-bold">Photo Gallery</h2>
      <CoreMemories />

    </div>
</>
  )
}

export default About