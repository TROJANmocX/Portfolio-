import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollPeelReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animation when top of element hits bottom of viewport
    // End animation when top of element hits 60% of viewport
    offset: ["0 1", "0.6 1"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: "1500px" }}>
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformOrigin: "bottom center",
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollPeelReveal;
