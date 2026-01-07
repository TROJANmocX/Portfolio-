import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, Code, X, ChevronLeft, ChevronRight, ArrowRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projectsData';

const Projects: React.FC = () => {
  // Filter State
  const [filter, setFilter] = useState<'all' | 'real' | 'fun'>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
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

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  // Filter Logic
  const filteredProjects = projects.filter(project => {
    const matchesType = filter === 'all'
      ? true
      : filter === 'real'
        ? !project.humor
        : project.humor;

    const matchesTech = selectedTech
      ? project.technologies.includes(selectedTech)
      : true;

    return matchesType && matchesTech;
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
    <section id="projects" className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[95%] 2xl:max-w-screen-2xl">

        {/* --- SECTION HEADER --- */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white tracking-tighter">
            THE <span className="text-[#EC1D24]">CHRONICLES</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            A curated collection of my work, ranging from serious AI tools to chaotic experiments.
          </p>
        </motion.div>

        {/* --- SPOTLIGHT CAROUSEL --- */}
        <div className="mb-32 relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-10 bg-[#EC1D24] rounded-sm"></span>
              Spotlight
            </h3>

            {/* Carousel Controls */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-4 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-full hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300 shadow-lg group"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-full hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300 shadow-lg group"
                aria-label="Next project"
              >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-900 dark:border-white/20 bg-white dark:bg-[#111] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(236,29,36,0.2)] group transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(236,29,36,0.4)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid lg:grid-cols-2 gap-0 min-h-[600px]"
              >
                {/* Image Side */}
                <div className="relative h-80 lg:h-auto overflow-hidden cursor-pointer" onClick={() => setSelectedProject(featuredProjects[currentIndex])}>
                  <img
                    src={featuredProjects[currentIndex].imageUrl}
                    alt={featuredProjects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60"></div>

                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <span className="bg-[#EC1D24] text-white text-xs font-black px-3 py-1.5 uppercase tracking-wider mb-2 inline-block shadow-md">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#111] relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Code size={140} />
                  </div>

                  <div className="relative z-10">
                    <div className="hidden lg:flex gap-3 mb-8">
                      <span className="bg-[#EC1D24] text-white text-xs font-black px-4 py-1.5 uppercase tracking-widest rounded-sm shadow-md">
                        Featured Project
                      </span>
                      {featuredProjects[currentIndex].humor && (
                        <span className="bg-yellow-400 text-black text-xs font-black px-4 py-1.5 uppercase tracking-widest rounded-sm shadow-md border border-black/10">
                          Just For Fun
                        </span>
                      )}
                    </div>

                    <h3 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[0.9] tracking-tighter">
                      {featuredProjects[currentIndex].title}
                    </h3>

                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {featuredProjects[currentIndex].technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-xl leading-relaxed mb-10 font-medium">
                      {featuredProjects[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                        className="flex items-center gap-2 px-8 py-4 bg-[#EC1D24] text-white font-black uppercase tracking-widest rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 text-sm"
                      >
                        Details <ArrowRight size={18} />
                      </button>
                      <a
                        href={featuredProjects[currentIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-widest rounded hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm"
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-10 bg-slate-400 dark:bg-slate-600 rounded-sm"></span>
              Project Archive
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Type Filter */}
              <div className="flex p-1.5 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-x-auto">
                {['all', 'real', 'fun'].map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType as 'all' | 'real' | 'fun')}
                    className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${filter === filterType
                      ? 'bg-white dark:bg-[#EC1D24] text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                    {filterType}
                  </button>
                ))}
              </div>

              {/* Tech Filter */}
              <div className="relative group">
                <div className="flex items-center gap-2 px-5 py-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-[#EC1D24] transition-colors">
                  <Filter size={16} className="text-slate-500 dark:text-slate-400" />
                  <select
                    value={selectedTech || ''}
                    onChange={(e) => setSelectedTech(e.target.value || null)}
                    className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 w-32 cursor-pointer appearance-none"
                  >
                    <option value="">All Tech</option>
                    {allTechnologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            key={filter}
          >
            {filteredProjects.slice(0, 8).map(project => (
              <motion.div
                key={project.id}
                variants={item}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold tracking-widest border-2 border-white px-6 py-2 uppercase text-xs hover:bg-white hover:text-black transition-colors rounded-sm">
                      View
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.humor && (
                      <span className="bg-[#EC1D24] text-white text-[10px] font-black px-2 py-1 rounded shadow-sm border border-black/20 uppercase tracking-wide">FUN</span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-[#EC1D24] transition-colors leading-none">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32">
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">No projects found matching your filters.</p>
              <button
                onClick={() => { setFilter('all'); setSelectedTech(null); }}
                className="mt-4 text-[#EC1D24] font-bold uppercase text-sm hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/TROJANmocX?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-sm rounded hover:scale-105 transition-transform shadow-2xl hover:shadow-[#EC1D24]/20 border-2 border-transparent hover:border-[#EC1D24] dark:hover:border-[#EC1D24]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={22} /> View all projects on GitHub
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white dark:bg-[#0a0a0a] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-full border border-slate-200 dark:border-white/20 hover:bg-[#EC1D24] hover:border-[#EC1D24] hover:text-white transition-colors z-10 shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto min-h-[400px] relative overflow-hidden group">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                      {selectedProject.title}
                    </h3>
                    <div className="w-16 h-1.5 bg-[#EC1D24] mb-6"></div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-bold py-1.5 px-4 bg-white/10 text-white border border-white/20 rounded-full uppercase tracking-wider backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-10 md:p-12 flex flex-col bg-white dark:bg-[#0a0a0a]">
                  <div className="space-y-10 flex-grow">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase mb-4 flex items-center gap-2 tracking-widest">
                        <span className="w-2 h-2 bg-[#EC1D24] rounded-full"></span> Overview
                      </h4>
                      <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed font-medium">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.problem && (
                      <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                        <h4 className="text-xs font-black text-red-600 dark:text-red-400 uppercase mb-3 flex items-center gap-2 tracking-widest">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span> The Challenge
                        </h4>
                        <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium">
                          {selectedProject.problem}
                        </p>
                      </div>
                    )}

                    {selectedProject.solution && (
                      <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
                        <h4 className="text-xs font-black text-green-600 dark:text-green-400 uppercase mb-3 flex items-center gap-2 tracking-widest">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span> The Solution
                        </h4>
                        <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-10 pt-10 border-t border-slate-100 dark:border-white/5 flex gap-4">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-wider hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] dark:hover:text-white transition-all rounded-xl shadow-lg"
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
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-transparent text-black dark:text-white font-black uppercase tracking-wider border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded-xl shadow-lg"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </motion.a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-400 font-black uppercase tracking-wider border-2 border-gray-200 dark:border-gray-700 cursor-not-allowed opacity-50 rounded-xl"
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