import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const HireMeCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-24 right-6 z-[9999] flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Dismiss button */}
          <motion.button
            onClick={handleDismiss}
            className="p-1.5 bg-black/40 border border-white/10 rounded-full text-slate-500 hover:text-white transition-colors backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Dismiss"
          >
            <X size={12} />
          </motion.button>

          {/* Main CTA */}
          <MagneticButton>
            <motion.a
              href="mailto:arish6016@gmail.com"
              className="relative flex items-center gap-2.5 px-5 py-3 bg-[#EC1D24] text-white font-black text-xs uppercase tracking-widest rounded-full shadow-xl shadow-red-500/30 overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236,29,36,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine sweep */}
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-500 skew-x-12" />

              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#EC1D24]" />

              <Mail size={14} className="relative z-10" />
              <span className="relative z-10">Hire Me</span>
            </motion.a>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMeCTA;
