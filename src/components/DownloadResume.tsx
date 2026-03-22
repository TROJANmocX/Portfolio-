import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadResume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Open immediately to bypass popup blockers
    const newWindow = window.open('', '_blank');
    
    setTimeout(() => {
      setIsDownloading(false);
      if (newWindow) {
        newWindow.location.href = '/resume.pdf';
      } else {
        window.location.href = '/resume.pdf';
      }
    }, 800); // Shorter delay for better UX
  };

  return (
    <div className="fixed top-24 right-4 md:top-6 md:right-6 z-[60]">
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:shadow-[#EC1D24]/20 transition-all disabled:opacity-70 disabled:cursor-wait"
      >
        <span className={`flex items-center gap-2 relative z-10 ${isDownloading ? 'opacity-0' : 'opacity-100'}`}>
          <FileText size={16} className="hidden sm:block" />
          <span className="hidden sm:inline">Resume</span>
          <span className="sm:hidden">CV</span>
          <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </span>
        
        {isDownloading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default DownloadResume;
