import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const CopyFeedback: React.FC = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    useEffect(() => {
        const handleCopy = () => {
            const selection = document.getSelection();
            if (selection && selection.toString().length > 0) {
                const text = selection.toString();
                setCopiedText(text.slice(0, 20) + (text.length > 20 ? '...' : ''));
                setTimeout(() => setCopiedText(null), 2500);
            }
        };

        document.addEventListener('copy', handleCopy);
        return () => document.removeEventListener('copy', handleCopy);
    }, []);

    return (
        <AnimatePresence>
            {copiedText && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20"
                >
                    <div className="flex items-center justify-center w-10 h-10 bg-[#EC1D24] rounded-full text-white shadow-lg shadow-red-500/30">
                        <Check size={20} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-wider flex items-center gap-2">
                            Copied to Clipboard
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 max-w-[200px] truncate">
                            "{copiedText}"
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CopyFeedback;
