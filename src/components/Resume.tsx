import React, { useState } from 'react';
import { Briefcase, GraduationCap, Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science",
      institution: "SRM Institute of Science and Technology",
      period: "2023 – 2027",
      status: "IN PROGRESS",
      description: "Specializing in Software Engineering, AI, and Distributed Systems. Maintaining a focus on practical application of theory."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Escorts World School",
      period: "2021 – 2023",
      status: "COMPLETED",
      description: "Foundation in Physics, Chemistry, and Mathematics. Graduated with distinction."
    }
  ];

  const experience = [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 – Present",
      status: "ACTIVE",
      description: [
        "Architecting custom web solutions using the React ecosystem and Next.js.",
        "Building interactive experiences like 'Music-as-Memory' and 'VibeCraft-AI'.",
        "Deploying full-stack applications with automated CI/CD pipelines."
      ]
    },
    {
      id: 2,
      role: "AI & Tooling Developer",
      company: "Independent Research",
      period: "2023 – Present",
      status: "R&D",
      description: [
        "Developing experimental AI interfaces like 'MedGuardian' and 'ExplainThis.live'.",
        "Created 'MIA' (Voice Assistant) and 'Quantum Weather App' (Decision Intelligence).",
        "Exploring Large Language Model integration for local environments."
      ]
    }
  ];

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    // Simulate decryption/download delay
    setTimeout(() => {
      setIsDownloading(false);
      window.open('/resume.pdf', '_blank');
    }, 2000);
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[95%] 2xl:max-w-screen-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 border-b border-slate-200 dark:border-white/10 pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
              CAREER <span className="text-[#EC1D24]">LOG</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium max-w-xl">
              A chronological record of my academic and professional trajectory.
            </p>
          </div>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="group relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-wait"
          >
            <span className={`flex items-center gap-2 relative z-10 ${isDownloading ? 'opacity-0' : 'opacity-100'}`}>
              Download CV <Download size={16} />
            </span>
            {isDownloading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#EC1D24]/10 rounded-lg text-[#EC1D24]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Education</h3>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10"></div>

              {education.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-[#EC1D24] rounded-full"></div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded uppercase tracking-wider whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-[#EC1D24] mb-3 uppercase tracking-wide">{item.institution}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#EC1D24]/10 rounded-lg text-[#EC1D24]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Experience</h3>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10"></div>

              {experience.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-[#EC1D24] rounded-full"></div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded uppercase tracking-wider whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-[#EC1D24] mb-4 uppercase tracking-wide">{item.company}</p>

                  <ul className="space-y-2">
                    {item.description.map((point, index) => (
                      <li key={index} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <ChevronRight size={14} className="mt-1 text-slate-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
