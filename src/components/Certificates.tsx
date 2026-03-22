import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';
import { certificates } from '../data/certificatesData';
import HackerText from './HackerText';
import SpotlightCard from './SpotlightCard';
import ScrollPeelReveal from './ScrollPeelReveal';

const Certificates: React.FC = () => {
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
    <section id="certificates" className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[95%] 2xl:max-w-screen-2xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white tracking-tighter">
            MY <HackerText text="CERTIFICATES" className="text-[#EC1D24] cursor-default" />
          </h2>
          <div className="w-24 h-1.5 bg-[#EC1D24] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Continuous learning and official validations of my expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full relative group"
            >
              <ScrollPeelReveal className="h-full">
                <SpotlightCard className="h-full bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 p-8 flex flex-col">
                  
                  <div className="w-16 h-16 bg-[#EC1D24]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#EC1D24]/20 text-[#EC1D24]">
                    <Award size={32} />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight leading-tight group-hover:text-[#EC1D24] transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">
                    Issued by <span className="text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                  </p>

                  <div className="mt-auto flex gap-3 pt-6 border-t border-slate-100 dark:border-white/5">
                    <a
                      href={cert.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] md:text-xs tracking-wider hover:bg-[#EC1D24] dark:hover:bg-[#EC1D24] dark:hover:text-white transition-all rounded shadow border-2 border-transparent"
                    >
                      <FileText size={16} /> View PDF
                    </a>
                    {cert.externalLink && (
                      <a
                        href={cert.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-transparent text-black dark:text-white font-black uppercase text-[10px] md:text-xs tracking-wider border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded shadow"
                      >
                        <ExternalLink size={16} /> Verify
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </ScrollPeelReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
