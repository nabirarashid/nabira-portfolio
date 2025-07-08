
const MusicVideo = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/1071157089?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title="The Nationals 2025"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            MusicFest Canada - The Nationals 2025
          </h2>
          <p className="text-gray-600 mb-3 text-sm">
            Stage B - May 13th - 2 PM to 10 PM | Our timestamp is 5:40
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>🎵 MusicFest Canada</span>
            <span>📅 May 13, 2025</span>
            <span>🎤 Live Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;