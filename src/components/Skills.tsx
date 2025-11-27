import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Wrench, Brain } from 'lucide-react';

// Enhanced Skill bar component with percentage display
const SkillBar: React.FC<{ skill: string; level: number; color?: string }> = ({ skill, level, color = "#EC1D24" }) => (
  <div className="mb-5 group">
    <div className="flex justify-between mb-2">
      <span className="text-slate-300 font-mono text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">
        {skill}
      </span>
      <span className="text-slate-500 font-mono text-xs font-bold group-hover:text-[#EC1D24] transition-colors duration-300">
        {level}%
      </span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-sm" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1.5 }}
        />
      </motion.div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Radial gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EC1D24]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            TECHNICAL <span className="text-[#EC1D24]">ARSENAL</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Battle-tested technologies powering production-grade systems.
          </p>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#EC1D24]"></div>
            <div className="w-2 h-2 bg-[#EC1D24] rounded-full"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#EC1D24]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {/* Card 1: Frontend Architecture */}
          <motion.div
            className="relative p-6 rounded-2xl bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#EC1D24]/30 shadow-[0_0_20px_rgba(236,29,36,0.15)] backdrop-blur-xl group hover:shadow-[0_0_40px_rgba(236,29,36,0.3)] hover:border-[#EC1D24] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Top glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EC1D24] to-transparent opacity-60"></div>

            {/* Icon container */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#EC1D24]/10 rounded-lg border border-[#EC1D24]/30 group-hover:bg-[#EC1D24]/20 transition-colors">
                <Globe className="text-[#EC1D24]" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Frontend</h3>
            </div>

            <div className="space-y-1">
              <SkillBar skill="React / Next.js" level={95} />
              <SkillBar skill="TypeScript" level={90} />
              <SkillBar skill="Tailwind CSS" level={98} />
              <SkillBar skill="Framer Motion" level={92} />
            </div>
          </motion.div>

          {/* Card 2: Backend Systems */}
          <motion.div
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] border border-white/10 backdrop-blur-xl group hover:border-white/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EC1D24]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Server className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Backend</h3>
              </div>

              <div className="space-y-1">
                <SkillBar skill="Node.js / Express" level={88} color="#fff" />
                <SkillBar skill="Python / FastAPI" level={85} color="#fff" />
                <SkillBar skill="PostgreSQL" level={82} color="#fff" />
                <SkillBar skill="REST / GraphQL" level={90} color="#fff" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI & ML */}
          <motion.div
            className="relative p-6 rounded-2xl bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)] backdrop-blur-xl group hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:border-purple-500/60 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/10 rounded-lg border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors">
                <Brain className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">AI & ML</h3>
            </div>

            <div className="space-y-1">
              <SkillBar skill="OpenCV" level={88} color="#a855f7" />
              <SkillBar skill="MediaPipe" level={85} color="#a855f7" />
              <SkillBar skill="TensorFlow" level={75} color="#a855f7" />
              <SkillBar skill="LangChain" level={80} color="#a855f7" />
            </div>
          </motion.div>

          {/* Card 4: DevOps & Tools */}
          <motion.div
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] border border-slate-700/50 backdrop-blur-xl group hover:border-slate-500 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-slate-700/20 rounded-lg border border-slate-700/50 group-hover:bg-slate-700/30 transition-colors">
                <Wrench className="text-slate-400 group-hover:text-slate-300 transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-200 uppercase tracking-tight">DevOps</h3>
            </div>

            <div className="space-y-1">
              <SkillBar skill="Docker" level={85} color="#94a3b8" />
              <SkillBar skill="Git / GitHub" level={95} color="#94a3b8" />
              <SkillBar skill="Linux / Bash" level={88} color="#94a3b8" />
              <SkillBar skill="Vercel / Railway" level={90} color="#94a3b8" />
            </div>
          </motion.div>

        </div>

        {/* Additional Tech Stack Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-4 font-bold">Also Experienced With</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Redux', 'Zustand', 'Vite', 'Webpack', 'Prisma', 'MongoDB', 'Firebase', 'Stripe', 'WebSockets', 'Chart.js', 'Three.js', 'Figma'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-xs font-mono uppercase tracking-wider hover:bg-white/10 hover:border-[#EC1D24]/50 hover:text-white transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;