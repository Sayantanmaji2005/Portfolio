import { useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink, FiGithub, FiCheckCircle, FiCpu, FiActivity } from 'react-icons/fi';

/* ─────────────────────────────────────────────
   Mini preview panels – clean light terminal look
   ───────────────────────────────────────────── */
const PreviewLabintel = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-slate-400">
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[#38BDF8] font-bold">
      <span className="flex items-center gap-1">
        <FiActivity className="text-[#38BDF8] animate-pulse" /> LABINTEL LIMS v2.0
      </span>
      <span className="text-[8px] bg-[#34D399]/10 text-[#34D399] px-1.5 py-0.5 rounded border border-[#34D399]/20">DB ONLINE</span>
    </div>
    <div className="space-y-1.5 my-1">
      <div className="flex justify-between border-b border-slate-800 pb-1">
        <span className="text-slate-400">Patient: Sayantan Maji</span>
        <span className="text-[#38BDF8] font-bold">ID: PT-8924</span>
      </div>
      <div className="space-y-1 text-[8px]">
        <div className="flex items-center justify-between">
          <span>● Glucose Fasting</span><span className="text-[#34D399] font-semibold">98 mg/dL (Normal)</span>
        </div>
        <div className="flex items-center justify-between">
          <span>● HbA1c Level</span><span className="text-[#34D399] font-semibold">5.7% (Normal)</span>
        </div>
        <div className="flex items-center justify-between">
          <span>● Cholesterol</span><span className="text-[#FDBA74] font-semibold">210 mg/dL (High)</span>
        </div>
      </div>
    </div>
    <div className="text-[7.5px] text-slate-500 flex justify-between border-t border-slate-800 pt-1.5">
      <span>Supabase PostgreSQL connected</span>
      <span className="text-[#38BDF8] font-bold">PDF GENERATED</span>
    </div>
  </div>
);

const PreviewLabintelAI = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-slate-400">
    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[#34D399] font-bold">
      <span className="flex items-center gap-1"><FiCpu className="text-[#34D399] animate-spin-slow" /> CLINICAL AI CO-PILOT</span>
      <span className="text-[#34D399]">GROQ-LLAMA3</span>
    </div>
    <div className="flex-grow flex flex-col justify-center my-1.5 p-2 rounded bg-[#0A0A0A] border border-slate-800">
      <div className="text-[8px] text-slate-500 mb-1 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping" />
        <span>AI Insight Generation:</span>
      </div>
      <p className="text-[8.5px] text-slate-300 leading-normal italic">
        "Fasting glucose &amp; HbA1c are stable. Borderline high cholesterol (210 mg/dL) noted. Limit saturated fats and monitor lipid profile in 3 months."
      </p>
    </div>
    <div className="text-[7.5px] text-slate-500 flex justify-between border-t border-slate-800 pt-1">
      <span>Latency: 184ms</span><span>Accuracy: 99.4% Verified</span>
    </div>
  </div>
);

