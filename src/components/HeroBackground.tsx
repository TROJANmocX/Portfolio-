import React from 'react';

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. Pure Dark Gradient Base (Black to Dark Gray) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#0e0e0e]"></div>

            {/* 2. Very Subtle Radial Glow (Behind Photo Area - Right Side) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            {/* Optional: Extremely subtle noise for texture (barely visible) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </div>
    );
};

export default HeroBackground;
