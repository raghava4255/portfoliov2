import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitPullRequest, Star, BookOpen, Clock } from 'lucide-react';

export const GitHub: React.FC = () => {
  // Mock contribution squares: 7 rows x 28 columns (approx 6 months)
  // Value range: 0 (empty), 1 (light), 2 (medium), 3 (dark/green)
  const contributionGrid: number[][] = Array.from({ length: 7 }, () =>
    Array.from({ length: 32 }, () => {
      const rand = Math.random();
      if (rand < 0.3) return 0;
      if (rand < 0.6) return 1;
      if (rand < 0.85) return 2;
      return 3;
    })
  );

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-950 border-emerald-900/30';
      case 2:
        return 'bg-emerald-700/80 border-emerald-600/40';
      case 3:
        return 'bg-emerald-400 border-emerald-300/50 shadow-[0_0_10px_rgba(52,211,153,0.3)]';
      default:
        return 'bg-slate-900/40 border-white/5';
    }
  };

  const languages = [
    { name: 'C# / .NET', percent: 55, color: 'bg-purple-500' },
    { name: 'TypeScript', percent: 25, color: 'bg-blue-500' },
    { name: 'Terraform (HCL)', percent: 12, color: 'bg-rose-500' },
    { name: 'Go', percent: 8, color: 'bg-cyan-500' },
  ];

  const activities = [
    { text: 'Merged Pull Request #42 in orchestra-aks-hub', time: '2 hours ago' },
    { text: 'Pushed 5 commits to origin/main on securesync-api', time: '1 day ago' },
    { text: 'Published release v1.4.2 of cloudflow-runner docker image', time: '3 days ago' },
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            GitHub{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Telemetry
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Outer Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Contribution Graph */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-white/5 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold font-display text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Contribution Matrix
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">2,419 commits this year</span>
            </div>

            {/* Matrix Container */}
            <div className="overflow-x-auto pb-2 scrollbar-thin">
              <div className="flex flex-col gap-1 min-w-[500px]">
                {contributionGrid.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1">
                    {row.map((cell, cIdx) => (
                      <div
                        key={cIdx}
                        className={`w-3.5 h-3.5 rounded-sm border transition-all duration-300 cursor-pointer ${getIntensityColor(cell)}`}
                        title={`Activity level: ${cell}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-2.5 bg-slate-900 border border-white/5 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-950 border border-emerald-900/30 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-700/80 border border-emerald-600/40 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-400 border border-emerald-300/50 rounded-sm" />
                <span className="ml-1">More</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { icon: <GitBranch className="w-5 h-5 text-cyan-400" />, label: 'Repos', val: '42' },
              { icon: <GitPullRequest className="w-5 h-5 text-purple-400" />, label: 'PRs Merged', val: '184' },
              { icon: <Star className="w-5 h-5 text-amber-400" />, label: 'Stars Earned', val: '1.2k' },
              { icon: <Clock className="w-5 h-5 text-blue-400" />, label: 'Commit Frequency', val: 'High' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="p-2 rounded-lg bg-white/5 w-fit">{stat.icon}</div>
                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-bold font-display text-white">{stat.val}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Language Breakdown */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-sm sm:text-base font-bold font-display text-white">Language Distribution</h3>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300">{lang.name}</span>
                    <span className="text-slate-400">{lang.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/2">
                    <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Commits Feed */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-sm sm:text-base font-bold font-display text-white">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((act, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-1.5 rounded-full bg-cyan-950/20 border border-cyan-500/20 mt-0.5">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-200 leading-normal">{act.text}</p>
                    <span className="text-[10px] text-slate-500 font-semibold">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
export default GitHub;
