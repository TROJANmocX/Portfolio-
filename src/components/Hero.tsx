import React from 'react';
import { Github, Linkedin, ChevronDown, ArrowRight, Code, Terminal, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-32 bg-[#F7F7F7] dark:bg-[#0a0a0a]">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32 max-w-screen-xl mx-auto w-full">

          {/* Left Side Decoration */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-slate-400 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter text-[#1C1C1C] dark:text-white leading-[0.9] relative z-10">
              I AM <br />
              <motion.span
                className="text-[#E63946] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#EC1D24] dark:via-orange-500 dark:to-[#EC1D24] dark:bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                ARISH
              </motion.span>
            </h1>

            {/* Micro-tagline */}
            <p className="text-sm font-bold text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-6">
              Building intelligent systems with intention and speed.
            </p>

            {/* Tech-style Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] to-transparent mx-auto lg:mx-0 mb-8"></div>

            <div className="text-xl md:text-2xl font-black mb-6 text-[#2E3A59] dark:text-slate-200 h-10 font-mono flex items-center justify-center lg:justify-start gap-3 uppercase tracking-tight relative z-10">
              <span className="text-[#E63946] dark:text-[#EC1D24] text-3xl">&gt;</span>
              <Typewriter
                words={[
                  'Full-Stack Sorcery',
                  'Digital Mayhem',
                  'Code Architect',
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            {/* Quick Stats Bar */}
            <div className="flex flex-col gap-2 mb-10 text-sm font-medium text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-800 pl-4 text-left mx-auto lg:mx-0 max-w-fit">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]"></span> Building Practical, High-Impact Tools
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]"></span> Skilled in Modern Web & AI Stacks
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]"></span> Constantly Improving Through Real Work
              </span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium relative z-10">
              Turning caffeine into complex systems. I build things that break the internet (in a good way).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 relative z-10">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-cyber group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore The Chaos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, url: "https://github.com/TROJANmocX" },
                  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/arish-ali-8670341b3/" },
                  { icon: <Instagram size={20} />, url: "https://www.instagram.com/trojan_mocx?igsh=MXdicDZkNGZudmQ4bQ==" },
                  { icon: <Code size={20} />, url: "https://leetcode.com/u/trojanmocx/" },
                  { icon: <Terminal size={20} />, url: "https://dev.to/trojanmocx" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-social"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Dynamic & Glowing */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-[380px] md:h-[380px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating Accent Behind Avatar */}
              <div className="absolute -inset-10 rounded-full border border-dashed border-slate-300 dark:border-slate-700 opacity-30 animate-[spin_20s_linear_infinite]"></div>

              {/* Glowing Ring - Red in Light, Red in Dark */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#EC1D24]/40 dark:border-[#EC1D24]/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#EC1D24]/50 dark:border-[#EC1D24] opacity-60 dark:opacity-20 animate-[ping_3s_ease-in-out_infinite]"></div>

              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-[#0a0a0a] shadow-[0_0_30px_rgba(236,29,36,0.2)] dark:shadow-[0_0_50px_rgba(236,29,36,0.3)] bg-white dark:bg-[#111]">
                <img
                  src="/arish-new.png"
                  alt="Arish"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-2 -right-2 bg-[#1C1C1C] dark:bg-black text-white p-2.5 rounded-xl border border-[#E63946] dark:border-[#EC1D24] shadow-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Code size={20} />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 bg-white text-[#1C1C1C] p-2.5 rounded-xl border border-[#E63946] dark:border-[#EC1D24] shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <Terminal size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-slate-400 hover:text-[#E63946] dark:hover:text-[#EC1D24] transition-colors cursor-pointer"
          >
            <ChevronDown size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;