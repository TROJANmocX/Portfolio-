import React from 'react';
import { motion } from 'framer-motion';

const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>

      {/* Deep Space Stars Base */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Primary Red Nebula (Top Left) */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(236,29,36,0.8) 0%, rgba(200,0,0,0) 70%)',
        }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, 30, -20, 40, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Deep Violet / Navy Nebula (Bottom Right) */}
      <motion.div
        className="absolute bottom-[-30%] right-[-20%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(67,56,202,0.8) 0%, rgba(30,20,100,0) 70%)', // Indigo/Violet
        }}
        animate={{
          x: [0, -60, 20, -30, 0],
          y: [0, -40, 50, -20, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Cosmic Orange Accent (Center drifting) */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.6) 0%, rgba(200,80,0,0) 70%)', // Orange
        }}
        animate={{
          x: [0, 100, -80, 50, 0],
          y: [0, -80, 100, -50, 0],
          scale: [0.8, 1.2, 0.9, 1.1, 0.8],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  );
};

export default CosmicBackground;
