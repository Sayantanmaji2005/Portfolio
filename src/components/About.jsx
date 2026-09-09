import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiActivity, FiCpu, FiShield, FiUser, FiPenTool, FiMapPin } from 'react-icons/fi';

const specialties = [
  { name: 'React.js', color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30' },
  { name: 'Node.js', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
  { name: 'Express.js', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30' },
  { name: 'MongoDB', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
  { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30' },
  { name: 'HTML5/CSS3', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30' },
  { name: 'Groq AI', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30' },
  { name: 'Supabase', color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30' },
];

const cardVar = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      delay: i * 0.08, 
      ease: [0.16, 1, 0.3, 1]
    },
  }),
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-left mb-16"
      >
        <span className="section-label">01 // Profile</span>
        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">About</span>
          <span> Sayantan</span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          An engineering student combining computer science fundamentals with MERN stack web development and artificial intelligence systems.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* ── CARD 1: Bio & Academic Journey (Span 8) ── */}
        <motion.div 
          custom={0} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-8 bento-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiBookOpen className="w-4 h-4" />
              <span>The Journey</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              B.Tech Computer Science &amp; Engineering
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Currently pursuing my undergraduate studies at{' '}
              <strong className="text-slate-900 dark:text-white font-bold underline underline-offset-4 decoration-sky-500/50">Haldia Institute of Technology</strong>{' '}
              (2023 – 2027). I specialize in building complete web systems from database structures to <span className="text-sky-600 dark:text-sky-400 font-semibold">high-fidelity frontend interfaces</span>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              My engineering approach focuses on writing maintainable, scalable code — leveraging caching structures like <span className="text-sky-600 dark:text-sky-400 font-mono font-semibold">Redis</span>,
              containerizing workspaces via <span className="text-sky-600 dark:text-sky-400 font-mono font-semibold">Docker</span>, and securing transactions with <span className="text-sky-600 dark:text-sky-400 font-mono font-semibold">JWT</span>. Recently extended into{' '}
              <strong className="text-sky-600 dark:text-sky-300 font-bold">AI-integrated applications</strong> using Groq Cloud LLM APIs.
            </p>
          </div>

          <div className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 relative z-10">
            <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <FiMapPin className="text-sky-600 dark:text-sky-400" /> HIT Haldia, West Bengal
            </span>
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Est. Graduation: June 2027</span>
          </div>
        </motion.div>

        {/* ── CARD 2: Academic CGPA Callout (Span 4) ── */}
        <motion.div 
          custom={1} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-4 bento-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiShield className="w-4 h-4" />
              <span>Academics</span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Cumulative Grade Point</p>
            <div className="py-4 flex items-baseline gap-2">
              <span 
                className="text-6xl sm:text-7xl font-black tracking-tight"
                style={{
                  fontFamily: 'Syne, Space Grotesk, sans-serif',
                  background: 'linear-gradient(135deg, #10B981, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                7.13
              </span>
              <span className="text-lg font-mono text-slate-500 dark:text-slate-400 font-bold">/ 10</span>
            </div>
          </div>
          <p className="text-xs font-mono text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-white/10 relative z-10 leading-relaxed">
            Consistent learning across algorithms, database systems, and OOP paradigms.
          </p>
        </motion.div>

        {/* ── CARD 3: Core Specialization Stack (Span 4) ── */}
        <motion.div 
          custom={2} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-4 bento-card p-7 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiActivity className="w-4 h-4" />
              <span>Core Stack</span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Current Specialization</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {specialties.map((s) => (
                <span 
                  key={s.name} 
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold transition-transform duration-200 hover:scale-105 ${s.color}`}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs font-mono text-slate-600 dark:text-slate-300 pt-4 mt-4 border-t border-slate-200 dark:border-white/10 relative z-10">
            Actively constructing production-ready full-stack applications.
          </p>
        </motion.div>

        {/* ── CARD 4: Milestones & Stats (Span 8) ── */}
        <motion.div 
          custom={3} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-8 bento-card p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiCpu className="w-4 h-4" />
              <span>Milestones &amp; Impact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {[
                { label: 'Internships', value: '02', sub: 'AI For Everyone & CDAC', color: 'text-sky-600 dark:text-sky-400' },
                { label: 'AI Credentials', value: '02', sub: 'Certified AI Builder (L2)', color: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Code Projects', value: '07+', sub: 'LIMS • MERN Stack', color: 'text-amber-600 dark:text-amber-400' },
              ].map((m) => (
                <div key={m.label} className="space-y-1">
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">{m.label}</p>
                  <p className={`text-4xl sm:text-5xl font-black font-heading ${m.color}`}>
                    {m.value}
                  </p>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-300 font-medium">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs font-mono text-slate-600 dark:text-slate-300 pt-4 mt-6 border-t border-slate-200 dark:border-white/10 relative z-10">
            Hands-on team software collaboration and self-motivated open-source contribution.
          </p>
        </motion.div>

        {/* ── CARD 5: Personal Registry (Span 7) ── */}
        <motion.div 
          custom={4} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-7 bento-card p-7 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiUser className="w-4 h-4" />
              <span>Personal Registry</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans pt-1">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block">Identity &amp; Details</span>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm">Gender: <span className="text-slate-900 dark:text-white font-bold">Male</span></p>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm">Status: <span className="text-slate-900 dark:text-white font-bold">Single</span></p>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm">DOB: <span className="text-slate-900 dark:text-white font-bold">15 Apr, 2005</span></p>
                <p className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm">Languages: <span className="text-slate-900 dark:text-white font-bold">English, Hindi, Bengali</span></p>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-1">Current Address</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Kshudiram nagar, Haldia, Purba Medinipur, West Bengal - 721657
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-1">Permanent Address</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    DINGAL, DEBRA, PASCHIM MEDINIPUR, West Bengal - 721160
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-4 mt-6 border-t border-slate-200 dark:border-white/10 relative z-10">
            Verified identity credentials. Contact line: +91 9002761536
          </p>
        </motion.div>

        {/* ── CARD 6: Interests & Hobbies (Span 5) ── */}
        <motion.div 
          custom={5} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={cardVar}
          className="md:col-span-5 bento-card p-7 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-widest font-mono">
              <FiActivity className="w-4 h-4" />
              <span>Interests &amp; Hobbies</span>
            </div>
            
            <div className="space-y-3.5 pt-1">
              {/* Football Hobby */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-all duration-300 hover:translate-x-1 hover:border-sky-500/30">
                <div className="p-2.5 rounded-xl flex-shrink-0 bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <FiActivity className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Football</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-normal">
                    Strategy, team coordination, &amp; physical endurance.
                  </p>
                </div>
              </div>

              {/* Drawing Hobby */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-all duration-300 hover:translate-x-1 hover:border-indigo-500/30">
                <div className="p-2.5 rounded-xl flex-shrink-0 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <FiPenTool className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Drawing &amp; Sketching</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-normal">
                    Creative visualization, layouts, &amp; UI concept designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-4 mt-6 border-t border-slate-200 dark:border-white/10 relative z-10">
            Active pursuits outside core engineering.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
