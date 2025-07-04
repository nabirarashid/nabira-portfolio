import Image from '../assets/image.jpg'
import ProjectCard from '../components/ProjectCard'
import projects from "../data/projects"

// import Intro from '../components/Intro'
import Button from '../components/Button'

const Home = () => {

  const shuffledProjects = projects.sort(() => 0.5 - Math.random());
  const displayedProjects = shuffledProjects.slice(0,2);

  return (
    <div className="w-[1440px] h-[2991px] relative bg-slate-50 overflow-hidden">
  <div className="left-[624px] top-[2809px] absolute inline-flex flex-col justify-center items-center gap-8">
    <div className="inline-flex justify-start items-start gap-6">
      <div className="w-12 h-12 relative overflow-hidden">
        <div className="w-9 h-9 left-[5.25px] top-[5.25px] absolute bg-zinc-800" />
      </div>
      <div className="w-12 h-12 relative overflow-hidden">
        <div className="w-9 h-9 left-[5px] top-[5px] absolute bg-zinc-800" />
      </div>
      <div className="w-12 h-12 relative overflow-hidden">
        <div className="w-10 h-8 left-[3px] top-[8px] absolute bg-zinc-800" />
      </div>
    </div>
    <div className="justify-start text-zinc-500 text-base font-normal">nabira rashid 2025</div>
  </div>
  <div className="w-[720px] h-[629px] left-[720px] top-0 absolute overflow-hidden">
    <div className="w-[777px] h-[877px] left-0 top-[-248px] absolute bg-Schemes-Tertiary-Fixed-Dim" />
    <div className="w-[777px] h-[877px] left-0 top-[-248px] absolute bg-amber-400" />
    <img className="w-[720px] h-[629px] left-0 top-0 absolute" src={Image} alt="Profile Image" />
  </div>
  <div className="absolute top-[773px] w-full flex flex-col justify-center gap-20">
    <div className="flex flex-col justify-center items-center gap-1">
    <div className="text-center text-zinc-800 text-5xl font-bold leading-[72px]">some of my projects!</div>
      <div className="py-4 flex flex-col gap-10">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key = {index}
            name = {project.title}
            description = {project.description}
            link = {project.link}
            />
        ))}

    </div>
    </div>
    
    
  </div>
  <div className="w-[486px] left-[120px] top-[110px] absolute inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
    <div className="self-stretch justify-start text-zinc-800 text-xl font-bold font-['Nunito'] uppercase">high school student, developer</div>
    <div className="flex flex-col justify-start items-start gap-8">
      <div className="w-[486px] justify-start text-zinc-800 text-6xl font-bold font-['Playfair_Display'] leading-[76.80px]">hey,  my name is nabira</div>
      <div className="flex flex-col justify-start items-start gap-3">
        <div className="w-[486px] justify-start text-zinc-500 text-xl font-normal leading-9">hey there, i'm nabira! i'm an IB student from Oakville and my interests lie in computer science, technology and music. i love yapping and making new friends, so feel free to reach out :)</div>
      </div>
      <div className="w-96 inline-flex justify-start items-start gap-3">
        <Button
          text="projects"
          onClick={() => { window.location.href = "/projects"; }}
          className="justify-start items-start"
        />
        <Button 
          text="linkedin" 
          onClick={() => window.location.href = "https://www.linkedin.com/in/nabira-rashid-46338a283/"} 
          className ="justify-start items-start"
          />
        <Button 
          text="github" 
          onClick={() => window.location.href = "https://github.com/nabirarashid/"} 
          className = "justify-start items-start"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home