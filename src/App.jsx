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
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll progress physics (0 lag, 60fps)
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
        <motion.div 
          className="relative min-h-screen text-textPrimary selection:bg-blue-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Sticky Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 z-50 origin-left pointer-events-none"
            style={{ 
              scaleX,
              boxShadow: '0 0 14px rgba(56, 189, 248, 0.9)'
            }}
          />

          {/* Clean & Modern Professional Background */}
          <ProfessionalBackground />

          {/* Dynamic mouse-following radial overlay spotlight */}
          <MouseGlow />

          {/* Minimal sticky navigation menu */}
          <Navbar />

          {/* Structured Sections with Cascading Sequential Scroll Reveal */}
          <main className="relative z-10 space-y-12 sm:space-y-20">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <About />
            </ScrollReveal>

            {/* Skills Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Skills />
            </ScrollReveal>

            {/* Education Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Education />
            </ScrollReveal>

            {/* Experience Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Experience />
            </ScrollReveal>

            {/* Interactive Terminal Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Terminal />
            </ScrollReveal>

            {/* Projects Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Projects />
            </ScrollReveal>

            {/* GitHub Telemetry Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Github />
            </ScrollReveal>

            {/* Contact Section */}
            <ScrollReveal direction="up" delay={0.05} distance={40}>
              <Contact />
            </ScrollReveal>
          </main>

          {/* Footer */}
          <ScrollReveal direction="up" delay={0.05} distance={20}>
            <Footer />
          </ScrollReveal>
          
          <Chatbot />
        </motion.div>
      )}
    </>
  );
}

export default App;
