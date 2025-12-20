import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground: React.FC = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. Pure Dark Gradient Base (Black to Dark Gray) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#0e0e0e]"></div>

            {/* 2. Very Subtle Radial Glow (Behind Photo Area - Right Side) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            {/* 3. Dynamic Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-white/10 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Optional: Extremely subtle noise for texture (barely visible) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </div>
    );
};

export default HeroBackground;
