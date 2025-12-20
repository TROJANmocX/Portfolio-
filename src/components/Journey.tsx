import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Journey: React.FC = () => {
    const timelineData = [
        {
            type: 'work',
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            period: '2023 – Present',
            description: [
                'Built custom websites and dashboards using React, Next.js, and Tailwind CSS.',
                'Focused on clean performance, responsive design, and modern UI/UX.',
                'Delivered full-stack features using Python, APIs, and automation tools.',
            ],
            icon: <Briefcase size={20} />,
        },
        {
            type: 'work',
            role: 'AI & Tooling Projects',
            company: 'Personal Projects',
            period: '2023 – Present',
            description: [
                'Developed AI-powered tools including gesture-controlled systems and MIA.',
                'Integrated OpenCV, MediaPipe, and FastAPI for experimental interfaces.',
                'Designed full product flows: UI, backend, ML integration, and deployment.',
            ],
            icon: <Briefcase size={20} />,
        },
        {
            type: 'education',
            role: 'B.Tech in Computer Science',
            company: 'SRM Institute of Science and Technology',
            period: '2023 – 2027',
            description: 'Focused on software engineering, problem-solving, modern web technologies, and building scalable applications.',
            icon: <GraduationCap size={20} />,
        },
        {
            type: 'education',
            role: 'Higher Secondary Education',
            company: 'Escorts World School',
            period: '2021 – 2023',
            description: 'Specialized in Physics, Chemistry, and Mathematics.',
            icon: <GraduationCap size={20} />,
        },
    ];

    return (
        <section id="journey" className="py-20 bg-[#F7F7F7] dark:bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#1C1C1C] dark:text-white mb-4 tracking-tighter">
                        MY <span className="text-[#EC1D24]">JOURNEY</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        The path I've taken to build, learn, and evolve.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-[#EC1D24] border-4 border-white dark:border-[#0a0a0a] md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(236,29,36,0.2)]"></div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-6 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`bg-white dark:bg-[#111] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[#EC1D24]/30 transition-all duration-300 relative group ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}>
                                        {/* Arrow */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-[#111] border-t border-r border-slate-200 dark:border-white/10 rotate-45 transition-colors duration-300 group-hover:border-[#EC1D24]/30 ${index % 2 === 0
                                                ? '-right-2 border-l-0 border-b-0'
                                                : '-left-2 border-t-0 border-r-0 border-b border-l'
                                            }`}></div>

                                        <div className={`flex items-center gap-3 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="p-2 bg-[#EC1D24]/10 rounded-lg text-[#EC1D24]">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#1C1C1C] dark:text-white leading-tight">
                                                    {item.role}
                                                </h3>
                                                <div className={`flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                                    <span className="flex items-center gap-1"><MapPin size={12} /> {item.company}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-2 text-xs font-bold text-[#EC1D24] uppercase tracking-widest mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            <Calendar size={12} /> {item.period}
                                        </div>

                                        {Array.isArray(item.description) ? (
                                            <ul className={`space-y-2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                                                {item.description.map((desc, i) => (
                                                    <li key={i} className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium flex gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EC1D24] flex-shrink-0"></span>
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
