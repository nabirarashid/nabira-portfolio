import { useState } from 'react';
import { ChevronDown, ExternalLink, Code } from 'lucide-react';

interface Props {
  name: string;
  description: string;
  link: string;
  techStack?: string[];
  details?: string;
}

const ProjectCard = ({ name, description, link, techStack = [], details }: Props) => {
  const [showTechStack, setShowTechStack] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[800px] h-auto min-h-[300px] rounded-3xl p-1 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-900 transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, #831843 0%, #be185d 25%, #831843 50%, #be185d 75%, #831843 100%)'
          : 'linear-gradient(135deg, #831843 0%, #be185d 50%, #831843 100%)',
        backgroundSize: '200% 200%',
        animation: isHovered ? 'gradientShift 3s ease infinite' : 'none'
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes techStackSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .tech-stack-slide {
          animation: techStackSlide 0.4s ease-out forwards;
        }
      `}</style>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 rounded-3xl opacity-20 overflow-hidden">
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full transform transition-all duration-1000 ease-out"
          style={{
            transform: isHovered ? 'translate(-10px, 10px) scale(1.2)' : 'translate(0, 0) scale(1)',
            opacity: isHovered ? 0.1 : 0.05
          }}
        />
        <div 
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full transform transition-all duration-1000 ease-out delay-100"
          style={{
            transform: isHovered ? 'translate(5px, -5px) scale(1.1)' : 'translate(0, 0) scale(1)',
            opacity: isHovered ? 0.08 : 0.03
          }}
        />
      </div>

      <div className="relative bg-white rounded-3xl shadow-[0px_6px_64px_0px_rgba(112,144,176,0.10)] p-12 h-full transform transition-all duration-300">
        <div className="flex flex-col justify-center items-start gap-8 h-full">
          <div className="flex flex-col justify-start items-start gap-6 flex-1">
            <div className="text-zinc-800 text-3xl font-bold leading-[60px] transform transition-all duration-300 group-hover:text-pink-900">
              {name}
            </div>
            
            <div className="text-zinc-500 text-lg font-normal leading-relaxed transform transition-all duration-300 group-hover:text-zinc-600">
              {description}
            </div>
            
            {details && (
              <div className="text-zinc-500 text-base font-normal leading-relaxed transform transition-all duration-300 group-hover:text-zinc-600">
                {details}
              </div>
            )}
            
            <div className="flex gap-4 items-center">
              <div className="relative overflow-hidden px-6 py-2 rounded-3xl outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-start items-center gap-2 group/button transform transition-all duration-300 hover:outline-pink-900 hover:shadow-lg hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-pink-800 transform -translate-x-full transition-transform duration-300 group-hover/button:translate-x-0" />
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative text-zinc-800 text-lg font-medium leading-relaxed transition-colors duration-300 group-hover/button:text-white flex items-center gap-2"
                >
                  view project
                  <ExternalLink 
                    size={18} 
                    className="transform transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" 
                  />
                </a>
              </div>
              
              {techStack.length > 0 && (
                <button
                  onClick={() => setShowTechStack(!showTechStack)}
                  className="relative overflow-hidden px-6 py-2 rounded-3xl bg-gradient-to-r from-pink-900 to-pink-800 text-white text-lg font-medium leading-relaxed inline-flex items-center gap-2 transform transition-all duration-300 hover:from-pink-800 hover:to-pink-700 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Code size={18} className="transform transition-transform duration-300" />
                  tech stack
                  <div className={`transform transition-all duration-300 ${showTechStack ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
              )}
            </div>
          </div>
          
          {showTechStack && techStack.length > 0 && (
            <div className="w-full border-t border-zinc-200 pt-6 tech-stack-slide">
              <div className="text-zinc-700 text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-900 to-pink-600 rounded-full" />
                technologies used
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-zinc-100 to-zinc-50 text-zinc-700 text-sm font-medium rounded-full border border-zinc-200 transform transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-25 hover:border-pink-200 hover:text-pink-800 cursor-default"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;