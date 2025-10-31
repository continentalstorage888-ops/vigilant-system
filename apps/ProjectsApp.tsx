import React from 'react';
import { portfolioData } from '../data';
import { Project } from '../types';
import { ExternalLink, Github, Globe, Instagram, AreaChart } from 'lucide-react';
import { useWindowManager } from '../hooks/useWindowManager';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { openWindow } = useWindowManager();

    return (
        <div className="bg-stone-200/50 dark:bg-stone-800/50 p-4 rounded-lg border border-stone-300/50 dark:border-stone-700/50 transition-all hover:border-amber-500/50 hover:shadow-lg">
            <div className="flex items-start">
                <span className="text-2xl mr-4 mt-1">{project.icon}</span>
                <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-100">{project.title}</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">{project.description}</p>
                    {(project.features || project.contributions || project.tasks) && (
                         <details className="text-xs">
                            <summary className="cursor-pointer font-semibold text-amber-600 dark:text-amber-400">Details</summary>
                            <ul className="list-disc list-inside mt-1 space-y-0.5">
                                {project.features?.map((f, i) => <li key={`feat-${i}`}>{f}</li>)}
                                {project.contributions?.map((c, i) => <li key={`cont-${i}`}>{c}</li>)}
                                {project.tasks?.map((t, i) => <li key={`task-${i}`}>{t}</li>)}
                            </ul>
                        </details>
                    )}
                    <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-3">
                        {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-amber-600 dark:text-amber-400 hover:underline"><ExternalLink size={12} className="mr-1"/>Live Demo</a>}
                        {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-amber-600 dark:text-amber-400 hover:underline"><Github size={12} className="mr-1"/>GitHub</a>}
                        {project.links.website && <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-amber-600 dark:text-amber-400 hover:underline"><Globe size={12} className="mr-1"/>Website</a>}
                        {project.links.instagram && <a href={project.links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-amber-600 dark:text-amber-400 hover:underline"><Instagram size={12} className="mr-1"/>Instagram</a>}
                        {project.appId && (
                             <button onClick={() => openWindow(project.appId!)} className="flex items-center text-xs font-semibold bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600 transition-colors">
                                <AreaChart size={12} className="mr-1"/>
                                Open Dashboard
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsApp: React.FC = () => {
    const categories = [...new Set(portfolioData.projects.map(p => p.category))];

    return (
        <div className="select-text">
            <h2 className="text-2xl font-extrabold text-stone-900 dark:text-white mb-4">Projects</h2>
            <div className="space-y-6">
                {categories.map(category => (
                    <section key={category}>
                        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-3 border-b border-stone-300 dark:border-stone-700 pb-1">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {portfolioData.projects.filter(p => p.category === category).map((project, index) => (
                                <ProjectCard key={`${category}-${index}`} project={project} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ProjectsApp;