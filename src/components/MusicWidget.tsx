import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music, Headphones } from 'lucide-react';

const MusicWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playlist = [
    {
      title: 'Coding Lo-Fi',
      artist: 'Code Beats',
      duration: '3:42',
      cover: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg'
    },
    {
      title: 'Deep Focus',
      artist: 'Brain Waves',
      duration: '4:17',
      cover: 'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg'
    },
    {
      title: 'Chill Study Mix',
      artist: 'Study Vibes',
      duration: '3:28',
      cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((currentSong + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSong((currentSong - 1 + playlist.length) % playlist.length);
  };

  return (
    <section id="music" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
            CURRENTLY <span className="text-[#EC1D24]">VIBING</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC1D24] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Sonic fuel for coding sessions.
          </p>
        </div>

        <div className="w-full bg-[#111] text-white border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(236,29,36,0.2)] rounded-lg overflow-hidden">
          <div className="relative h-64 overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={playlist[currentSong].cover}
              alt={playlist[currentSong].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-[#EC1D24] p-2 rounded-full animate-pulse">
                <Headphones size={16} className="text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[#EC1D24] font-bold text-xs uppercase tracking-widest">Now Playing</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight">{playlist[currentSong].title}</h3>
              <p className="text-gray-300 text-sm font-medium">{playlist[currentSong].artist}</p>
            </div>
          </div>

          <div className="p-6 bg-[#1a1a1a]">
            <div className="mb-6">
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#EC1D24]"
                  style={{ width: isPlaying ? '62%' : '0%', transition: 'width 0.2s' }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
                <span>{isPlaying ? '2:18' : '0:00'}</span>
                <span>{playlist[currentSong].duration}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={prevSong}
              >
                <SkipBack size={24} />
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#EC1D24] hover:text-white transition-all shadow-lg transform hover:scale-105"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>

              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={nextSong}
              >
                <SkipForward size={24} />
              </button>
            </div>
          </div>

          <div className="px-6 py-4 bg-black border-t border-gray-900 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
              <Music size={14} className="text-[#EC1D24]" />
              <span>SPOTIFY INTEGRATION</span>
            </div>
            <a
              href="https://open.spotify.com/user/f97dstx5ed8ta0bbawuplfyrg?si=02b187b3f2084f34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-wider text-[#1DB954] hover:text-white transition-colors"
            >
              Open Spotify
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicWidget;