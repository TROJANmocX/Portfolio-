import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SkeletonLoader from './components/SkeletonLoader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

// Lazy load heavy components
const Projects = React.lazy(() => import('./components/Projects'));
const Resume = React.lazy(() => import('./components/Resume'));
const Skills = React.lazy(() => import('./components/Skills'));
const Terminal = React.lazy(() => import('./components/Terminal'));
const Chatbot = React.lazy(() => import('./components/Chatbot'));
const MusicWidget = React.lazy(() => import('./components/MusicWidget'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));


function App() {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    const meteorCount = 20;
    setMeteors(new Array(meteorCount).fill(0));
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark-900 transition-colors duration-300 relative overflow-hidden cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Stars */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        {/* Meteors */}
        {meteors.map((_, idx) => (
          <span
            key={idx}
            className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor"
            style={{
              top: 0,
              left: Math.floor(Math.random() * (window.innerWidth - -400) + -400) + 'px',
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
            }}
          >
            <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Suspense fallback={<SkeletonLoader />}>
          <Skills />
          <Projects />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center max-w-[90%] mx-auto px-4 py-20">
            <div className="w-full">
              <Terminal />
            </div>
            <div className="w-full">
              <Chatbot />
            </div>
            <div className="w-full">
              <MusicWidget />
            </div>
          </div>
          <Resume />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;