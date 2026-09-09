import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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



  return (
    <>
      {/* Loading Transition */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content View */}
      {!loading && (
        <motion.div 
          className="relative min-h-screen text-textPrimary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Clean & Modern Professional Background */}
          <ProfessionalBackground />

          {/* Dynamic mouse-following radial overlay spotlight */}
          <MouseGlow />

          {/* Minimal sticky navigation menu */}
          <Navbar />

          {/* Structured Sections */}
          <main className="relative z-10 space-y-8 sm:space-y-16">
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

          {/* Redesigned Footer */}
          <Footer />
          
          <Chatbot />
        </motion.div>
      )}
    </>
  );
}

export default App;
