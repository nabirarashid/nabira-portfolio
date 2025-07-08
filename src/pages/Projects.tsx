import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"
import Typewriter from "typewriter-effect"

const Projects = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center gap-1">
      <h1 className="text-center py-4 justify-start text-zinc-800 text-5xl font-bold leading-[72px]">my projects</h1>
      <Typewriter
        options={{
          strings: [
            "i'm currently learning DSA and improving my web dev skills!",
            "i'm working on RAG & langchain with different LLMS!",
            "check out my projects on github!"
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20,
          cursor: "|",
          wrapperClassName: "text-zinc-500 text-lg font-semibold text-center"
        }}
      />
      <div className="py-4 flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key = {index}
            name = {project.title}
            description = {project.description}
            link = {project.link}
            techStack = {project.techStack}
            details = {project.details}
            />
        ))}

    </div>

    <div className="py-6">ps: this website is made by me using React & TailwindCSS</div>
  </div>
  )
}

export default Projects