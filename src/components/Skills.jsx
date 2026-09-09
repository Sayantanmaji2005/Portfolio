import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  FiLayout, FiServer, FiDatabase, FiCode, FiCloud, 
  FiCpu, FiGlobe, FiTerminal, FiBox, FiGithub, FiZap, 
  FiShield, FiActivity, FiLayers, FiCheckCircle, FiTrendingUp,
  FiSliders, FiExternalLink, FiStar
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, 
  SiVite, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiRedis, SiDocker, SiGit, SiVercel, SiPython, SiCplusplus, 
  SiSupabase, SiHtml5
} from 'react-icons/si';

const skillsDatabase = [
  // ── Frontend ──
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    level: 'Advanced',
    proficiency: 95,
    icon: <SiReact className="text-[#61DAFB]" />,
    color: '#61DAFB',
    experience: 'Production Ready',
    appliedIn: 'LabIntel LIMS, Portfolio, Bookstore',
    tagline: 'Reactive component trees, custom hooks, and concurrent UI rendering',
    concepts: ['Custom Hooks', 'Context API', 'Performance Optimization', 'Zustand State', 'Virtual DOM']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced',
    proficiency: 88,
    icon: <SiNextdotjs className="text-slate-900 dark:text-white" />,
    color: '#8B5CF6',
    experience: 'Full-Stack SSR',
    appliedIn: 'Server-Rendered Architectures & Dashboards',
    tagline: 'App router, Server Components, API routes, and optimized SEO rendering',
    concepts: ['Server Components', 'SSR & SSG', 'Route Handlers', 'Edge Middleware', 'Image Optimization']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Expert',
    proficiency: 96,
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    color: '#38BDF8',
    experience: 'Design Systems',
    appliedIn: 'All Web Platforms & Portals',
    tagline: 'Utility-first modern styling, dark mode engines, and responsive glassmorphism',
    concepts: ['Custom Design Tokens', 'Fluid Typography', 'Glassmorphism', 'Dark Mode Sync', 'Micro-Animations']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Expert',
    proficiency: 94,
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    color: '#F7DF1E',
    experience: 'Core Engine',
    appliedIn: 'Full-Stack JavaScript Ecosystem',
    tagline: 'Asynchronous event loops, functional closures, prototypes, and DOM APIs',
    concepts: ['Async/Await & Promises', 'Event Loop', 'Closures & Scopes', 'Prototypes', 'Modular Architecture']
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    level: 'Advanced',
    proficiency: 90,
    icon: <SiVite className="text-[#BD34FE]" />,
    color: '#BD34FE',
    experience: 'Fast Bundling',
    appliedIn: 'Client SPAs & Development Workflows',
    tagline: 'Lightning-fast HMR, Rollup optimized production bundles, and ESM pipelines',
    concepts: ['Native ESM', 'HMR Engine', 'Rollup Plugins', 'Tree Shaking', 'Asset Inlining']
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Expert',
    proficiency: 95,
    icon: <SiHtml5 className="text-[#E34F26]" />,
    color: '#E34F26',
    experience: 'Semantic Foundation',
    appliedIn: 'All Interfaces & Medical Print Layouts',
    tagline: 'Accessible semantic structures, CSS Grid, Flexbox, and Print CSS stylesheets',
    concepts: ['Semantic HTML5', 'CSS Grid & Flexbox', 'Print Stylesheets', 'Accessibility (ARIA)', 'CSS Variables']
  },

  // ── Backend & AI ──
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    proficiency: 92,
    icon: <SiNodedotjs className="text-[#339933]" />,
    color: '#339933',
    experience: 'Microservices & APIs',
    appliedIn: 'LabIntel Cloud Backend & Bookstore',
    tagline: 'Non-blocking I/O runtime, REST services, streams, and authentication gateways',
    concepts: ['Event-Driven Arch', 'Streams & Buffers', 'Clustering', 'JWT Authentication', 'Error Handling']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'Advanced',
    proficiency: 92,
    icon: <SiExpress className="text-slate-700 dark:text-slate-300" />,
    color: '#64748B',
    experience: 'REST Framework',
    appliedIn: 'Scalable REST Gateways',
    tagline: 'Middleware pipelines, routing trees, CORS, and centralized request validation',
    concepts: ['Custom Middleware', 'Router Hierarchies', 'Rate Limiting', 'CORS Security', 'RESTful Patterns']
  },
  {
    id: 'groq-ai',
    name: 'Groq Cloud LLM AI',
    category: 'backend',
    level: 'Advanced',
    proficiency: 89,
    icon: <FiCpu className="text-[#F43F5E]" />,
    color: '#F43F5E',
    experience: 'AI Pipeline',
    appliedIn: 'LabIntel Clinical AI Explainer',
    tagline: 'Low-latency LPU inference (<200ms), prompt engineering, and diagnostic NLP',
    concepts: ['Prompt Engineering', 'Streaming Responses', 'Anonymized Pipelines', 'Token Optimization', 'Llama 3 70B']
  },
  {
    id: 'supabase',
    name: 'Supabase (BaaS)',
    category: 'backend',
    level: 'Advanced',
    proficiency: 90,
    icon: <SiSupabase className="text-[#3ECF8E]" />,
    color: '#3ECF8E',
    experience: 'Cloud Backend',
    appliedIn: 'LabIntel LIMS Multi-Tenant Platform',
    tagline: 'Row-Level Security, PostgreSQL cloud instances, Auth providers, and S3 vaults',
    concepts: ['RLS Policies', 'Database Webhooks', 'Storage Buckets', 'Realtime Subscriptions', 'Dual Auth Flow']
  },

  // ── Database & Caching ──
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'Advanced',
    proficiency: 88,
    icon: <SiPostgresql className="text-[#4169E1]" />,
    color: '#4169E1',
    experience: 'Relational DB',
    appliedIn: 'LabIntel Relational Schemas',
    tagline: 'ACID transactions, relational schemas, indexing, and Row Level Security isolation',
    concepts: ['ACID Transactions', 'Foreign Key Constraints', 'RLS Policies', 'Query Optimization', 'Indexes']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'Advanced',
    proficiency: 87,
    icon: <SiMongodb className="text-[#47A248]" />,
    color: '#47A248',
    experience: 'NoSQL Document DB',
    appliedIn: 'Online Book Store Catalog',
    tagline: 'Document modeling, Mongoose schemas, aggregation pipelines, and JSON storage',
    concepts: ['Aggregation Pipelines', 'Mongoose Schemas', 'Indexing', 'Atomic Updates', 'CRUD Architecture']
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'Intermediate',
    proficiency: 80,
    icon: <SiRedis className="text-[#DC382D]" />,
    color: '#DC382D',
    experience: 'In-Memory Cache',
    appliedIn: 'Session Storage & Rate Limiting',
    tagline: 'In-memory key-value caching, sub-millisecond response caching, and rate limiters',
    concepts: ['TTL Key Expiration', 'In-Memory Caching', 'Pub/Sub', 'Rate Limiting', 'Session Caching']
  },

  // ── Languages ──
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    proficiency: 86,
    icon: <SiPython className="text-[#3776AB]" />,
    color: '#3776AB',
    experience: 'Scripting & AI',
    appliedIn: 'Data Scripts & AI Logic',
    tagline: 'Object-oriented programming, data structures, automation scripts, and ML APIs',
    concepts: ['OOP Principles', 'Data Analysis', 'Automation Scripts', 'FastAPI/Flask', 'Algorithm Logic']
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'languages',
    level: 'Advanced',
    proficiency: 84,
    icon: <SiCplusplus className="text-[#00599C]" />,
    color: '#00599C',
    experience: 'Systems & DSA',
    appliedIn: 'Algorithmic Problem Solving & Memory Management',
    tagline: 'Pointers, manual memory structures, STL algorithms, and computational logic',
    concepts: ['Pointers & References', 'STL Containers', 'Dynamic Memory', 'Time & Space Complexity', 'OOP']
  },

  // ── DevOps & Cloud ──
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'Intermediate',
    proficiency: 80,
    icon: <SiDocker className="text-[#2496ED]" />,
    color: '#2496ED',
    experience: 'Containerization',
    appliedIn: 'Microservices & Containerized Deployments',
    tagline: 'Containerized environments, Dockerfile blueprints, and isolated service stacks',
    concepts: ['Dockerfiles', 'Image Layering', 'Port Mapping', 'Volume Mounts', 'Container Lifecycle']
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'devops',
    level: 'Expert',
    proficiency: 95,
    icon: <SiGit className="text-[#F05032]" />,
    color: '#F05032',
    experience: 'Version Control',
    appliedIn: 'Continuous Team Collaboration & CI/CD',
    tagline: 'Branching workflows, merge conflict resolution, CI/CD automation, and release tags',
    concepts: ['Feature Branching', 'Rebasing & Merging', 'Pull Requests', 'Git Hooks', 'Release Tagging']
  },
  {
    id: 'vercel',
    name: 'Vercel & Cloud',
    category: 'devops',
    level: 'Advanced',
    proficiency: 92,
    icon: <SiVercel className="text-slate-900 dark:text-white" />,
    color: '#06B6D4',
    experience: 'Serverless Hosting',
    appliedIn: 'Live Project Deployments',
    tagline: 'Edge network deployments, automated Git continuous deployment, and DNS routing',
    concepts: ['Edge Network', 'Serverless Functions', 'Custom Domains', 'Environment Vaults', 'Build Caching']
  },

  // ── Core Computer Science ──
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'core-cs',
    level: 'Advanced',
    proficiency: 90,
    icon: <FiShield className="text-[#6366F1]" />,
    color: '#6366F1',
    experience: 'Problem Solving',
    appliedIn: 'Algorithm Efficiency & Optimization',
    tagline: 'Trees, graphs, dynamic programming, sorting, and algorithmic optimization',
    concepts: ['Graphs & Trees', 'Dynamic Programming', 'Binary Search', 'Hash Tables', 'Big-O Analysis']
  },
  {
    id: 'system-design',
    name: 'System Design',
    category: 'core-cs',
    level: 'Advanced',
    proficiency: 88,
    icon: <FiLayers className="text-[#3B82F6]" />,
    color: '#3B82F6',
    experience: 'Architecture',
    appliedIn: 'Multi-Tenant SaaS & Scalable Web APIs',
    tagline: 'Scalable client-server architectures, database partitioning, caching, and RBAC',
    concepts: ['Multi-Tenancy', 'RBAC Security', 'Horizontal Scaling', 'Load Balancing', 'API Gateways']
  },
  {
    id: 'rest-api',
    name: 'RESTful API Design',
    category: 'core-cs',
    level: 'Expert',
    proficiency: 94,
    icon: <FiServer className="text-[#14B8A6]" />,
    color: '#14B8A6',
    experience: 'Protocol Architecture',
    appliedIn: 'All Full-Stack Services & Endpoints',
    tagline: 'HTTP status semantics, idempotent methods, JSON schemas, and secure payloads',
    concepts: ['HTTP Verbs & Status', 'JSON Schemas', 'Payload Validation', 'Error Standards', 'Pagination']
  },
  {
    id: 'web-security',
    name: 'Web Security & JWT',
    category: 'core-cs',
    level: 'Advanced',
    proficiency: 89,
    icon: <FiShield className="text-[#EC4899]" />,
    color: '#EC4899',
    experience: 'Auth & Protection',
    appliedIn: 'Dual Auth Portals & RLS Gateways',
    tagline: 'JSON Web Token lifecycles, hashing (bcrypt), XSS/CSRF mitigation, and RLS',
    concepts: ['JWT Signatures & Refresh', 'Bcrypt Hashing', 'CORS Mitigation', 'SQL Injection Defense', 'RBAC']
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Technologies', icon: <FiStar /> },
  { id: 'frontend', label: 'Frontend', icon: <FiLayout /> },
  { id: 'backend', label: 'Backend & AI', icon: <FiServer /> },
  { id: 'database', label: 'Databases & Caching', icon: <FiDatabase /> },
  { id: 'languages', label: 'Languages', icon: <FiCode /> },
  { id: 'devops', label: 'Cloud & DevOps', icon: <FiCloud /> },
  { id: 'core-cs', label: 'Core CS & System Design', icon: <FiShield /> }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skillsDatabase[0]);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);

  const filteredSkills = activeTab === 'all'
    ? skillsDatabase
    : skillsDatabase.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
          <FiActivity className="animate-pulse" />
          <span>02 // ENGINEERING MASTERY & TECH RADAR</span>
        </div>

        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Technical</span>
          <span> Arsenal & Expertise</span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-medium">
          Comprehensive stack of programming languages, modern frameworks, cloud architectures, and core computer science fundamentals.
        </p>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE CATEGORY NAVIGATOR PILLS
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex items-center justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto no-scrollbar scrollbar-none pb-2 px-1">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 shadow-sm shrink-0">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN DUAL-PANEL ARCHITECTURE LAYOUT
         ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT PANEL (7 Cols): Interactive Animated Skills Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Select or Hover Any Technology ({filteredSkills.length})
            </span>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
              ● Live Architecture Links
            </span>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const isSelected = selectedSkill.id === skill.id;

                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => {
                      setHoveredSkillId(skill.id);
                      setSelectedSkill(skill);
                    }}
                    onMouseLeave={() => setHoveredSkillId(null)}
                    className={`relative p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                      isSelected
                        ? 'bg-blue-50/90 dark:bg-slate-900/95 border-blue-500 shadow-lg shadow-blue-500/20'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeSkillBar"
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      />
                    )}

                    <div className="flex items-start justify-between mb-2.5 sm:mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-lg sm:text-xl shadow-inner border border-slate-200 dark:border-slate-700">
                        {skill.icon}
                      </div>

                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {skill.proficiency}%
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight mb-1 truncate">
                      {skill.name}
                    </h4>

                    <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                      {skill.experience}
                    </p>

                    {/* Animated Micro Progress Bar */}
                    <div className="mt-2.5 sm:mt-3 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: skill.color || '#3B82F6' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.8, delay: index * 0.04 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* RIGHT PANEL (5 Cols): Live Detailed Skill Telemetry & Architecture Inspector */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1200}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.06}
            className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-blue-500/30 shadow-xl overflow-hidden relative"
            style={{ boxShadow: '0 20px 50px rgba(37,99,235,0.12)' }}
          >
            {/* Subtle corner aura */}
            <div 
              className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none blur-3xl opacity-30"
              style={{ background: selectedSkill.color || '#3B82F6' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* Header: Icon + Name + Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-3xl shadow-md border border-slate-200 dark:border-slate-700">
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                          {selectedSkill.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono font-semibold text-blue-600 dark:text-sky-400">
                        {selectedSkill.experience} • {selectedSkill.level}
                      </span>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-[10px] uppercase text-slate-400 block font-bold">Mastery</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      {selectedSkill.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Tagline / System Role */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">
                    Architecture Role & Description
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {selectedSkill.tagline}
                  </p>
                </div>

                {/* Real-World Project Applications */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2">
                    Applied In Production Work
                  </span>
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                    <FiCheckCircle className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span>{selectedSkill.appliedIn}</span>
                  </div>
                </div>

                {/* Core Engineering Concepts Mastered */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2.5">
                    Core Technical Pillars & Concepts
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        ⚡ {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* System Efficiency Metric */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Production Verified
                  </span>
                  <span className="text-blue-600 dark:text-sky-400 font-semibold">
                    100% Type & Build Checked
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </Tilt>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM CONTINUOUS TECH MARQUEE
         ───────────────────────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
            Continuous Full-Stack Toolchain
          </span>
        </div>

        <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-4 whitespace-nowrap py-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[...skillsDatabase, ...skillsDatabase].map((s, i) => (
              <div
                key={`${s.id}-${i}`}
                onClick={() => setSelectedSkill(s)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold shadow-sm hover:border-blue-500 transition-colors cursor-pointer"
              >
                <span className="text-base">{s.icon}</span>
                <span>{s.name}</span>
                <span className="text-[10px] text-blue-600 dark:text-sky-400">({s.proficiency}%)</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
