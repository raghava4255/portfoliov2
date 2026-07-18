import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Junior Developer',
    company: 'K Quality Soft Pvt. Ltd.',
    location: 'Tanuku, Andhra Pradesh',
    duration: 'Current',
    highlights: [
      'Developing an Attendance Management System (AMS) using ASP.NET Core Web API and Microsoft SQL Server.',
      'Building and maintaining RESTful APIs, attendance modules, validations, and business workflows.',
      'Implementing JWT Authentication and Role-Based Authorization for secure access control.',
      'Designing and optimizing SQL Server databases using Entity Framework Core.',
      'Deploying applications using Docker, Docker Compose, and Nginx in Linux environments.',
      'Performing testing, debugging, production support, and database integration to improve application reliability.',
      'Collaborating with cross-functional teams in Agile development, code reviews, and release activities.'
    ]
  },
  {
    role: 'AWS Data Engineering Intern',
    company: 'AWS Virtual Internship',
    location: 'Online',
    duration: '2023',
    highlights: [
      'Gained fundamental skills in cloud database design, data warehousing, and ETL streaming pipelines.',
      'Implemented basic serverless function automation using AWS Lambda, S3 triggers, and DynamoDB storage schemas.',
      'Studied security governance, VPC networks configuration, and IAM role scopes.'
    ]
  },
  {
    role: 'Embedded System Developer Intern',
    company: 'Microchip Virtual Internship',
    location: 'Online',
    duration: '2022',
    highlights: [
      'Programmed microcontrollers and peripheral devices using C, focusing on hardware-software interfaces.',
      'Developed, simulated, and tested embedded firmware circuits simulating environmental sensor readings.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto scroll-mt-16">
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
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#030014] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10" />

              {/* Experience Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/25 transition-all duration-300 space-y-4">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-4 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-purple-400" /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 py-1 px-3 rounded-full w-fit self-start sm:self-center">
                    <Calendar className="w-3 h-3" /> {exp.duration}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-4 marker:text-cyan-500">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Experience;
