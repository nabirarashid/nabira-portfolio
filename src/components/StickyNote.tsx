import React from 'react';

interface StickyNoteProps {
  title: string;
  content: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange';
  rotation?: number;
  alignment?: 'left' | 'right';
}

const StickyNote: React.FC<StickyNoteProps> = ({ 
  title, 
  content, 
  color = 'yellow',
  rotation = 0,
  alignment = 'left'

}) => {
  const colorClasses = {
    yellow: 'bg-yellow-200 shadow-yellow-300/50',
    pink: 'bg-pink-200 shadow-pink-300/50',
    blue: 'bg-blue-200 shadow-blue-300/50',
    green: 'bg-green-200 shadow-green-300/50',
    orange: 'bg-orange-200 shadow-orange-300/50'
  };

  const rotationStyle = {
    transform: `rotate(${rotation}deg)`
  };

  const alignmentClass = alignment === 'left' ? 'self-start' : 'self-end';


  return (
    <div 
      className={`
        w-90 h-70 p-6 m-4
        ${colorClasses[color]}
        ${alignmentClass}
        shadow-lg shadow-gray-400/30
        rounded-sm
        relative
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
        cursor-pointer
        font-handwriting
      `}
      style={rotationStyle}
    >
      {/* Tape effect */}
      <div className="absolute -top-2 left-8 w-16 h-6 bg-white/60 rounded-sm shadow-sm transform -rotate-12"></div>
      
      {/* Content */}
      <div className="h-full flex flex-col">
        <h3 className="text-3xl font-bold text-gray-800 mb-3 underline decoration-2 decoration-gray-600">
          {title}
        </h3>
        <p className="text-gray-700 text-l leading-relaxed flex-grow overflow-hidden whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default StickyNote;