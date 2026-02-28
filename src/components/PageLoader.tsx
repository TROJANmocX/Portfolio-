import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'falling' | 'impact'>('falling');

  useEffect(() => {
    // Phase 1: Comet drops in for 0.8 seconds
    const fallTimer = setTimeout(() => {
      setPhase('impact');
    }, 800);

    // Phase 2: Shockwave animation finishes before calling onComplete
    const endTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(fallTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      {/* Deep Space Background Stars */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }} 
          />
        ))}
      </div>

      <AnimatePresence>
        {phase === 'falling' && (
          <motion.div
            key="comet"
            className="absolute top-1/2 left-1/2"
            initial={{ x: '100vw', y: '-100vh' }}
            animate={{ x: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            {/* Comet Head */}
            <div className="absolute w-8 h-8 bg-white rounded-full shadow-[0_0_80px_30px_#EC1D24,0_0_20px_#fff] -translate-x-1/2 -translate-y-1/2 z-10" />
            
            {/* Comet Tail (Trails up and exactly to the right, angled to match the diagonal fall) */}
            <div 
              className="absolute h-3 origin-left blur-[2px] right-0 top-0 -translate-y-1/2"
              style={{
                width: '150vw',
                background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(236,29,36,0.8) 5%, transparent 40%)',
                transform: 'rotate(-45deg)' 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact Shockwave Sequence */}
      {phase === 'impact' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Overwhelming Screen Flash */}
          <motion.div
            className="absolute inset-0 bg-white mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Supernova Expansion */}
          <motion.div
            className="absolute bg-[#EC1D24] rounded-full blur-3xl opacity-80"
            initial={{ width: 0, height: 0 }}
            animate={{ width: '200vw', height: '200vw', opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Shockwave Ring */}
          <motion.div
            className="absolute rounded-full border border-white opacity-50 shadow-[0_0_50px_#EC1D24]"
            initial={{ width: 0, height: 0, borderWidth: 40 }}
            animate={{ width: '150vw', height: '150vw', borderWidth: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default PageLoader;
