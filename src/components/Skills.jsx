import { motion } from 'framer-motion';
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiCode, 
  FiCloud, 
  FiCpu, 
  FiGlobe, 
  FiTerminal, 
  FiBox, 
  FiGithub,
  FiZap,
  FiShield
} from 'react-icons/fi';

const bentoCategories = [
  {
    title: "Front-End Development",
    desc: "Crafting responsive, pixel-perfect user interfaces with modern component frameworks and custom design systems.",
    span: "lg:col-span-8",
    skills: [
      { name: "React.js", bg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30", icon: <FiLayout /> },
      { name: "Next.js", bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30", icon: <FiBox /> },
      { name: "Tailwind CSS", bg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30", icon: <FiGlobe /> },
      { name: "JavaScript", bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30", icon: <FiCode /> },
      { name: "HTML5/CSS3", bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30", icon: <FiLayout /> },
      { name: "Vite", bg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30", icon: <FiZap /> },
    ]
  },
  {
    title: "Back-End Development",
    desc: "Engineered scalable REST APIs, authentication pathways, and AI cloud LLM API integrations.",
    span: "lg:col-span-4",
    skills: [
      { name: "Node.js", bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30", icon: <FiServer /> },
      { name: "Express.js", bg: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30", icon: <FiServer /> },
      { name: "Groq AI", bg: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30", icon: <FiCpu /> },
      { name: "Supabase", bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30", icon: <FiDatabase /> },
    ]
  },
  {
    title: "Programming Languages",
    desc: "Proficiency across frontend script engines, system algorithms, and scripting logic.",
    span: "lg:col-span-4",
    skills: [
      { name: "JavaScript", bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30", icon: <FiCode /> },
      { name: "Python", bg: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30", icon: <FiTerminal /> },
      { name: "C / C++", bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30", icon: <FiCode /> },
    ]
  },
  {
    title: "Database & Caching",
    desc: "Designing relational schemas, document databases, and high-speed in-memory caches.",
    span: "lg:col-span-4",
    skills: [
      { name: "MongoDB", bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30", icon: <FiDatabase /> },
      { name: "PostgreSQL", bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30", icon: <FiDatabase /> },
      { name: "Redis", bg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30", icon: <FiZap /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    desc: "Containerized builds, Git versioning, and continuous automated cloud hosting.",
    span: "lg:col-span-4",
    skills: [
      { name: "Docker", bg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30", icon: <FiCloud /> },
      { name: "Git", bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30", icon: <FiGithub /> },
      { name: "Vercel", bg: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30", icon: <FiCloud /> },
    ]
  },
  {
    title: "Core Computer Science Concepts",
    desc: "Strong computer science fundamentals focusing on data structures, system design, security, and algorithmic efficiency.",
    span: "lg:col-span-12",
    skills: [
      { name: "Data Structures & Algorithms", bg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30", icon: <FiShield /> },
      { name: "System Design", bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30", icon: <FiLayout /> },
      { name: "RESTful API Architecture", bg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30", icon: <FiServer /> },
      { name: "Web Security & JWT", bg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30", icon: <FiShield /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-center mb-16"
      >
        <span className="section-label">02 // Expertise</span>
        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Skills</span>
          <span> that fuel my passion</span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-medium">
          A structured breakdown of technologies, frameworks, databases, and computer science concepts I leverage to build software.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {bentoCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`${cat.span} bento-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Subtle glow orb */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sky-500/5 blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {cat.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ scale: 1.06, translateY: -2 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold font-mono backdrop-blur-md ${s.bg}`}
                  >
                    <span className="text-sm">{s.icon}</span>
                    <span>{s.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Title + Description */}
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 font-heading tracking-tight text-slate-900 dark:text-white">
                  {cat.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {cat.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
