import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Product Manager",
        company: "TechFlow",
        content: "Arish transformed our vague requirements into a high-performance web application. His attention to detail and ability to solve complex problems is unmatched.",
        rating: 5,
        verified: true
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "CTO",
        company: "StartupX",
        content: "Working with Arish was a breeze. He's not just a coder, but a product thinker who adds value at every step of the development process.",
        rating: 5,
        verified: true
    },
    {
        id: 3,
        name: "David Chen",
        role: "Lead Developer",
        company: "Innovate Inc",
        content: "The code quality delivered was exceptional. Clean, modular, and well-documented. Highly recommend him for any complex frontend work.",
        rating: 5,
        verified: true
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#0f0f0f] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#EC1D24]/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter">
                        THE <span className="text-[#EC1D24]">ALLIES</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium">
                        Don't just take my word for it. Here's what people I've worked with have to say.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/5 shadow-2xl relative mx-4 md:mx-0">
                                <div className="absolute -top-6 left-8 md:-left-6 bg-[#EC1D24] text-white p-4 rounded-2xl shadow-lg shadow-red-500/30">
                                    <Quote size={32} fill="currentColor" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pt-6 md:pt-0">
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex justify-center md:justify-start gap-1 mb-6">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-[#EC1D24] text-[#EC1D24]" />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed font-medium italic">
                                            "{testimonials[currentIndex].content}"
                                        </p>

                                        <div className="flex items-center justify-center md:justify-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-lg">
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                                                    {testimonials[currentIndex].name}
                                                    {testimonials[currentIndex].verified && (
                                                        <span className="text-blue-500" title="Verified Client">
                                                            <CheckCircle2 size={16} fill="currentColor" className="text-white dark:text-[#1a1a1a]" />
                                                        </span>
                                                    )}
                                                </h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-[#1a1a1a] rounded-full shadow-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-[#1a1a1a] rounded-full shadow-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-[#EC1D24] hover:text-white hover:border-[#EC1D24] transition-all duration-300"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8 md:mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-[#EC1D24] w-8'
                                : 'bg-slate-300 dark:bg-slate-700 hover:bg-[#EC1D24]/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
