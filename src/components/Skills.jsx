import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  FiLayout, FiServer, FiDatabase, FiCode, FiCloud, 
  FiCpu, FiGlobe, FiTerminal, FiBox, FiGithub, FiZap, 
  FiShield, FiActivity, FiLayers, FiCheckCircle, FiTrendingUp,
  FiSliders, FiExternalLink, FiStar, FiCompass, FiAward, FiCheck, FiCopy
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
    level: 'Expert',
    proficiency: 95,
    icon: <SiReact className="text-[#61DAFB]" />,
    color: '#61DAFB',
    accentGradient: 'from-[#61DAFB] via-[#38BDF8] to-[#2563EB]',
    experience: 'Production Ready',
    appliedIn: 'LabIntel LIMS, Portfolio, Bookstore',
    tagline: 'Reactive component trees, custom hooks, and concurrent UI rendering',
    concepts: ['Custom Hooks', 'Context API', 'Performance Optimization', 'Zustand State', 'Virtual DOM'],
    snippet: 'const [state, dispatch] = useReducer(reducer, initialState);'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced',
    proficiency: 88,
    icon: <SiNextdotjs className="text-slate-900 dark:text-white" />,
    color: '#8B5CF6',
    accentGradient: 'from-[#8B5CF6] via-[#A855F7] to-[#EC4899]',
    experience: 'Full-Stack SSR',
    appliedIn: 'Server-Rendered Architectures & Dashboards',
    tagline: 'App router, Server Components, API routes, and optimized SEO rendering',
    concepts: ['Server Components', 'SSR & SSG', 'Route Handlers', 'Edge Middleware', 'Image Optimization'],
    snippet: 'export default async function Page() { const data = await fetch(); }'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Expert',
    proficiency: 96,
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    color: '#38BDF8',
    accentGradient: 'from-[#38BDF8] via-[#06B6D4] to-[#0284C7]',
    experience: 'Design Systems',
    appliedIn: 'All Web Platforms & Portals',
    tagline: 'Utility-first modern styling, dark mode engines, and responsive glassmorphism',
    concepts: ['Custom Design Tokens', 'Fluid Typography', 'Glassmorphism', 'Dark Mode Sync', 'Micro-Animations'],
    snippet: '@apply backdrop-blur-xl bg-slate-900/80 border border-white/10;'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Expert',
    proficiency: 94,
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    color: '#F7DF1E',
    accentGradient: 'from-[#F7DF1E] via-[#FBBF24] to-[#EA580C]',
    experience: 'Core Engine',
    appliedIn: 'Full-Stack JavaScript Ecosystem',
    tagline: 'Asynchronous event loops, functional closures, prototypes, and DOM APIs',
    concepts: ['Async/Await & Promises', 'Event Loop', 'Closures & Scopes', 'Prototypes', 'Modular Architecture'],
    snippet: 'const pipeline = async (data) => await Promise.all(tasks.map(run));'
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    level: 'Advanced',
    proficiency: 90,
    icon: <SiVite className="text-[#BD34FE]" />,
    color: '#BD34FE',
    accentGradient: 'from-[#BD34FE] via-[#A855F7] to-[#6366F1]',
    experience: 'Fast Bundling',
    appliedIn: 'Client SPAs & Development Workflows',
    tagline: 'Lightning-fast HMR, Rollup optimized production bundles, and ESM pipelines',
    concepts: ['Native ESM', 'HMR Engine', 'Rollup Plugins', 'Tree Shaking', 'Asset Inlining'],
    snippet: 'export default defineConfig({ plugins: [react(), tailwindcss()] });'
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Expert',
    proficiency: 95,
    icon: <SiHtml5 className="text-[#E34F26]" />,
    color: '#E34F26',
    accentGradient: 'from-[#E34F26] via-[#F97316] to-[#EF4444]',
    experience: 'Semantic Foundation',
    appliedIn: 'All Interfaces & Medical Print Layouts',
    tagline: 'Accessible semantic structures, CSS Grid, Flexbox, and Print CSS stylesheets',
    concepts: ['Semantic HTML5', 'CSS Grid & Flexbox', 'Print Stylesheets', 'Accessibility (ARIA)', 'CSS Variables'],
    snippet: '@media print { body { visibility: visible !important; } }'
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
    accentGradient: 'from-[#339933] via-[#22C55E] to-[#16A34A]',
    experience: 'Microservices & APIs',
    appliedIn: 'LabIntel LIMS, Clinical AI Backend',
    tagline: 'High-throughput event-driven servers, non-blocking I/O, and RESTful APIs',
    concepts: ['Event-Driven Architecture', 'Cluster Mode', 'Streams & Buffers', 'Middleware Pipelines', 'Security Hardening'],
    snippet: 'const server = createServer(async (req, res) => { ... });'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'Expert',
    proficiency: 93,
    icon: <SiExpress className="text-slate-800 dark:text-slate-200" />,
    color: '#64748B',
    accentGradient: 'from-[#64748B] via-[#475569] to-[#334155]',
    experience: 'REST Endpoints',
    appliedIn: 'LIMS Core Server, Authentication Services',
    tagline: 'Robust routing, error interception, rate limiting, and JWT authentication',
    concepts: ['Router Pipelines', 'Global Error Handling', 'Rate Limiting', 'CORS & Helmet', 'Validation Middleware'],
    snippet: 'app.use("/api/v1/patients", authMiddleware, patientRouter);'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    proficiency: 88,
    icon: <SiPython className="text-[#3776AB]" />,
    color: '#3776AB',
    accentGradient: 'from-[#3776AB] via-[#38BDF8] to-[#FCD34D]',
    experience: 'AI & Data Scripts',
    appliedIn: 'Clinical Co-Pilot Inference, Automation',
    tagline: 'AI integrations, data pipelines, automated testing, and algorithmic tasks',
    concepts: ['LLM Orchestration', 'Data Pipelines', 'Automation Scripts', 'Object Oriented Python', 'FastAPI/Flask Basics'],
    snippet: 'def analyze_medical_telemetry(data: dict) -> ClinicalReport: ...'
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'languages',
    level: 'Intermediate',
    proficiency: 82,
    icon: <SiCplusplus className="text-[#00599C]" />,
    color: '#00599C',
    accentGradient: 'from-[#00599C] via-[#2563EB] to-[#60A5FA]',
    experience: 'System & Memory',
    appliedIn: 'DSA & Core Algorithmic Problem Solving',
    tagline: 'Memory management, pointers, STL containers, and time complexity mastery',
    concepts: ['Pointers & References', 'STL Containers', 'Dynamic Memory', 'Time/Space Complexity', 'OOP Design'],
    snippet: 'std::vector<int> adjList[MAX_NODES];'
  },

  // ── Databases ──
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'Expert',
    proficiency: 92,
    icon: <SiMongodb className="text-[#47A248]" />,
    color: '#47A248',
    accentGradient: 'from-[#47A248] via-[#22C55E] to-[#15803D]',
    experience: 'NoSQL Schema Design',
    appliedIn: 'Patient Records, Test Catalogs, Audit Logs',
    tagline: 'Aggregation pipelines, compound indexes, Mongoose schemas, and sharded collections',
    concepts: ['Aggregation Framework', 'Compound Indexing', 'Schema Validation', 'Replica Sets', 'Transactions'],
    snippet: 'await Patient.aggregate([{ $match: { status: "critical" } }, { $group: ... }]);'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'Advanced',
    proficiency: 86,
    icon: <SiPostgresql className="text-[#4169E1]" />,
    color: '#4169E1',
    accentGradient: 'from-[#4169E1] via-[#6366F1] to-[#3B82F6]',
    experience: 'Relational DB',
    appliedIn: 'Structured Data Storage & Analytics',
    tagline: 'ACID compliance, relational normalization, complex joins, and indexed queries',
    concepts: ['Relational Schemas', 'Foreign Keys & Constraints', 'ACID Transactions', 'EXPLAIN ANALYZE', 'JSONB Storage'],
    snippet: 'SELECT p.name, t.result FROM patients p JOIN tests t ON p.id = t.patient_id;'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    level: 'Advanced',
    proficiency: 88,
    icon: <SiSupabase className="text-[#3ECF8E]" />,
    color: '#3ECF8E',
    accentGradient: 'from-[#3ECF8E] via-[#10B981] to-[#047857]',
    experience: 'Backend-as-a-Service',
    appliedIn: 'Realtime Subscriptions & Auth Vaults',
    tagline: 'Postgres backend, Row-Level Security (RLS), Realtime WebSocket listeners, and Storage',
    concepts: ['Row-Level Security (RLS)', 'Realtime WebSockets', 'Postgres Functions', 'Edge Functions', 'Auth Policies'],
    snippet: 'supabase.channel("live-tests").on("postgres_changes", { event: "*" }, handle);'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'Intermediate',
    proficiency: 80,
    icon: <SiRedis className="text-[#DC382D]" />,
    color: '#DC382D',
    accentGradient: 'from-[#DC382D] via-[#EF4444] to-[#B91C1C]',
    experience: 'In-Memory Cache',
    appliedIn: 'Session Storage, Rate Limiting, High-Speed Cache',
    tagline: 'Sub-millisecond key-value retrieval, pub/sub channels, and cache eviction strategies',
    concepts: ['Key Expiration (TTL)', 'Cache-Aside Pattern', 'Pub/Sub Messaging', 'Rate Limit Counters', 'Hash Structures'],
    snippet: 'await redis.setex(`cache:user:${id}`, 3600, JSON.stringify(userData));'
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
    accentGradient: 'from-[#2496ED] via-[#38BDF8] to-[#0284C7]',
    experience: 'Containerization',
    appliedIn: 'Microservices & Containerized Deployments',
    tagline: 'Containerized environments, Dockerfile blueprints, and isolated service stacks',
    concepts: ['Dockerfiles', 'Image Layering', 'Port Mapping', 'Volume Mounts', 'Container Lifecycle'],
    snippet: 'FROM node:20-alpine AS runner\nWORKDIR /app\nCMD ["node", "server.js"]'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'devops',
    level: 'Expert',
    proficiency: 95,
    icon: <SiGit className="text-[#F05032]" />,
    color: '#F05032',
    accentGradient: 'from-[#F05032] via-[#FB7185] to-[#DC2626]',
    experience: 'Version Control',
    appliedIn: 'Continuous Team Collaboration & CI/CD',
    tagline: 'Branching workflows, merge conflict resolution, CI/CD automation, and release tags',
    concepts: ['Feature Branching', 'Rebasing & Merging', 'Pull Requests', 'Git Hooks', 'Release Tagging'],
    snippet: 'git checkout -b feature/architect-v2 && git commit -m "feat: complete"'
  },
  {
    id: 'vercel',
    name: 'Vercel & Cloud',
    category: 'devops',
    level: 'Advanced',
    proficiency: 92,
    icon: <SiVercel className="text-slate-900 dark:text-white" />,
    color: '#06B6D4',
    accentGradient: 'from-[#06B6D4] via-[#38BDF8] to-[#0284C7]',
    experience: 'Serverless Hosting',
    appliedIn: 'Live Project Deployments',
    tagline: 'Edge network deployments, automated Git continuous deployment, and DNS routing',
    concepts: ['Edge Network', 'Serverless Functions', 'Custom Domains', 'Environment Vaults', 'Build Caching'],
    snippet: 'export const config = { runtime: "edge", regions: ["bom1"] };'
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
    accentGradient: 'from-[#6366F1] via-[#818CF8] to-[#4338CA]',
    experience: 'Problem Solving',
    appliedIn: 'Algorithm Efficiency & Optimization',
    tagline: 'Trees, graphs, dynamic programming, sorting, and algorithmic optimization',
    concepts: ['Graphs & Trees', 'Dynamic Programming', 'Binary Search', 'Hash Tables', 'Big-O Analysis'],
    snippet: 'const lowestCommonAncestor = (root, p, q) => { ... };'
  },
  {
    id: 'system-design',
    name: 'System Design',
    category: 'core-cs',
    level: 'Advanced',
    proficiency: 88,
    icon: <FiLayers className="text-[#3B82F6]" />,
    color: '#3B82F6',
    accentGradient: 'from-[#3B82F6] via-[#60A5FA] to-[#1D4ED8]',
    experience: 'Architecture',
    appliedIn: 'Multi-Tenant SaaS & Scalable Web APIs',
    tagline: 'Scalable client-server architectures, database partitioning, caching, and RBAC',
    concepts: ['Multi-Tenancy', 'RBAC Security', 'Horizontal Scaling', 'Load Balancing', 'API Gateways'],
    snippet: 'Client -> CDN -> API Gateway -> Microservices -> Sharded DB'
  },
  {
    id: 'rest-api',
    name: 'RESTful API Design',
    category: 'core-cs',
    level: 'Expert',
    proficiency: 94,
    icon: <FiServer className="text-[#14B8A6]" />,
    color: '#14B8A6',
    accentGradient: 'from-[#14B8A6] via-[#2DD4BF] to-[#0F766E]',
    experience: 'Protocol Architecture',
    appliedIn: 'All Full-Stack Services & Endpoints',
    tagline: 'HTTP status semantics, idempotent methods, JSON schemas, and secure payloads',
    concepts: ['HTTP Verbs & Status', 'JSON Schemas', 'Payload Validation', 'Error Standards', 'Pagination'],
    snippet: 'GET /api/v1/labs/:id/telemetry?page=1&limit=20'
  },
  {
    id: 'web-security',
    name: 'Web Security & JWT',
    category: 'core-cs',
    level: 'Advanced',
    proficiency: 89,
    icon: <FiShield className="text-[#EC4899]" />,
    color: '#EC4899',
    accentGradient: 'from-[#EC4899] via-[#F472B6] to-[#BE185D]',
    experience: 'Auth & Protection',
    appliedIn: 'Dual Auth Portals & RLS Gateways',
    tagline: 'JSON Web Token lifecycles, hashing (bcrypt), XSS/CSRF mitigation, and RLS',
    concepts: ['JWT Signatures & Refresh', 'Bcrypt Hashing', 'CORS Mitigation', 'SQL Injection Defense', 'RBAC'],
    snippet: 'const token = jwt.sign({ sub: userId, role: "doctor" }, SECRET, { expiresIn: "1h" });'
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
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const filteredSkills = activeTab === 'all'
    ? skillsDatabase
    : skillsDatabase.filter(s => s.category === activeTab);

  const handleCopySnippet = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background Atmosphere Aura that reacts to selected skill */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full blur-[160px] transition-all duration-700 opacity-20 dark:opacity-30"
          style={{ background: selectedSkill.color || '#3B82F6' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3.5 shadow-sm">
          <FiActivity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          <span>02 // ENGINEERING MASTERY &amp; TECH RADAR</span>
        </div>

        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Technical</span>
          <span> Arsenal &amp; Expertise</span>
        </h3>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-medium">
          Comprehensive stack of programming languages, modern frameworks, cloud architectures, and core computer science fundamentals.
        </p>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          CATEGORY NAVIGATOR PILLS (1 Single Line / Perfect Center & Zero Side-Clip)
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full mb-10 overflow-x-auto no-scrollbar scrollbar-none py-2 px-4 sm:px-6">
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-200/50 dark:bg-slate-900/60 border border-slate-300/60 dark:border-slate-800/80 backdrop-blur-xl shadow-inner w-max mx-auto">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = tab.id === 'all' 
              ? skillsDatabase.length 
              : skillsDatabase.filter(s => s.category === tab.id).length;

            return (
              <button
                type="button"
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                  const firstSkill = tab.id === 'all' 
                    ? skillsDatabase[0] 
                    : (skillsDatabase.find(s => s.category === tab.id) || skillsDatabase[0]);
                  if (firstSkill) setSelectedSkill(firstSkill);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 relative ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className={`text-sm transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-300/70 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN DUAL-PANEL ARCHITECTURE LAYOUT (100% Locked Stable Height)
         ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[620px]">
        
        {/* LEFT PANEL (7 Cols): Interactive Animated Skills Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <FiCompass className="w-3.5 h-3.5 text-blue-500" />
              <span>Select or Hover Any Technology ({filteredSkills.length})</span>
            </span>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Live Telemetry Active
            </span>
          </div>

          {/* Grid with locked min-height so switching categories NEVER shrinks section height */}
          <div className="min-h-[580px]">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5 content-start"
            >
              {filteredSkills.map((skill, index) => {
                const isSelected = selectedSkill.id === skill.id;

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                    whileHover={{ scale: 1.025, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className={`group relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-b from-blue-50/95 to-white dark:from-slate-900/95 dark:to-[#0C1220] border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.02]'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-blue-400/50 dark:hover:border-slate-700 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Ambient Background Glow on Selected */}
                    {isSelected && (
                      <div 
                        className="absolute -right-8 -top-8 w-24 h-24 rounded-full pointer-events-none blur-2xl opacity-40"
                        style={{ background: skill.color || '#3B82F6' }}
                      />
                    )}

                    {/* Top Card Header: Icon + Proficiency Pill */}
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                        isSelected 
                          ? 'scale-110 bg-blue-500/15 border border-blue-400/40 shadow-md' 
                          : 'bg-slate-100 dark:bg-slate-800/80 shadow-inner border border-slate-200 dark:border-slate-700 group-hover:scale-105'
                      }`}>
                        {skill.icon}
                      </div>

                      <div className="flex items-center gap-1">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                          isSelected 
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}>
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Skill Name & Experience */}
                    <div className="relative z-10">
                      <h4 className={`font-bold text-xs sm:text-sm tracking-tight mb-0.5 truncate transition-colors ${
                        isSelected ? 'text-blue-600 dark:text-sky-300 font-extrabold' : 'text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400'
                      }`}>
                        {skill.name}
                      </h4>

                      <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                        {skill.experience}
                      </p>
                    </div>

                    {/* Modern Pulsing Mastery Progress Bar with Shimmer Beam */}
                    <div className="mt-3.5 w-full bg-slate-100 dark:bg-slate-800/90 h-1.5 rounded-full overflow-hidden relative z-10">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ 
                          background: skill.color || '#3B82F6', 
                          boxShadow: isSelected ? `0 0 12px ${skill.color || '#3B82F6'}` : 'none'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      >
                        {/* Shimmer Light Beam Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL (5 Cols): Live Detailed Skill Telemetry & Cyber Inspector */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1200}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.06}
            className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-blue-500/30 shadow-2xl overflow-hidden relative"
            style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}
          >
            {/* Ambient dynamic glow matching selected skill */}
            <div 
              className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none blur-3xl opacity-35 transition-colors duration-700"
              style={{ background: selectedSkill.color || '#3B82F6' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-5 relative z-10"
              >
                {/* Header: Icon + Name + High-Tech Circular Radar Mastery Gauge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <motion.div 
                      key={`icon-${selectedSkill.id}`}
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-3xl shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                      {selectedSkill.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                        {selectedSkill.name}
                      </h3>
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                        {selectedSkill.experience} • {selectedSkill.level}
                      </span>
                    </div>
                  </div>

                  {/* High-Tech Circular Mastery Radar */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100 dark:text-slate-800 stroke-current"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          className="stroke-current"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                          style={{ color: selectedSkill.color || '#3B82F6' }}
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${selectedSkill.proficiency}, 100` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-xs font-mono font-black text-slate-900 dark:text-white">
                        {selectedSkill.proficiency}%
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-wider mt-1">Mastery</span>
                  </div>
                </div>

                {/* Tagline / System Role */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
                    <FiLayers className="w-3 h-3 text-blue-500" />
                    Architecture Role &amp; Description
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {selectedSkill.tagline}
                  </p>
                </div>

                {/* Real-World Project Applications */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1.5">
                    <FiCheckCircle className="w-3 h-3 text-emerald-500" />
                    Applied In Production Work
                  </span>
                  <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                    <FiZap className="w-4 h-4 flex-shrink-0 text-amber-500 dark:text-amber-400 animate-pulse" />
                    <span>{selectedSkill.appliedIn}</span>
                  </div>
                </div>

                {/* Core Engineering Concepts Mastered */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1.5">
                    <FiAward className="w-3 h-3 text-purple-500" />
                    Core Technical Pillars &amp; Concepts
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.concepts.map((concept, cIdx) => (
                      <motion.span
                        key={concept}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: cIdx * 0.04 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm cursor-default"
                      >
                        ⚡ {concept}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Live Code Blueprint Snippet with Copy Button */}
                {selectedSkill.snippet && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <FiCode className="w-3 h-3 text-sky-500" />
                        Live Architecture Blueprint
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopySnippet(selectedSkill.snippet)}
                        className="flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        {copiedSnippet ? (
                          <>
                            <FiCheck className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <FiCopy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#080B12] border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto no-scrollbar shadow-inner relative group">
                      <code>{selectedSkill.snippet}</code>
                    </div>
                  </div>
                )}

                {/* System Efficiency Metric Footnote */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Production Verified
                  </span>
                  <span className="text-blue-600 dark:text-sky-400 font-semibold">
                    100% Type &amp; Build Checked
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold shadow-sm hover:border-blue-500 transition-colors cursor-pointer hover:scale-105 transform"
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
