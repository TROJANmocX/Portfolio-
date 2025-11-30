import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Product Manager",
        company: "TechFlow",
        content: "Arish transformed our vague requirements into a high-performance web application. His attention to detail and ability to solve complex problems is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "CTO",
        company: "StartupX",
        content: "Working with Arish was a breeze. He's not just a coder, but a product thinker who adds value at every step of the development process.",
        rating: 5
    },
    {
        id: 3,
        name: "David Chen",
        role: "Lead Developer",
        company: "Innovate Inc",
        content: "The code quality delivered was exceptional. Clean, modular, and well-documented. Highly recommend him for any complex frontend work.",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-50 dark:bg-[#0f0f0f] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter">
                        CLIENT <span className="text-[#EC1D24]">STORIES</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium">
                        Don't just take my word for it. Here's what people I've worked with have to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-lg relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-6 right-6 text-[#EC1D24]/10 group-hover:text-[#EC1D24]/20 transition-colors">
                                <Quote size={48} />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-[#EC1D24] text-[#EC1D24]" />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}, {item.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
