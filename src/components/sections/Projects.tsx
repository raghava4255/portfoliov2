import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Attendance Management System (AMS)',
    description: 'An enterprise business application supporting multiple modules. Designed REST APIs, integrated MS SQL Server for database logic, and containerized the system with Docker.',
    image: '/orchestra_aks.png',
    tags: ['ASP.NET Core', 'Web API', 'MS SQL Server', 'Docker', 'REST API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
  {
    title: 'Student Database Management System',
    description: 'A CRUD-based web application for student record management. Implemented server-side validations using Data Annotations, database mappings via EF Core, and responsive Razor views.',
    image: '/securesync_api.png',
    tags: ['ASP.NET MVC', 'Entity Framework Core', 'MS SQL Server', 'Bootstrap', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
  {
    title: 'VPS Container Infrastructure',
    description: 'Lightweight cloud setup hosting Docker container deployments on Hostinger VPS virtual private servers behind secure NGINX reverse-proxy gateways.',
    image: '/cloudflow_cicd.png',
    tags: ['Docker Compose', 'Linux Basics', 'Hostinger VPS', 'NGINX', 'Server Management'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto scroll-mt-16">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            A handpicked selection of production-grade cloud, .NET C#, and DevOps automation projects I have designed.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Projects;
