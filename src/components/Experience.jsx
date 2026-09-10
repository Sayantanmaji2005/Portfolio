import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiBriefcase, FiCalendar, FiCheck, FiEye } from 'react-icons/fi';
import CertificateModal from './CertificateModal';

const Experience = () => {
  const containerRef = useRef(null);
  const [activeStatusIndex, setActiveStatusIndex] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      company: 'AI For Everyone',
      color: '#2563EB',
      glow: 'rgba(37,99,235,0.08)',
      role: 'AI Builder Intern',
      period: '23 Mar, 2026 - 18 May, 2026',
      domain: 'IT / Computers - Software',
      tasks: [
        'Successfully completed the AI for Engineers training program and earned the Certified AI Builder – Level II certification.',
        'Gained practical experience in designing, building, automating, and deploying AI-powered workflows and applications.',
        'Developed skills in AI solution design, prompt engineering, workflow automation, innovation, and solving real-world engineering problems using artificial intelligence technologies.'
      ],
      skills: ['Artificial Intelligence', 'Machine Learning', 'Prompt Engineering', 'Generative AI', 'ChatGPT', 'Claude AI'],
      certificateUrl: '/Ai-cirtificate.jpeg'
    },
    {
      company: 'CDAC',
      color: '#10B981',
      glow: 'rgba(16,185,129,0.08)',
      role: 'Full Stack Web Developer Intern',
      period: '05 Jan, 2026 - 30 Jan, 2026',
      domain: 'IT / Computers - Software',
      tasks: [
        'Learned and worked with the MERN stack, including MongoDB, Express.js, React.js, and Node.js for full-stack web development.',
        'Developed skills in building dynamic, responsive, and scalable web applications using JavaScript for both frontend and backend.',
        'Focused on improving development skills and building innovative projects that solve real-world problems.'
      ],
      skills: ['HTML5', 'React.js', 'JavaScript', 'MongoDB', 'CSS', 'Express.js', 'Node.js'],
      certificateUrl: '/CDAC_Certificate.jpeg'
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-left mb-16"
      >
        <span className="section-label">03 // Work Experience</span>
        <h3
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Work</span>
          <span> Experience</span>
        </h3>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          Internships and collaborative software development experience.
        </p>
      </motion.div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto pb-4">
        {/* Background faded track */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-white/10 z-0" />
        
        {/* Glowing vertical timeline track */}
        <motion.div 
          className="absolute left-4 sm:left-6 top-2 w-[2px] bg-gradient-to-b from-sky-500 via-emerald-500 to-purple-600 z-10"
          style={{ height: lineHeight, boxShadow: '0 0 10px rgba(56,189,248,0.6)' }}
        />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12 sm:pl-16 mb-8 group">
            
            {/* Timeline node */}
            <div className="absolute left-4 sm:left-6 top-1.5 -translate-x-1/2 z-20 flex items-center justify-center">
              <motion.div
                className="w-5 h-5 rounded-full border flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-base)', borderColor: exp.color, boxShadow: `0 0 12px ${exp.glow}` }}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 rounded-full transition-colors" style={{ background: exp.color }} />
              </motion.div>
            </div>

            {/* Content card */}
            <motion.div
              className="bento-card p-6 sm:p-8 transition-all duration-300 relative overflow-hidden hover:border-sky-500/40"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              {/* Header details */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4 mb-5">
                <div>
                  <h4 
                    className="text-base sm:text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white"
                    style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
                  >
                    <FiBriefcase className="w-4.5 h-4.5" style={{ color: exp.color }} />
                    {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold mt-0.5 text-slate-600 dark:text-slate-300">{exp.role}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-0.5 font-mono text-xs">
                  <span className="flex items-center gap-1.5 font-bold" style={{ color: exp.color }}>
                    <FiCalendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{exp.domain}</span>
                </div>
              </div>

              {/* Duties / Achievements */}
              <div className="space-y-3.5 mb-6">
                {exp.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans leading-relaxed text-slate-700 dark:text-slate-200">
                    <span className="mt-0.5 p-0.5 rounded flex-shrink-0 bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span>{task}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack badges */}
              <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-white/10">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold block text-slate-500 dark:text-slate-400">
                  Skills Practiced:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-semibold transition-all border bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {exp.certificateUrl && (
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col items-start">
                  <button
                    type="button"
                    onClick={() => setSelectedCert({
                      title: `${exp.company} Certification`,
                      issuer: exp.company,
                      url: exp.certificateUrl
                    })}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold shadow-md transition-all cursor-pointer hover:scale-105"
                  >
                    <FiEye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {activeStatusIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-2 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-left"
                    >
                      <FiCheck className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" />
                      <span>Certificate document is active.</span>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Certificate Read-Only Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </section>
  );
};

export default Experience;
