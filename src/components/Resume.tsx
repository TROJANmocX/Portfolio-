import React from 'react';
import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science",
      institution: "SRM Institute of Science and Technology, Delhi NCR Campus",
      period: "2023 – 2027",
      description: "Focused on software engineering, problem-solving, modern web technologies, and building scalable applications."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Escorts World School",
      period: "2021 – 2023",
      description: "Specialized in Physics, Chemistry, and Mathematics."
    }
  ];

  const experience = [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 – Present",
      description: [
        "Built custom websites and dashboards using React, Next.js, and Tailwind CSS.",
        "Focused on clean performance, responsive design, and modern UI/UX.",
        "Delivered full-stack features using Python, APIs, and automation tools.",
        "Worked with clients to ship polished, reliable solutions."
      ]
    },
    {
      id: 2,
      role: "AI & Tooling Projects (Independent)",
      company: "Personal Projects",
      period: "2023 – Present",
      description: [
        "Developed AI-powered tools including gesture-controlled systems, a voice-activated desktop assistant (MIA), and data dashboards.",
        "Integrated OpenCV, MediaPipe, Python automation, and FastAPI to create experimental interfaces.",
        "Designed full product flows: UI, backend, ML integration, and deployment."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            MY <span className="text-[#EC1D24]">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC1D24] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#EC1D24] text-white rounded-lg shadow-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 dark:border-white/10 ml-4 pl-8 relative">
              {education.map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#EC1D24]"></span>
                  <div className="card-marvel">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC1D24] mb-2 uppercase tracking-wider">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{item.institution}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#EC1D24] text-white rounded-lg shadow-lg">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 dark:border-white/10 ml-4 pl-8 relative">
              {experience.map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#EC1D24]"></span>
                  <div className="card-marvel">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC1D24] mb-2 uppercase tracking-wider">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{item.company}</p>
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-2">
                        {item.description.map((point, index) => (
                          <li key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#EC1D24] flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/resume.pdf"
            download="Arish_Resume.pdf"
            className="group flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-bold text-sm hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] dark:hover:text-white transition-all shadow-lg"
          >
            <Download size={16} className="group-hover:animate-bounce" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
