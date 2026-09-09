import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub className="w-4.5 h-4.5" />, url: 'https://github.com/Sayantanmaji2005' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-4.5 h-4.5" />, url: 'https://linkedin.com/in/sayantanmaji2005' },
    { name: 'Email', icon: <FiMail className="w-4.5 h-4.5" />, url: 'mailto:sayantanmaji2005@gmail.com' },
  ];

  const techBadges = ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-14 pb-10 border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#08090D]/90 backdrop-blur-xl transition-colors duration-300">
      {/* Subtle top gradient glow stroke */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/10">
          
          {/* Left Column: Branding */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-xs font-black text-white shadow-md">
                SM
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                Sayantan Maji
              </span>
            </div>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-300 font-medium">
              Full Stack MERN Developer • AI Systems Builder
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
              <FiCode className="w-3.5 h-3.5 text-sky-500" />
              <span>Engineered with React, Tailwind &amp; Framer Motion</span>
            </p>
          </div>

          {/* Middle Column: Tech Badges */}
          <div className="hidden lg:flex items-center gap-2">
            {techBadges.map((badge) => (
              <span 
                key={badge} 
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Right Column: Social Links & Scroll Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <motion.a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ scale: 1.08, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 shadow-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* Scroll Back To Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer flex items-center justify-center"
            >
              <FiArrowUp className="w-4.5 h-4.5" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Sayantan Maji. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
