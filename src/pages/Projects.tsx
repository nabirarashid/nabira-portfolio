import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h1 className="text-center py-4 justify-start text-zinc-800 text-5xl font-bold leading-[72px]">my projects</h1>

      <div className="py-4 flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key = {index}
            name = {project.title}
            description = {project.description}
            link = {project.link}
            />
        ))}

    </div>

    <div className="py-6">ps: this website is made by me using React & TailwindCSS</div>
  </div>
  )
}

export default Projects