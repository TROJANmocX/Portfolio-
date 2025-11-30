import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Journey: React.FC = () => {
    const education = [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'SRM Institute of Science and Technology, Delhi NCR Campus',
            period: '2023 – 2027',
            description: 'Focused on software engineering, problem-solving, modern web technologies, and building scalable applications.',
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'Escorts World School',
            period: '2021 – 2023',
            description: 'Specialized in Physics, Chemistry, and Mathematics.',
        },
    ];

    const experience = [
        {
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            period: '2023 – Present',
            description: [
                'Built custom websites and dashboards using React, Next.js, and Tailwind CSS.',
                'Focused on clean performance, responsive design, and modern UI/UX.',
                'Delivered full-stack features using Python, APIs, and automation tools.',
                'Worked with clients to ship polished, reliable solutions.',
            ],
        },
        {
            role: 'AI & Tooling Projects (Independent)',
            company: 'Personal Projects',
            period: '2023 – Present',
            description: [
                'Developed AI-powered tools including gesture-controlled systems, a voice-activated desktop assistant (MIA), and data dashboards.',
                'Integrated OpenCV, MediaPipe, Python automation, and FastAPI to create experimental interfaces.',
                'Designed full product flows: UI, backend, ML integration, and deployment.',
            ],
        },
    ];

    return (
        <section id="journey" className="py-16 bg-[#F7F7F7] dark:bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] dark:text-white mb-3 tracking-tighter">
                        MY <span className="text-[#EC1D24]">JOURNEY</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        The path I've taken to build, learn, and evolve.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-[#EC1D24]/10 rounded-xl text-[#EC1D24]">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1C1C1C] dark:text-white uppercase tracking-tight">Education</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 relative">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#EC1D24]"></span>
                                    <h4 className="text-lg font-bold text-[#1C1C1C] dark:text-white mb-1">{edu.degree}</h4>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-2">
                                        <span className="flex items-center gap-1"><Briefcase size={12} /> {edu.institution}</span>
                                        <span className="hidden sm:block">•</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-[#EC1D24]/10 rounded-xl text-[#EC1D24]">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1C1C1C] dark:text-white uppercase tracking-tight">Experience</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 relative">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#EC1D24]"></span>
                                    <h4 className="text-lg font-bold text-[#1C1C1C] dark:text-white mb-1">{exp.role}</h4>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-2">
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {exp.company}</span>
                                        <span className="hidden sm:block">•</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EC1D24] flex-shrink-0"></span>
                                                <span>{item}</span>
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

export default Journey;
