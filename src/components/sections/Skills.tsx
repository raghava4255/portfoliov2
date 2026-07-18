import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Container, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string; // Tailwind glow border color style
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Dev',
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    colorClass: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]',
    skills: [
      { name: 'C# / C', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    colorClass: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]',
    skills: [
      { name: 'Bootstrap / HTML5 / CSS3', level: 90 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <Server className="w-5 h-5 text-purple-400" />,
    colorClass: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]',
    skills: [
      { name: 'ASP.NET Core / Web API', level: 88 },
      { name: 'Entity Framework Core / REST APIs', level: 85 },
      { name: 'Microsoft SQL Server', level: 85 },
    ],
  },
  {
    title: 'Auth & Security',
    icon: <Server className="w-5 h-5 text-red-400" />,
    colorClass: 'hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.1)]',
    skills: [
      { name: 'JWT Authentication', level: 85 },
      { name: 'Role-Based Authorization', level: 85 },
    ],
  },
  {
    title: 'DevOps & Deployment',
    icon: <Container className="w-5 h-5 text-emerald-400" />,
    colorClass: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]',
    skills: [
      { name: 'Docker / Docker Compose', level: 85 },
      { name: 'Nginx & Linux', level: 80 },
      { name: 'Kubernetes (Basics)', level: 65 },
      { name: 'CI/CD Fundamentals', level: 75 },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: <Cloud className="w-5 h-5 text-sky-400" />,
    colorClass: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
    skills: [
      { name: 'AWS Fundamentals', level: 70 },
      { name: 'Hostinger VPS', level: 80 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Visual Studio / VS Code', level: 90 },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
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
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 rounded-2xl border border-white/5 transition-all duration-500 flex flex-col ${category.colorClass}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-white/5">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold font-display text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills progress list */}
              <div className="space-y-4 flex-1">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
