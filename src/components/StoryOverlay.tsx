import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Chapter {
    id: string;
    title: string;
    subtitle: string;
}

const chapters: Chapter[] = [
    { id: 'home', title: 'PROLOGUE', subtitle: 'The Awakening' },
    { id: 'about', title: 'CHAPTER I', subtitle: 'The Origin' },
    { id: 'skills', title: 'CHAPTER II', subtitle: 'The Arsenal' },
    { id: 'projects', title: 'CHAPTER III', subtitle: 'The Chronicles' },
    { id: 'blog', title: 'CHAPTER IV', subtitle: 'The Archives' },
    { id: 'contact', title: 'EPILOGUE', subtitle: 'The Transmission' },
];

const StoryOverlay: React.FC = () => {
    const [currentChapter, setCurrentChapter] = useState<Chapter>(chapters[0]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate overall progress
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = totalScroll / windowHeight;
            setProgress(scrollProgress);

            // Determine current chapter
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const chapter of chapters) {
                const element = document.getElementById(chapter.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentChapter(chapter);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-40 pointer-events-none hidden lg:flex flex-col items-start">
            {/* Chapter Indicator */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentChapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-left mb-4"
                >
                    <h3 className="text-xs font-bold tracking-[0.2em] text-[#EC1D24] mb-1">
                        {currentChapter.title}
                    </h3>
                    <p className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {currentChapter.subtitle}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#EC1D24]"
                    style={{ width: `${progress * 100}%` }}
                    transition={{ ease: "linear", duration: 0.1 }}
                />
            </div>

            {/* Chapter Markers (Optional Visual Flair) */}
            <div className="flex justify-between w-64 mt-2 px-1">
                {chapters.map((chapter) => (
                    <div
                        key={chapter.id}
                        className={`w-1 h-1 rounded-full transition-colors duration-300 ${currentChapter.id === chapter.id ? 'bg-[#EC1D24]' : 'bg-slate-300 dark:bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default StoryOverlay;