const PreviewRateLimiter = () => (
  <div className="w-full h-full flex flex-col justify-between font-mono text-[10px] text-slate-400">
    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[#FDBA74] font-bold">
      <span className="flex items-center gap-1.5"><FiCpu className="animate-spin-slow text-[#FDBA74]" /> rate-limiter-daemon v1.2</span>
      <span className="text-[#FDBA74]">● OPERATIONAL</span>
    </div>
    <div className="grid grid-cols-3 gap-2 py-2">
      {[['Window','60s','text-[#FDBA74]'],['Requests','1.2k/m','text-[#FDBA74]'],['Cache Hit','99.8%','text-[#FDBA74]']].map(([l,v,c])=>(
        <div key={l} className="text-center p-2 rounded bg-[#0A0A0A] border border-slate-800">
          <span className="text-slate-500 block text-[7px] uppercase font-bold">{l}</span>
          <span className={`${c} font-bold text-xs`}>{v}</span>
        </div>
      ))}
    </div>
    <div className="text-[8px] text-slate-500 flex justify-between border-t border-slate-800 pt-1.5">
      <span>Redis engine: active</span><span>JWT validation layers active</span>
    </div>
  </div>
);

const PreviewBookstore = () => (
  <div className="w-full h-full flex flex-col justify-between text-xs text-slate-400 font-sans">
    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
      <span className="font-semibold text-[#C4B5FD]">VercelBook Store</span>
      <span className="text-[9px] bg-[#0A0A0A] px-2 py-0.5 rounded border border-slate-800">Active order logs</span>
    </div>
    <div className="grid grid-cols-3 gap-2 flex-grow items-center py-2">
      {[['React 19','$19.99'],['Express JS','$24.99'],['MongoDB','$29.99']].map(([name,price])=>(
        <div key={name} className="p-2 rounded bg-[#0A0A0A] border border-slate-800 flex flex-col gap-1 items-center">
          <span className="text-[8px] font-bold text-slate-200 truncate max-w-full">{name}</span>
          <span className="text-[9px] text-[#C4B5FD] font-semibold">{price}</span>
        </div>
      ))}
    </div>
  </div>
);

const previewMap = {
  'labintel':    <PreviewLabintel />,
  'labintel-ai': <PreviewLabintelAI />,
  'rate-limiter':<PreviewRateLimiter />,
  'bookstore':   <PreviewBookstore />,
};

/* ───────────────────────────────────
   Project Card
   ─────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        transitionSpeed={1500}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor={project.color || "#ffffff"}
        glarePosition="all"
        className="aurora-card shimmer-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group h-full relative"
      >
      {/* Corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: project.glow || 'rgba(37,99,235,0.05)', filter: 'blur(40px)' }}
      />
      {/* Animated Corner Glow */}
      <motion.div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: project.glow || 'rgba(37,99,235,0.08)', filter: 'blur(50px)' }}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <div className="space-y-5">

        {/* Mock preview */}
        <motion.div
          className="w-full h-44 rounded-2xl overflow-hidden flex items-center justify-center p-4"
          style={{ background: '#050505', border: '1px solid #1E293B' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {previewMap[project.previewType] ?? null}
        </motion.div>

        {/* Project title + description */}
        <div className="space-y-2">
          <motion.h4
            className="text-xl sm:text-2xl font-extrabold group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
            whileHover={{ translateY: -3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {project.title}
          </motion.h4>
          <motion.p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            whileHover={{ translateY: -2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Feature list */}
        <div className="space-y-2">
          <span
            className="text-[10px] font-mono tracking-widest uppercase font-bold block"
            style={{ color: 'var(--text-secondary)' }}
          >
            System Capabilities:
          </span>
          <ul className="space-y-1.5">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs group-hover:text-slate-800 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                <FiCheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: project.color || '#2563EB' }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((tag) => (
            <motion.span
              key={tag}
              className="tech-tag"
              whileHover={{ scale: 1.05, backgroundColor: project.glow || 'rgba(37,99,235,0.08)' }}
              transition={{ duration: 0.2 }}
            >{tag}</motion.span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div
        className="flex gap-3 pt-5 mt-5"
        style={{ borderTop: '1px solid var(--border-subtle)' }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium-accent flex-1 py-2.5 text-xs flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer"
        >
          <span>Live Demo</span>
          <FiExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium-secondary flex-1 py-2.5 text-xs flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer"
        >
          <span>GitHub</span>
          <FiGithub className="w-3.5 h-3.5" />
        </a>
      </div>
      </Tilt>
    </motion.div>
  );
};

/* ───────────────────────────────────
   Projects Section
   ─────────────────────────────────── */
const projectsList = [
  {
    title: 'LabIntel LIMS',
    color: '#2563EB', glow: 'rgba(37,99,235,0.1)',
    description: 'A role-based Laboratory Information Management System (LIMS) designed to streamline clinical diagnostics workflows, invoices, and diagnostic reporting pathways.',
    link: 'https://labintelorg.vercel.app/lab/secondlab/login',
    github: 'https://github.com/Labintel-dev/Labintel.git',
    tech: ['React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Engineered individual dashboard portals for Managers, Techs, Receptionists, and Patients',
      'Integrated dynamic PDF medical report builders and automated invoice telemetry',
      'Configured role-based access control (RBAC) layers securing patient databases',
      'Architected relational PostgreSQL schemas on Supabase for transactional data integrity',
      'Implemented full cross-platform responsive layouts utilizing periwinkle glass styling',
    ],
    previewType: 'labintel',
  },
  {
    title: 'LabIntel AI Clinical Explainer',
    color: '#10B981', glow: 'rgba(16,185,129,0.1)',
    description: 'An intelligent medical copilot integrated within LabIntel LIMS, translating raw clinical test ranges into readable patient insights using Groq LLM pipelines.',
    link: 'https://labintelorg.vercel.app/lab/secondlab/login',
    github: 'https://github.com/Labintel-dev/Labintel.git',
    tech: ['Groq Cloud API', 'Llama 3 (LLM)', 'React', 'Node.js', 'Express', 'Zustand'],
    features: [
      'Connected Groq Cloud LLM engine delivering diagnostic summaries with <200ms latency',
      'Built threshold-matching logic comparing patient numbers to standard references',
      'Designed secure, anonymized data pathways to prevent patient identity exposure at API nodes',
      'Leveraged Zustand for lightweight, reactive state management across AI chat components',
      'Developed following Certified AI Builder standards and validation checks',
    ],
    previewType: 'labintel-ai',
  },

  {
    title: 'Online Book Store',
    color: '#8B5CF6', glow: 'rgba(139,92,246,0.1)',
    description: 'A complete e-commerce MERN platform to search, browse, and purchase catalog items with secure checkouts and administration consoles.',
    link: 'https://bookstore-iota-three.vercel.app',
    github: 'https://github.com/Sayantanmaji2005/Online-Book-Store',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    features: [
      'Developed secure customer sign-in portals and personal order log dashboards',
      'Built interactive shopping cart workflows with real-time stock validations',
      'Created comprehensive admin inventories to update catalogs, pricing, and entries',
      'Implemented filtered search queries categorizing database records by genre',
      'Connected Express API endpoints to MongoDB collections for dynamic resource updates',
    ],
    previewType: 'bookstore',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="text-left mb-16"
    >
      <span className="section-label">06 // Showcase</span>
      <h3
        className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
        style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
      >
        <span className="text-gradient">Impressive</span>
        <span> Works</span>
      </h3>
      <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
        Welcome to my realm of wild projects, full-stack systems, and AI applications.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projectsList.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
