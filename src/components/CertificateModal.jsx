import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShield, FiCheckCircle, FiAward, FiDownload } from 'react-icons/fi';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !certificate) return null;

  const isPdf = certificate.url?.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0E131F] rounded-3xl border border-slate-200 dark:border-blue-500/30 shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Modal Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-sky-400 text-base shadow-inner">
                <FiAward />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Syne, Outfit, sans-serif' }}>
                    {certificate.title || 'Verified Credential'}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <FiCheckCircle className="w-2.5 h-2.5" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {certificate.issuer || 'Official Certification'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {certificate.url && (
                <a
                  href={certificate.url}
                  download={certificate.url.split('/').pop()}
                  className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  title="Download Certificate"
                >
                  <FiDownload className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate modal"
                className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/80 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-sm"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Certificate View Content (Locked Zero Scroll) */}
          <div className="p-2 sm:p-4 flex items-center justify-center bg-slate-950 select-none overflow-hidden">
            {isPdf ? (
              <div className="w-full aspect-[1.414/1] max-h-[70vh] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-white flex items-center justify-center">
                <iframe
                  src={`${certificate.url}#toolbar=0&navpanes=0&scrollbar=0&view=Fit&zoom=page-fit`}
                  title={certificate.title}
                  scrolling="no"
                  className="w-full h-full border-0 overflow-hidden"
                  style={{ overflow: 'hidden' }}
                />
              </div>
            ) : (
              <div 
                className="relative max-h-[70vh] w-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-1 group flex items-center justify-center"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={certificate.url}
                  alt={certificate.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-h-[68vh] max-w-full w-auto h-auto object-contain rounded-xl select-none pointer-events-none"
                />
                <div className="absolute inset-0 pointer-events-auto" onContextMenu={(e) => e.preventDefault()} />
              </div>
            )}
          </div>

          {/* Bottom Security Footer */}
          <div className="px-5 sm:px-6 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <FiShield className="text-emerald-500 w-3.5 h-3.5" />
              <span>Official Academic / Professional Credential</span>
            </span>
            <span className="text-[10px] text-blue-600 dark:text-sky-400 font-semibold">
              Protected Document Viewer • Confidential
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
