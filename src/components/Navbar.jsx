import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUser, 
  FiCpu, 
  FiFolder, 
  FiTerminal, 
  FiGithub,
  FiMail, 
  FiSun, 
  FiMoon 
} from 'react-icons/fi';
import { FaSeedling } from 'react-icons/fa6';
import useSoundEffects from '../hooks/useSoundEffects';

const dockLinks = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'skills', label: 'Skills', icon: <FiCpu /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder /> },
  { id: 'terminal', label: 'Terminal', icon: <FiTerminal /> },
  { id: 'vision', label: 'SeedMart Vision', icon: <FaSeedling /> },
  { id: 'github', label: 'GitHub', icon: <FiGithub /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
];

const Navbar = () => {
  const { playHover, playClick } = useSoundEffects();
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true;
    }
    return true;
  });

  /* ── Dynamic Theme Synchronization ── */
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  /* ── Active-section observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
    );

    dockLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      dockLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-8 flex items-center justify-between border-b backdrop-blur-xl transition-colors duration-300 bg-white/80 dark:bg-[#0B0F19]/85 border-slate-200/80 dark:border-white/10"
    >
      {/* ── Left Branding Logo ── */}
      <div 
        className="flex items-center gap-2.5 cursor-pointer select-none"
        onClick={() => scrollToSection('home')}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-xs shadow-md">
          SM
        </div>
        <span className="hidden sm:inline-block font-bold text-sm tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
          Sayantan Maji
        </span>
      </div>

      {/* ── Center Navigation Dock ── */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-950/90 border border-slate-200/80 dark:border-slate-800 shadow-lg backdrop-blur-xl transition-colors duration-300">
        {dockLinks.map(({ id, label, icon }) => {
          const isActive = activeSection === id;
          return (
            <div key={id} className="relative group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  scrollToSection(id);
                }}
                onMouseEnter={playHover}
                className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer relative ${
                  isActive
                    ? 'text-blue-600 dark:text-white bg-white dark:bg-white/20 shadow-sm font-bold scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                }`}
                aria-label={label}
              >
                <span className="text-base sm:text-lg [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-4.5 sm:[&>svg]:h-4.5">
                  {icon}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="dockActiveDot"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-600 dark:bg-sky-400 shadow-[0_0_8px_#38bdf8]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>

              {/* Tooltip Label on Hover */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl">
                {label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Right Action Controls ── */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Availability Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span>Open to Work</span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => {
            playClick();
            setIsDark(!isDark);
          }}
          onMouseEnter={playHover}
          className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-amber-500 dark:text-sky-400 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300 cursor-pointer flex items-center justify-center shadow-sm overflow-hidden"
          aria-label="Toggle theme"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <motion.div
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -70, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <FiSun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-indigo-600" />
            )}
          </motion.div>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
