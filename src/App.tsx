import React, { Suspense } from 'react';
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

// Lazy load heavy components
const Projects = React.lazy(() => import('./components/Projects'));
const Resume = React.lazy(() => import('./components/Resume'));
const Skills = React.lazy(() => import('./components/Skills'));

const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));


function App() {

  return (
    <div className="min-h-screen bg-background text-dark-900 transition-colors duration-300 relative overflow-hidden cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <ClickSound />
      <CopyFeedback />
      <StoryOverlay />

      {/* Global Background Effects - Cleaned Up */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <AboutMe />
        <Suspense fallback={<SkeletonLoader />}>
          <Skills />
          <Projects />
          <Blog />
          <Resume />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;