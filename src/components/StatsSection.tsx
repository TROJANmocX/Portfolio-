import React from 'react';
import { motion } from 'framer-motion';
import GitHubStats from './GitHubStats';

const StatsSection: React.FC = () => (
  <section id="stats" className="py-20 bg-[#050505] relative overflow-hidden">
    {/* Noise */}
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none" />
    {/* Glow blobs */}
    <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#EC1D24]/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
          BY THE <span className="text-[#EC1D24]">NUMBERS</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto font-medium">
          Live open-source activity and statistics pulled directly from GitHub.
        </p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#EC1D24]" />
          <div className="w-1.5 h-1.5 bg-[#EC1D24] rounded-full" />
          <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#EC1D24]" />
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#EC1D24]/20 transition-colors duration-500 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GitHubStats />
        </motion.div>
      </div>
    </div>
  </section>
);

export default StatsSection;
