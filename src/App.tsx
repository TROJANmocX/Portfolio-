import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import AboutMe from './components/AboutMe';
import SkeletonLoader from './components/SkeletonLoader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import ClickSound from './components/ClickSound';
import CopyFeedback from './components/CopyFeedback';
import StoryOverlay from './components/StoryOverlay';
import CursorTrail from './components/CursorTrail';
import HireMeCTA from './components/HireMeCTA';
import PageLoader from './components/PageLoader';
import CosmicBackground from './components/CosmicBackground';

// Lazy load heavy components
const Projects = React.lazy(() => import('./components/Projects'));
const Resume = React.lazy(() => import('./components/Resume'));
const Skills = React.lazy(() => import('./components/Skills'));

const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));


function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-background text-dark-900 transition-colors duration-300 relative overflow-hidden cursor-none">
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.98 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="w-full h-full"
      >
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <ClickSound />
      <CopyFeedback />
      <StoryOverlay />
      <CursorTrail />
      <HireMeCTA />

      {/* Global Background Effects */}
      <CosmicBackground />
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Suspense fallback={<SkeletonLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <Resume />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <Footer />
        </Suspense>
      </div>
      </motion.div>
    </div>
  );
}

export default App;