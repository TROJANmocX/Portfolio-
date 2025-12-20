import React, { useRef } from 'react';
import { Github, Linkedin, ChevronDown, ArrowRight, Code, Terminal, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[#F7F7F7] dark:bg-[#0a0a0a]">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-screen-xl mx-auto w-full">

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 mx-auto lg:mx-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#EC1D24] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Available for hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter text-[#1C1C1C] dark:text-white leading-[0.9] relative z-10 group">
              I BUILD <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC1D24] via-orange-500 to-[#EC1D24] bg-[length:200%_auto] animate-gradient relative z-10">
                  CHAOS
                </span>
                {/* Glitch Effect Layers */}
                <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#EC1D24] opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1">CHAOS</span>
                <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2">CHAOS</span>
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-bold mb-6 text-[#2E3A59] dark:text-slate-200 font-mono flex items-center justify-center lg:justify-start gap-3 uppercase tracking-tight">
              <span className="text-[#EC1D24]">&gt;</span>
              <Typewriter
                words={[
                  'Full-Stack Engineer',
                  'AI Enthusiast',
                  'Problem Solver',
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Turning complex problems into elegant, high-performance code. I specialize in building intelligent systems that actually work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="group relative px-8 py-4 bg-[#EC1D24] text-white font-bold uppercase tracking-widest text-xs overflow-hidden rounded-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <span className="relative flex items-center gap-2">
                  View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex gap-3">
                {[
                  { icon: <Github size={20} />, url: "https://github.com/TROJANmocX" },
                  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/arish-ali-8670341b3/" },
                  { icon: <Instagram size={20} />, url: "https://www.instagram.com/trojan_mocx?igsh=MXdicDZkNGZudmQ4bQ==" },
                  { icon: <Mail size={20} />, url: "mailto:contact@example.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:border-[#EC1D24] dark:hover:border-[#EC1D24] transition-all shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content with 3D Tilt */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-1000"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{
              perspective: 1000
            }}
          >
            <motion.div
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Abstract Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EC1D24]/20 to-transparent rounded-full blur-3xl animate-pulse -z-10" style={{ transform: "translateZ(-50px)" }}></div>

              <motion.div
                className="absolute inset-4 border border-slate-200 dark:border-slate-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              </motion.div>

              <motion.div
                className="absolute inset-12 border border-dashed border-slate-300 dark:border-slate-700 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transform: "translateZ(40px)" }}
              />

              {/* Main Image Container */}
              <div
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-[#111] shadow-2xl shadow-red-500/20 bg-slate-100 dark:bg-[#111]"
                style={{ transform: "translateZ(60px)" }}
              >
                <img
                  src="/arish-new.png"
                  alt="Arish"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute top-0 right-10 bg-white dark:bg-[#111] p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-500">
                  <Code size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Stack</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 bg-white dark:bg-[#111] p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ transform: "translateZ(100px)" }}
              >
                <div className="p-1.5 bg-green-500/10 rounded-lg text-green-500">
                  <Terminal size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Focus</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">AI Systems</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#EC1D24] transition-colors cursor-pointer group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
            <ChevronDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;