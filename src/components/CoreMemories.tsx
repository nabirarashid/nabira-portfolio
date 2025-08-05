import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const photos = [
  {
    src: "/assets/website/ramen.jpg",
    caption: "live love laugh band",
  },
  {
    src: "/assets/website/eureka.jpg",
    caption: "organizing eurekahacks!",
  },
  {
    src: "/assets/website/ts.JPG",
    caption: "taylor swift concert",
  },
  {
    src: "/assets/website/canada.jpg",
    caption: "lli @ canada day",
  },
  {
    src: "/assets/website/news.jpg",
    caption: "on the news!",
  },
  {
    src: "/assets/website/band.jpg",
    caption: "spring concert!",
  },
  {
    src: "/assets/website/maya.jpg",
    caption: "gr 11 semi formal",
  },
  {
    src: "/assets/website/laugh.jpg",
    caption: "tech bros",
  },
  {
    src: "/assets/website/htn.jpg",
    caption: "hack the north 24",
  },
  {
    src: "/assets/website/jes.jpg",
    caption: "me and jessie <3",
  },
  {
    src: "/assets/website/krispy.jpg",
    caption: "lli & krispy kreme sale",
  },
  {
    src: "/assets/website/gasp.jpg",
    caption: "teen builders",
  },
  {
    src: "/assets/website/hotchoc.jpg",
    caption: "lli & hot choco",
  },
  {
    src: "/assets/website/relayuni.jpg",
    caption: "relay university",
  },
  {
    src: "/assets/website/prom.JPG",
    caption: "prom 24",
  },
];

const CoreMemories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800">
            my core memories
          </h2>
          <Heart className="text-pink-500" size={28} fill="currentColor" />
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto" />
      </div>

      {/* Main carousel */}
      <div className="relative">
        
        {/* Image container */}
        <div className="relative bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 shadow-lg">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 hover:bg-pink-50 group"
            >
              <ChevronLeft className="text-pink-600 group-hover:text-pink-700" size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 hover:bg-pink-50 group"
            >
              <ChevronRight className="text-pink-600 group-hover:text-pink-700" size={20} />
            </button>

            {/* Image */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].caption}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.error-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'error-placeholder w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center';
                    placeholder.innerHTML = `
                      <div class="text-center text-pink-600">
                        <div class="text-6xl mb-4">📸</div>
                        <div class="font-medium">${photos[currentIndex].caption}</div>
                      </div>
                    `;
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>

            {/* Image overlay with caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="p-6">
                <p className="text-white text-lg font-semibold text-center drop-shadow-lg">
                  {photos[currentIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-pink-600 shadow-md'
                  : 'w-3 h-3 bg-pink-200 hover:bg-pink-300 hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-pink-600 font-medium">
          {currentIndex + 1} of {photos.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max px-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-3 ring-pink-400 ring-offset-2 scale-110 shadow-lg' 
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.thumb-error')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'thumb-error w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-pink-600 text-xl';
                    placeholder.innerHTML = '📸';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreMemories;