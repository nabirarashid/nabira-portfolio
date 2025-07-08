export interface Project {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  details: string;
}

const projects: Project[] = [
  {
    title: "brand reach",
    description: "an ai-powered content generator and auto-poster.",
    link: "https://github.com/nabira/brand-reach",
    techStack: ["python", "flask", "cohere api", "stable diffusion", "tweepy"],
    details: `automates social media content using cohere for captions and stable diffusion for visuals, then posts via twitter api. built to simplify branding for companies.`,
  },
  {
    title: "mr. goose",
    description: "a vscode extension that guides coders with humor and hints.",
    link: "https://github.com/nabira/brand-reach",
    techStack: ["typescript", "vscode api", "elysiajs", "bun", "docker", "websockets"],
    details: `a quirky vscode extension with an animated goose that reacts to code, provides hints, and makes learning to debug more fun.`,
  },
  {
    title: "homegrown",
    description: "a local product discovery and seller platform.",
    techStack: ["react", "tailwindcss", "firebase", "maps api"],
    link: "#",
    details: `connects users with local businesses by enabling product discovery and seller listings based on location and filters.`,
  },
  {
    title: "snapquest",
    description: "location-based photography prompts and submissions.",
    link: "#",
    techStack: ["oracle cloud", "mongodb", "tailwindcss", "bun", "mapbox", "auth0"],
    details: `generates local photo prompts and lets users upload location-based shots. designed to inspire creativity through exploration.`,
  },
  {
    title: "segmentation registration research",
    description: "research project on medical image segmentation and registration.",
    link: "#",
    techStack: ["python", "pytorch", "matplotlib"],
    details: `explored machine learning techniques for improving segmentation and alignment of medical images (mri/ct).`,
  },
  {
    title: "rag + langchain ai agents",
    description: "experiments with langchain, ollama, chromadb, and tool calling.",
    link: "#",
    techStack: ["python", "langchain", "ollama", "chroma db", "gemini api"],
    details: `built rag pipelines with chromadb, tested local llms using ollama, and implemented tool use via gemini.`,
  }
];

export default projects;
