import React, { useState } from 'react';
import { Github, ExternalLink, Code, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projectsData';

const Projects: React.FC = () => {
  // Filter State
  const [filter, setFilter] = useState<'all' | 'real' | 'fun'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Carousel State
  const featuredProjects = projects.filter(p => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Filter Logic
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'real') return !project.humor;
    if (filter === 'fun') return project.humor;
    return true;
  });

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[95%] 2xl:max-w-screen-2xl">

        {/* --- SECTION HEADER --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter">
            FEATURED <span className="text-[#EC1D24]">PROJECTS</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A curated collection of my work, ranging from serious AI tools to chaotic experiments.
          </p>
        </motion.div>

        {/* --- SPOTLIGHT CAROUSEL --- */}
        <div className="mb-24 relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-8 bg-[#EC1D24] rounded-sm"></span>
              Spotlight
            </h3>

            {/* Carousel Controls */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-full hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300 shadow-md group"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-full hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300 shadow-md group"
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid lg:grid-cols-2 gap-0 min-h-[500px]"
              >
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto overflow-hidden group cursor-pointer" onClick={() => setSelectedProject(featuredProjects[currentIndex])}>
                  <img
                    src={featuredProjects[currentIndex].imageUrl}
                    alt={featuredProjects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40"></div>

                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span className="bg-[#EC1D24] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-2 inline-block">Featured</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-[#111] relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Code size={120} />
                  </div>

                  <div className="relative z-10">
                    <div className="hidden lg:flex gap-2 mb-6">
                      <span className="bg-[#EC1D24] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                        Featured Project
                      </span>
                      {featuredProjects[currentIndex].humor && (
                        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm border border-black">
                          Just For Fun
                        </span>
                      )}
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[0.9] tracking-tighter">
                      {featuredProjects[currentIndex].title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProjects[currentIndex].technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                      {featuredProjects[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                        className="flex items-center gap-2 px-6 py-3 bg-[#EC1D24] text-white font-bold uppercase tracking-wider rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
                      >
                        View Details <ArrowRight size={18} />
                      </button>
                      <a
                        href={featuredProjects[currentIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold uppercase tracking-wider rounded hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                      >
                        <Github size={18} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


        {/* --- PROJECT ARCHIVE --- */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <span className="w-2 h-8 bg-slate-400 dark:bg-slate-600 rounded-sm"></span>
              Project Archive
            </h3>

            <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
              {['all', 'real', 'fun'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as 'all' | 'real' | 'fun')}
                  className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${filter === filterType
                    ? 'bg-white dark:bg-[#EC1D24] text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  {filterType}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={item}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white dark:bg-[#111] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold tracking-widest border-2 border-white px-4 py-2 uppercase text-xs hover:bg-white hover:text-black transition-colors">
                      View Details
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.humor && (
                      <span className="bg-[#EC1D24] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-black/20">FUN</span>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight group-hover:text-[#EC1D24] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/TROJANmocX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} /> View More on GitHub
            </motion.a>
          </motion.div>
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-[#111] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-full border border-slate-200 dark:border-white/20 hover:bg-[#EC1D24] hover:border-[#EC1D24] hover:text-white transition-colors z-10 shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto min-h-[300px] relative overflow-hidden group">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                      {selectedProject.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#EC1D24] mb-4"></div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-[10px] font-bold py-1 px-3 bg-[#EC1D24]/5 text-[#EC1D24] border border-[#EC1D24]/20 rounded-full uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 mb-8 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#EC1D24] rounded-full"></span> Description
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.problem && (
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> The Problem
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>
                    )}

                    {selectedProject.solution && (
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> The Solution
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] dark:hover:text-white transition-colors rounded-lg shadow-lg"
                    >
                      <Github size={18} /> View Code
                    </motion.a>
                    {selectedProject.demoUrl ? (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-transparent text-black dark:text-white font-bold uppercase tracking-wider border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-lg shadow-lg"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </motion.a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-400 font-bold uppercase tracking-wider border-2 border-gray-200 dark:border-gray-700 cursor-not-allowed opacity-50 rounded-lg"
                      >
                        <ExternalLink size={18} /> No Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;