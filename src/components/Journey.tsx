import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Journey: React.FC = () => {
    const experiences = [
        {
            role: 'MERN Stack Developer Intern',
            company: 'Cognevance Technologies Pvt. Ltd.',
            period: 'Jun 2026 – Jul 2026',
            description: [
                'Working on active live projects under senior engineers, contributing to product development using the MERN stack.',
                'Involved in daily standups, cross-functional collaboration, and deploying software solutions.'
            ],
            icon: <Briefcase size={24} />,
            tags: ['MongoDB', 'Express.js', 'React', 'Node.js']
        },
        {
            role: 'Web Development Intern',
            company: 'Zaalima Development Pvt. Ltd.',
            period: 'Mar 2026 – May 2026',
            description: 'Built and refined UI components, participated in agile sprints, code reviews, and contributed to feature development and bug fixes on a shared codebase.',
            icon: <Briefcase size={24} />,
            tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Git']
        }
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
                        MY <span className="text-[#EC1D24]">EXPERIENCE</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        My professional journey and internships.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl hover:border-[#EC1D24]/30 transition-all duration-300 relative group flex flex-col h-full"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#EC1D24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl pointer-events-none"></div>

                                <div className="flex items-center gap-5 mb-6 relative z-10">
                                    <div className="p-3.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl text-[#EC1D24] group-hover:bg-[#EC1D24]/10 group-hover:border-[#EC1D24]/20 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-[#1C1C1C] dark:text-white leading-tight mb-1.5">
                                            {item.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#EC1D24]/70" /> {item.company}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm font-bold text-[#EC1D24] bg-[#EC1D24]/10 w-fit px-3 py-1.5 rounded-lg uppercase tracking-widest mb-6 relative z-10">
                                    <Calendar size={14} /> {item.period}
                                </div>

                                <div className="flex-grow mb-8 relative z-10">
                                    {Array.isArray(item.description) ? (
                                        <ul className="space-y-3.5">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium flex gap-3.5">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#EC1D24] flex-shrink-0 shadow-[0_0_8px_rgba(236,29,36,0.6)]"></span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                {item.tags && (
                                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2.5 relative z-10">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="px-3.5 py-1.5 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-colors duration-300 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
