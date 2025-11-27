import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import {
  Home, User, Code, FileText, Activity, Terminal,
  MessageSquare, Music, Mail, Menu, X, ChevronDown
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const projectsDropdown = [
    { name: 'All Projects', target: 'projects' },
    { name: 'Real Projects', target: 'projects-real' },
    { name: 'Fun Projects', target: 'projects-fun' },
    { name: 'Featured Work', target: 'projects-featured' },
  ];

  const skillsDropdown = [
    { name: 'Technical Skills', target: 'skills-technical' },
    { name: 'Soft Skills', target: 'skills-soft' },
    { name: 'Certifications', target: 'skills-certs' },
  ];

  const interactiveItems = [
    { name: 'Terminal', icon: <Terminal size={16} />, target: 'terminal' },
    { name: 'Chatbot', icon: <MessageSquare size={16} />, target: 'chatbot' },
    { name: 'Music', icon: <Music size={16} />, target: 'music' },
  ];

  const contactItems = [
    { name: 'Contact', icon: <Mail size={16} />, target: 'contact' },
    { name: 'Resume', icon: <FileText size={16} />, target: 'resume' },
  ];

  const DropdownMenu = ({ title, items }: { title: string; items: { name: string; target: string }[] }) => {
    const isOpen = activeDropdown === title;

    return (
      <div className="relative group">
        <button
          onClick={() => setActiveDropdown(isOpen ? null : title)}
          className="flex items-center space-x-1 py-2 px-4 rounded-md text-slate-700 dark:text-slate-300 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 text-sm font-bold uppercase tracking-wide"
        >
          <span>{title}</span>
          <ChevronDown
            size={12}
            className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-56 bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(236,29,36,0.2)] z-50 rounded-xl overflow-hidden"
            >
              <div className="p-2">
                {items.map((item) => (
                  <Link
                    key={item.target}
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-[#EC1D24] hover:text-white dark:hover:bg-[#EC1D24] dark:hover:text-white cursor-pointer transition-all rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.relative')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none"
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
              {/* Active Underline Animation */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EC1D24] transform scale-x-0 group-[.active]:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

          <DropdownMenu title="Projects" items={projectsDropdown} />
          <DropdownMenu title="Skills" items={skillsDropdown} />

          <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

          {interactiveItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#EC1D24] bg-gray-50 dark:bg-white/5 scale-105"
              className="group flex items-center space-x-2 py-2 px-4 rounded-md text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer text-sm font-bold uppercase tracking-wide"
            >
              <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>{item.icon}</motion.span>
              <span>{item.name}</span>
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
              activeClass="text-[#EC1D24] bg-gray-50 dark:bg-white/5 scale-105"
              className="group flex items-center space-x-2 py-2 px-4 rounded-md text-slate-600 dark:text-slate-400 hover:text-[#EC1D24] dark:hover:text-[#EC1D24] hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer text-sm font-bold uppercase tracking-wide hover-wiggle"
            >
              <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>{item.icon}</motion.span>
              <span>{item.name}</span>
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
          {mainNavItems.concat(
            [{ name: 'Projects', icon: <Code size={16} />, target: 'projects' }],
            [{ name: 'Skills', icon: <Activity size={16} />, target: 'skills' }],
            interactiveItems,
            contactItems
          ).map((item) => (
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