import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import {
  Home, User, Code, FileText, Activity,
  Mail, Menu, X, MessageSquare, PenTool
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavItems = [
    { name: 'Home', icon: <Home size={16} />, target: 'home' },
    { name: 'About', icon: <User size={16} />, target: 'about' },
  ];

  const contentItems = [
    { name: 'Projects', icon: <Code size={16} />, target: 'projects' },
    { name: 'Skills', icon: <Activity size={16} />, target: 'skills' },
    { name: 'Stories', icon: <MessageSquare size={16} />, target: 'testimonials' },
    { name: 'Blog', icon: <PenTool size={16} />, target: 'blog' },
  ];

  const contactItems = [
    { name: 'Resume', icon: <FileText size={16} />, target: 'resume' },
    { name: 'Contact', icon: <Mail size={16} />, target: 'contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none"
    >
      <div
        ref={navRef}
        className={`
          pointer-events-auto
          flex items-center justify-center
          px-3 py-2
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isScrolled
            ? 'bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md shadow-lg border-b border-white/10 w-full max-w-none rounded-none top-0 mt-[-24px] pt-3 pb-3'
            : 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full ring-1 ring-[#EC1D24]/20'
          }
        `}
      >
        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center space-x-1 relative z-10">
          {mainNavItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#EC1D24] bg-red-50/50 dark:bg-red-900/10"
              className="group relative flex items-center space-x-2 py-1.5 px-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-all duration-300 cursor-pointer text-xs font-bold uppercase tracking-wide hover-wiggle overflow-hidden"
            >
              <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>{item.icon}</motion.span>
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EC1D24] transform scale-x-0 group-[.active]:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

          {contentItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#EC1D24] bg-red-50/50 dark:bg-red-900/10"
              className="group relative flex items-center space-x-2 py-1.5 px-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-all duration-300 cursor-pointer text-xs font-bold uppercase tracking-wide hover-wiggle overflow-hidden"
            >
              <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>{item.icon}</motion.span>
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EC1D24] transform scale-x-0 group-[.active]:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

          {contactItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#EC1D24] bg-red-50/50 dark:bg-red-900/10"
              className="group relative flex items-center space-x-2 py-1.5 px-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-all duration-300 cursor-pointer text-xs font-bold uppercase tracking-wide hover-wiggle overflow-hidden"
            >
              <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>{item.icon}</motion.span>
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EC1D24] transform scale-x-0 group-[.active]:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}

          <div className="ml-2 pl-2 border-l border-gray-300 dark:border-white/20">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between w-full lg:hidden px-2 relative z-10">
          <span className="font-black text-lg tracking-tighter">ARISH</span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-4 right-4 lg:hidden bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(236,29,36,0.5)] transition-all duration-300 overflow-hidden z-40 rounded-xl ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
          }`}
      >
        <div className="p-4 space-y-1 overflow-y-auto max-h-[70vh]">
          {[...mainNavItems, ...contentItems, ...contactItems].map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 py-3 px-4 border-b border-gray-100 dark:border-white/5 last:border-0 text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] transition-all duration-200 font-bold uppercase tracking-wide rounded-lg"
            >
              <div className="w-8 h-8 flex items-center justify-center text-current">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;