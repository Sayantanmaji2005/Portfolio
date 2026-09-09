import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiGitCommit, FiFolder, FiStar, FiActivity } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Generate mock data for the AreaChart
const generateChartData = () => {
  const data = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Provide realistic-looking simulated data
  const commitsTrend = [20, 35, 45, 30, 60, 85, 70, 95, 110, 80, 100, 130];
  
  for (let i = 0; i < 12; i++) {
    data.push({
      name: months[i],
      commits: commitsTrend[i] + Math.floor(Math.random() * 20),
    });
  }
  return data;
};

const Github = () => {
  const chartData = useMemo(() => generateChartData(), []);

  const githubStats = [
    { label: 'Total Repositories', value: '18+', icon: <FiFolder className="text-blue-600 w-4.5 h-4.5" /> },
    { label: 'Total Commits (2026)', value: '540+', icon: <FiGitCommit className="text-emerald-500 w-4.5 h-4.5" /> },
    { label: 'Stars Earned', value: '12', icon: <FiStar className="text-amber-500 w-4.5 h-4.5" /> },
    { label: 'Contribution Rate', value: '94%', icon: <FiActivity className="text-purple-500 w-4.5 h-4.5" /> }
  ];

  const languages = [
    { name: 'JavaScript', percentage: 48, color: 'bg-blue-600', textStyle: 'text-blue-600' },
    { name: 'React / HTML', percentage: 32, color: 'bg-emerald-500', textStyle: 'text-emerald-600' },
    { name: 'Node.js', percentage: 12, color: 'bg-amber-500', textStyle: 'text-amber-600' },
    { name: 'Others (CSS/Shell)', percentage: 8, color: 'bg-purple-500', textStyle: 'text-purple-600' }
  ];

  return (
    <section id="github" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Decorative Blur */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-left mb-16"
      >
        <span className="section-label">07 // Codebase</span>
        <h3 
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-4 tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'Syne, Outfit, sans-serif' }}
        >
          <span className="text-gradient">GitHub</span>
          <span> Telemetry</span>
        </h3>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          Visualizing commits, open-source repositories, and language distribution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: contribution graph and stats */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          
          {/* Mock Contribution Graph Card */}
          <motion.div
            className="aurora-card rounded-2xl p-6 hover:border-secondary/20 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FiGithub className="text-blue-600 w-5 h-5" />
                <h4 className="text-xs sm:text-sm font-bold font-heading text-textPrimary">
                  Contribution Activity
                </h4>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">github.com/Sayantanmaji2005</span>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-[200px] w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontSize: '12px', fontWeight: 'bold' }}
                    itemStyle={{ color: '#2563EB' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="commits" 
                    stroke="#2563EB" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorCommits)" 
                    activeDot={{ r: 6, fill: '#2563EB', stroke: '#fff', strokeWidth: 2 }} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {githubStats.map((stat, i) => (
              <motion.div
                key={i}
                className="aurora-card rounded-2xl p-4 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, scale: 0.85, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.04, translateY: -3 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.08, 
                  type: 'spring',
                  stiffness: 110,
                  damping: 14 
                }}
              >
                <div className="p-2 w-fit rounded-lg bg-slate-50 border border-slate-200 mb-3 group-hover:border-primary/20 transition-all">
                  {stat.icon}
                </div>
                <div>
                  <h5 className="text-xl sm:text-2xl font-bold font-heading text-textPrimary">{stat.value}</h5>
                  <p className="text-[10px] sm:text-xs text-textSecondary mt-1 leading-tight">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: Language usage summary */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <motion.div
            className="aurora-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-heading text-textPrimary">
                  Language Share
                </h4>
                <p className="text-[10px] text-slate-500 mt-1">Calculated from recent public commits</p>
              </div>

              {/* Progress-style language bar */}
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`h-full ${lang.color} transition-all`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs sm:text-sm font-sans">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`}></span>
                      <span className="font-medium text-slate-700">{lang.name}</span>
                    </div>
                    <span className={`font-mono font-semibold ${lang.textStyle}`}>{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Github Button */}
            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href="https://github.com/Sayantanmaji2005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-secondary w-full py-2 text-xs flex items-center justify-center gap-2 font-semibold cursor-pointer"
              >
                <span>Visit GitHub Profile</span>
                <FiGithub className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Github;
