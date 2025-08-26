import ProjectCard from "../components/ProjectCard";
import projects, { Project } from "../data/projects";
import Typewriter from "typewriter-effect";
import Button from "../components/Button";

const Home = () => {
  const shuffledProjects = projects.sort(() => 0.5 - Math.random());
  const displayedProjects = shuffledProjects.slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-[120px] py-20">
            <div className="flex flex-col gap-6">
              <div className="text-zinc-800 text-xl font-bold font-['Nunito'] uppercase">
                high school student, developer
              </div>

              <div className="flex flex-col gap-8">
                <h1 className="text-zinc-800 text-4xl lg:text-6xl font-bold font-['Playfair_Display'] leading-tight">
                  hey, my name is nabira
                </h1>

                <div className="flex flex-col gap-6">
                  <p className="text-zinc-500 text-xl font-semibold leading-9">
                    hey there, i'm nabira! i'm an IB student from Oakville and
                    my interests lie in computer science, technology and music.
                    i love yapping and making new friends, so feel free to reach
                    out :)
                  </p>

                  <div className="min-h-[60px]">
                    <Typewriter
                      options={{
                        strings: [
                          "i love coding personal projects!",
                          "hackathons (and roblox) are my hobbies LOL",
                          "i love coffee (i had a pretty bad obsession a while ago)",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 20,
                        cursor: "|",
                        wrapperClassName: "text-zinc-500 text-lg",
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      text="projects"
                      onClick={() => {
                        window.location.href = "/projects";
                      }}
                    />
                    <Button
                      text="linkedin"
                      onClick={() =>
                        (window.location.href =
                          "https://www.linkedin.com/in/nabira-rashid-46338a283/")
                      }
                    />
                    <Button
                      text="github"
                      onClick={() =>
                        (window.location.href =
                          "https://github.com/nabirarashid/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <div className="relative hover:rotate-6 transition-transform duration-500">
              {/* Background decorative circle */}
              <div className="absolute inset-0 w-120 h-120 bg-pink-900 rounded-full transform -translate-x-4 -translate-y-4" />
              <img
                className="w-120 h-120 object-cover rounded-full relative z-10"
                src="/assets/image.jpg"
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-[1440px] mx-auto px-8 py-5">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-center text-zinc-800 text-4xl font-bold">
            (some of) my projects!
          </h2>
          {displayedProjects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              name={project.title}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
