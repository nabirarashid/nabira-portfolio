import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Props {
  name: string;
  description: string;
  link: string;
  techStack?: string[];
  details?: string;
}

const ProjectCard = ({ name, description, link, techStack = [], details }: Props) => {
  const [showTechStack, setShowTechStack] = useState(false);

  return (
    <div className="w-[800px] h-auto min-h-[300px] outline outline-6 outline-pink-900 rounded-3xl shadow-[0px_6px_64px_0px_rgba(112,144,176,0.10)] p-12 bg-white">
      <div className="flex flex-col justify-center items-start gap-8 h-full">
        <div className="flex flex-col justify-start items-start gap-6 flex-1">
          <div className="text-zinc-800 text-3xl font-bold leading-[60px]">{name}</div>
          <div className="text-zinc-500 text-lg font-normal leading-relaxed">{description}</div>
          <div className="text-zinc-500 text-base font-normal leading-relaxed">{details}</div>
          
          <div className="flex gap-4 items-center">
            <div className="px-6 py-2 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-start items-start">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-800 text-lg font-medium leading-relaxed"
              >
                view project!
              </a>
            </div>
            
            {techStack.length > 0 && (
              <button
                onClick={() => setShowTechStack(!showTechStack)}
                className="px-6 py-2 rounded-3xl bg-pink-900 text-white text-lg font-medium leading-relaxed inline-flex items-center gap-2 hover:bg-pink-800 transition-colors"
              >
                tech stack
                {showTechStack ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
            )}
          </div>
        </div>
        
        {showTechStack && techStack.length > 0 && (
          <div className="w-full border-t border-zinc-200 pt-6">
            <div className="text-zinc-700 text-xl font-semibold mb-4">technologies used</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;