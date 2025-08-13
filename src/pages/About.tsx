import CoreMemories from "../components/CoreMemories";
import aboutinfo from "../data/aboutinfo";
import StickyNote from "../components/StickyNote";
import InstagramPost from "../components/InstagramPost";
import MusicVideo from "../components/MusicVideo";

const About = () => {
  return (
    <>
      <div className="bg-slate-50 flex flex-col justify-center items-center gap-10 px-40">
        <h1 className="text-center py-4 justify-start text-zinc-800 text-5xl font-bold leading-[72px]">
          about me!
        </h1>

        {aboutinfo.map(
          (
            info: {
              title: string;
              content: string;
              mediaType: "image" | "video" | "frame";
              media: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row items-center justify-center my-6 gap-6 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <StickyNote
                title={info.title}
                content={info.content}
                color={index % 2 === 0 ? "yellow" : "pink"}
                alignment={index % 2 === 0 ? "left" : "right"}
                rotation={index % 2 === 0 ? -2 : 2}
              />

              {info.mediaType === "image" ? (
                <div className="w-110 h-70 flex items-center justify-center">
                  <img
                    src={info.media}
                    alt={`Media for ${info.title}`}
                    className="w-full h-full
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                cursor-pointer
                object-cover
                rounded-lg shadow-lg"
                  />
                </div>
              ) : info.mediaType === "video" ? (
                <div className="w-110 h-70 flex items-center justify-center">
                  <MusicVideo />
                </div>
              ) : info.mediaType === "frame" ? (
                <div className="w-80 h-60 flex items-center justify-center">
                  <InstagramPost />
                </div>
              ) : null}
            </div>
          )
        )}

        <CoreMemories />
      </div>
    </>
  );
};

export default About;
