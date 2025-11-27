import React, { useState } from 'react';
import { Github, ExternalLink, Code, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'real' | 'fun'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'real') return !project.humor;
    if (filter === 'fun') return project.humor;
    return true;
  });

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
    <section id="projects" className="py-16 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[95%] 2xl:max-w-screen-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mt-2 mb-6 text-slate-900 dark:text-white tracking-tighter">
            FEATURED <span className="text-[#EC1D24]">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC1D24] mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            A collection of my work ranging from AI assistants to web applications.
          </p>

          <div className="flex flex-wrap justify-center mt-10 gap-4">
            {['all', 'real', 'fun'].map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType as 'all' | 'real' | 'fun')}
                className={`px-6 py-2 rounded-none text-sm font-bold uppercase tracking-wider border-2 border-black dark:border-white transition-all ${filter === filterType
                  ? 'bg-[#EC1D24] text-white border-[#EC1D24] dark:border-[#EC1D24] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -translate-y-1'
                  : 'bg-transparent text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterType}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={item}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="card-marvel h-full flex flex-col bg-white dark:bg-[#111] p-0 cursor-pointer group"
            >
              <div className="relative overflow-hidden h-64 border-b-2 border-black dark:border-white/20">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.humor && (
                    <span className="bg-[#EC1D24] text-white text-xs font-bold py-1 px-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      FUN
                    </span>
                  )}
                  {project.featured && !project.humor && (
                    <span className="bg-yellow-400 text-black text-xs font-bold py-1 px-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest border-2 border-white px-4 py-2 uppercase">View Details</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-[#EC1D24] transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow font-medium line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/TROJANmocX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-marvel inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={20} className="mr-2" /> VIEW MORE ON GITHUB
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#111] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_#EC1D24] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-full border-2 border-black dark:border-white hover:bg-[#EC1D24] hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-full min-h-[300px]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-bold py-1 px-3 bg-[#EC1D24]/10 text-[#EC1D24] border border-[#EC1D24]/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mt-auto flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] dark:hover:text-white transition-colors border-2 border-transparent"
                    >
                      <Github size={20} /> View Code
                    </a>
                    {selectedProject.demoUrl ? (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-transparent text-black dark:text-white font-bold uppercase tracking-wider border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-400 font-bold uppercase tracking-wider border-2 border-gray-200 dark:border-gray-700 cursor-not-allowed"
                      >
                        <ExternalLink size={20} /> No Demo
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