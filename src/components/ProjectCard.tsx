interface Props {
  name: string;
  description: string;
  link: string;
}
const ProjectCard = ( {name, description, link} : Props) => {
  return (
    <div className="w-[800px] h-[400px] outline outline-6 outline-pink-900 rounded-3xl shadow-[0px_6px_64px_0px_rgba(112,144,176,0.10)] inline-flex justify-start items-start overflow-hidden">
          <div className="w-[496px] h-[524px] relative bg-white">
            <div className="w-96 left-[50.44px] top-[100px] absolute inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start text-zinc-800 text-3xl font-bold leading-[60px]">{ name }</div>
              <div className="self-stretch justify-start text-zinc-500 text-lg font-normal leading-relaxed">{ description }</div>
              <div className="px-6 py-2 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-start items-start">
                <a href={ link }  target="_blank"   rel="noopener noreferrer" 
                className="justify-start text-zinc-800 text-lg font-medium leading-relaxed">
                    view project!
                    </a>
              </div>
            </div>
          </div>
          <img className="w-[px] h-[400px]" src="https://placehold.co/496x526" />
        </div>
  )
}

export default ProjectCard