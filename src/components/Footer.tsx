import React from 'react';
import { Heart, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] pt-20 pb-10 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EC1D24]/50 to-transparent shadow-[0_0_20px_#EC1D24]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-white tracking-tighter">
            ARISH<span className="text-[#EC1D24]">.DEV</span>
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[{ icon: <Github size={20} />, url: 'https://github.com/TROJANmocX' },
          { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/arish-ali-8670341b3/' },
          { icon: <Mail size={20} />, url: 'mailto:arish6016@gmail.com' },
          { icon: <Code size={20} />, url: 'https://leetcode.com/u/trojanmocx/' },
          { icon: <Terminal size={20} />, url: 'https://dev.to/trojanmocx' }].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 text-slate-400 hover:text-white hover:bg-[#EC1D24] rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-mono">
            © {currentYear} Arish. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mt-2">
            Built with curiosity, caffeine, and questionable ideas.
          </p>
          <p className="text-gray-500 text-xs font-mono flex items-center justify-center mt-2">
            Made with <Heart size={12} className="mx-1 text-[#EC1D24] fill-[#EC1D24]" /> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;