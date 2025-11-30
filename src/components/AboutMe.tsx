import React from 'react';
import { Laptop, Headphones, BookOpen, Code, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const features = [
    {
      icon: <Laptop className="w-8 h-8 text-black dark:text-white" />,
      title: 'CS Student',
      description: 'Focusing on AI, system architecture, and building practical tools that solve real problems.',
      color: 'bg-blue-200 dark:bg-blue-900'
    },
    {
      icon: <Code className="w-8 h-8 text-black dark:text-white" />,
      title: 'Developer',
      description: 'Creating clean interfaces and efficient backend logic with a mix of curiosity and intention.',
      color: 'bg-purple-200 dark:bg-purple-900'
    },
    {
      icon: <Zap className="w-8 h-8 text-black dark:text-white" />,
      title: 'Innovator',
      description: 'Experimenting with gesture-based systems, AI assistants, and full-stack applications.',
      color: 'bg-yellow-200 dark:bg-yellow-900'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-black dark:text-white" />,
      title: 'Learner',
      description: 'Constantly exploring new languages and frameworks to build polished, purposeful systems.',
      color: 'bg-green-200 dark:bg-green-900'
    },
    {
      icon: <Headphones className="w-8 h-8 text-black dark:text-white" />,
      title: 'Creator',
      description: 'Blending creativity with engineering to build things that matter and evolve fast.',
      color: 'bg-pink-200 dark:bg-pink-900'
    },
    {
      icon: <Heart className="w-8 h-8 text-black dark:text-white" />,
      title: 'Problem Solver',
      description: 'If something breaks, I figure out why, fix it, and redesign it so it doesn\'t happen again.',
      color: 'bg-red-200 dark:bg-red-900'
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="py-12 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 bg-purple-300 dark:bg-purple-600 text-black font-bold text-[10px] mb-2 transform rotate-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            WHO I AM
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-1 mb-3 text-black dark:text-white tracking-tighter">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ME</span>
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            I'm a Computer Science student with a strong interest in AI, system architecture, and building practical tools that actually solve problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-vibrant p-5 group bg-white dark:bg-[#151515]"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`mb-3 p-2.5 rounded-xl ${feature.color} inline-block border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-black mb-1.5 text-black dark:text-white uppercase tracking-tight">{feature.title}</h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 bg-black dark:bg-white rounded-xl shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] border-4 border-black dark:border-white overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center p-6 relative z-10">
            <div className="text-white dark:text-black">
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">My Philosophy</h3>
              <div className="space-y-2 text-gray-300 dark:text-gray-700 leading-relaxed font-medium text-sm">
                <p>
                  I approach development with a mix of curiosity and intention—if something breaks, I figure out why, fix it, and redesign it so it doesn’t happen again.
                </p>
                <p>
                  My work revolves around creating clean interfaces, writing efficient backend logic, and experimenting with new technologies that push my skills forward.
                </p>
                <p className="font-bold text-white dark:text-black pt-1">
                  I’m not trying to be perfect; I’m trying to evolve fast and build things that matter.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-black p-5 rounded-xl border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h4 className="text-lg font-black mb-3 text-black dark:text-white font-mono flex items-center border-b-4 border-black dark:border-white pb-2">
                <span className="text-purple-600 mr-2">&gt;</span> QUICK_FACTS
              </h4>
              <ul className="space-y-2 text-slate-800 dark:text-slate-200 font-bold text-xs">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-purple-500 border-2 border-black dark:border-white mt-0.5 mr-2 flex-shrink-0"></span>
                  <span>Computer Science student with a focus on AI and software engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 border-2 border-black dark:border-white mt-0.5 mr-2 flex-shrink-0"></span>
                  <span>Experience across frontend, backend, and machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-yellow-500 border-2 border-black dark:border-white mt-0.5 mr-2 flex-shrink-0"></span>
                  <span>Currently building AI-powered tools and experimental interaction systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-green-500 border-2 border-black dark:border-white mt-0.5 mr-2 flex-shrink-0"></span>
                  <span>Strong interest in system design, automation, and human-tech interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;