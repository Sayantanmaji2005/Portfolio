import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiAward, FiCalendar, FiEye, FiCheckCircle } from 'react-icons/fi';
import CertificateModal from './CertificateModal';

const EducationItem = ({ institution, degree, year, grade, index, certificateUrl, onViewCert }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 group">
      
      {/* Glowing Timeline Node */}
      <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
        <motion.div 
          className="w-5 h-5 rounded-full border border-sky-500 flex items-center justify-center group-hover:border-indigo-500 transition-colors duration-500 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
          style={{ background: 'var(--bg-base)' }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:bg-indigo-400 transition-colors duration-500" />
        </motion.div>
      </div>

      {/* Year badge (Desktop side) */}
      <div className={`hidden md:block w-5/12 text-right pr-8 ${isEven ? 'md:order-1' : 'md:order-3 md:text-left md:pl-8'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold shadow-sm"
        >
          <FiCalendar className="w-3.5 h-3.5" />
          <span>{year}</span>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-2/12 md:order-2" />

      {/* Content card */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:order-3 md:pl-8' : 'md:order-1 md:pr-8 md:text-right'}`}>
        <motion.div
          className="bento-card p-6 relative overflow-hidden group hover:border-sky-500/40 transition-all duration-300"
          initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile Year Badge */}
          <div className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold">
            <FiCalendar className="w-3 h-3" />
            <span>{year}</span>
          </div>

          <h4 
            className="text-base sm:text-lg font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-tight text-slate-900 dark:text-white"
            style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
          >
            {institution}
          </h4>
          <h5 className="text-xs sm:text-sm font-medium mt-1 text-slate-600 dark:text-slate-300">
            {degree}
          </h5>

          {/* Grade tag */}
          <div className={`mt-4 flex items-center gap-2 text-xs font-mono ${isEven ? '' : 'md:justify-end'}`}>
            <span className="p-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
              <FiAward className="w-3.5 h-3.5" />
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Score/ID: <span className="text-slate-900 dark:text-white font-bold">{grade}</span>
            </span>
          </div>

          {/* Certificate Action */}
          {certificateUrl && (
            <div className={`mt-4 flex flex-col items-start ${isEven ? 'md:items-start' : 'md:items-end'}`}>
              <button
                type="button"
                onClick={() => onViewCert && onViewCert({
                  title: `${institution} Certification`,
                  issuer: institution,
                  url: certificateUrl
                })}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 w-fit rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer hover:scale-105"
              >
                <FiEye className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>

    </div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      institution: 'AIForEveryone',
      degree: 'Certified AI Builder (Level II) - AI for Engineers',
      year: 'May 18, 2026',
      grade: 'ID: CERT-9IB1WQ-TDMUYV',
      certificateUrl: '/Ai-cirtificate.jpeg'
    },
    {
      institution: 'CDAC (Centre for Development of Advanced Computing)',
      degree: 'Full Stack MERN Developer Certification',
      year: 'January 2026',
      grade: 'Completed MERN Specialization',
      certificateUrl: '/CDAC_Certificate.jpeg'
    },
    {
      institution: 'Haldia Institute of Technology',
      degree: 'B.Tech. - Computer Science & Engineering',
      year: '2023 - 2027',
      grade: '7.13 / 10 CGPA'
    },
    {
      institution: 'Radhamohanpur Vivekananda High School(H.S.)',
      degree: 'Class XII (WBCHSE)',
      year: '2023',
      grade: '64.80%'
    },
    {
      institution: 'Radhamohanpur Vivekananda High School',
      degree: 'Class X (WBBSE)',
      year: '2021',
      grade: '92.60%'
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-left mb-16"
      >
        <span className="section-label">03 // Academics</span>
        <h3
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">Education</span>
          <span> &amp; Certifications</span>
        </h3>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          Academic journey from high school through undergraduate computer science engineering and professional certifications.
        </p>
      </motion.div>

      <div ref={containerRef} className="relative pt-6 pb-4">
        {/* Background faded line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-200 dark:bg-white/10 z-0" />

        {/* Glowing vertical line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 z-10"
          style={{ height: lineHeight, boxShadow: '0 0 10px rgba(56,189,248,0.6)' }}
        />

        {/* Timeline Items */}
        <div className="relative z-20">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              index={index}
              {...edu}
              onViewCert={(cert) => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Read-Only Certificate View Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </section>
  );
};

export default Education;
