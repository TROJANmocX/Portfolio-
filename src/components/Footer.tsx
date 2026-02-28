import React from 'react';
import { Heart, Github, Linkedin, Mail, Code, Terminal, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Blog', target: 'blog' },
    { label: 'Resume', target: 'resume' },
    { label: 'Contact', target: 'contact' },
  ];

  const socials = [
    { icon: <Github size={18} />, url: 'https://github.com/TROJANmocX', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/arish-ali-8670341b3/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/trojan_mocx?igsh=MXdicDZkNGZudmQ4bQ==', label: 'Instagram' },
    { icon: <Mail size={18} />, url: 'mailto:arish6016@gmail.com', label: 'Email' },
    { icon: <Code size={18} />, url: 'https://leetcode.com/u/trojanmocx/', label: 'LeetCode' },
    { icon: <Terminal size={18} />, url: 'https://dev.to/trojanmocx', label: 'Dev.to' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-[#050505] pt-16 pb-8 relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EC1D24]/50 to-transparent shadow-[0_0_20px_#EC1D24]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">

          {/* Brand + CTA */}
          <motion.div
            className="flex flex-col gap-4 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
              ARISH<span className="text-[#EC1D24]">.DEV</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Building intelligent systems and shipping fast. Always open to great opportunities.
            </p>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Available for hire</span>
            </div>
            <a
              href="mailto:arish6016@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EC1D24] text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 w-fit"
            >
              <Mail size={14} /> Hire Me
            </a>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Nav</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    spy smooth offset={-80} duration={500}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] transition-colors text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © {currentYear} Arish Ali. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono flex items-center gap-1.5">
            Made with <Heart size={11} className="text-[#EC1D24] fill-[#EC1D24]" /> using React &amp; Tailwind CSS
          </p>
          <p className="text-slate-700 text-[10px] font-bold uppercase tracking-wider">
            Built with curiosity &amp; caffeine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;