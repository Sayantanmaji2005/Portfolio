import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ProfessionalBackground from './components/ProfessionalBackground';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth lightweight top scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Loading Transition */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content View */}
      {!loading && (
        <div className="relative min-h-screen text-textPrimary selection:bg-blue-500/20">
          {/* Top Sticky Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 z-50 origin-left pointer-events-none"
            style={{ 
              scaleX,
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.7)'
            }}
          />

          {/* Lightweight High-Performance Professional Background */}
          <ProfessionalBackground />

          {/* Dynamic mouse-following radial overlay spotlight */}
          <MouseGlow />

          {/* Minimal sticky navigation menu */}
          <Navbar />

          {/* Main Structured Sections */}
          <main className="relative z-10 space-y-12 sm:space-y-20">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Terminal />
            <Projects />
            <Github />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
          
          <Chatbot />
        </div>
      )}
    </>
  );
}

export default App;
