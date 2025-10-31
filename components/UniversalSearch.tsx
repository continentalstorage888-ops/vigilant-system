import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, CornerDownLeft, FileText, Download } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { SearchResultItem } from '../types';
import { APPS } from '../constants';
import { portfolioData, articles } from '../data';

const UniversalSearch: React.FC = () => {
    const { setSearchOpen, openWindow } = useAppContext();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResultItem[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const allResults: SearchResultItem[] = [];

        // Search Apps
        APPS.filter(app => !app.hidden).forEach(app => {
            if (app.title.toLowerCase().includes(lowerQuery)) {
                allResults.push({
                    id: `app-${app.id}`,
                    type: 'app',
                    title: app.title,
                    icon: app.icon,
                    action: () => openWindow(app.id),
                });
            }
        });

        // Search Projects
        portfolioData.projects.forEach(project => {
            if (project.title.toLowerCase().includes(lowerQuery)) {
                allResults.push({
                    id: `project-${project.title}`,
                    type: 'project',
                    title: project.title,
                    icon: APPS.find(a => a.id === 'projects')!.icon,
                    action: () => openWindow('projects'),
                });
            }
        });
        
        // Search Articles
        articles.forEach(article => {
            if (article.title.toLowerCase().includes(lowerQuery)) {
                allResults.push({
                    id: `article-${article.id}`,
                    type: 'article',
                    title: article.title,
                    icon: APPS.find(a => a.id === 'articles')!.icon,
                    action: () => openWindow('articles'), // Opening the app is good enough for now
                });
            }
        });
        
        // Search Skills
        portfolioData.skills.forEach(skill => {
            if (skill.toLowerCase().includes(lowerQuery)) {
                allResults.push({
                    id: `skill-${skill}`,
                    type: 'skill',
                    title: skill,
                    icon: APPS.find(a => a.id === 'skills_interests')!.icon,
                    action: () => openWindow('skills_interests'),
                });
            }
        });

        // Search Files
        if ('resume.pdf'.includes(lowerQuery)) {
            allResults.push({
                id: 'file-resume',
                type: 'file',
                title: 'Download Resume',
                icon: Download,
                action: () => {
                     window.open('/tanmay-resume.pdf', '_blank');
                },
            });
        }
        if ('readme.txt'.includes(lowerQuery)) {
            allResults.push({
                id: 'file-readme',
                type: 'file',
                title: 'README.txt',
                icon: FileText,
                action: () => openWindow('reader'),
            });
        }
        

        setResults(allResults.slice(0, 7)); // Limit results to 7 for better UI
        setSelectedIndex(0);
    }, [query, openWindow]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSearchOpen(false);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % (results.length || 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
            } else if (e.key === 'Enter' && results.length > 0) {
                e.preventDefault();
                results[selectedIndex]?.action();
                setSearchOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [results, selectedIndex, setSearchOpen]);
    
    useEffect(() => {
        resultsRef.current?.children[selectedIndex]?.scrollIntoView({
            block: 'nearest',
        });
    }, [selectedIndex]);

    const handleResultClick = (result: SearchResultItem) => {
        result.action();
        setSearchOpen(false);
    }

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[5000] flex items-start justify-center pt-[15vh]" onClick={() => setSearchOpen(false)}>
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-stone-100/80 dark:bg-stone-900/80 backdrop-blur-2xl rounded-xl shadow-2xl border border-stone-300/50 dark:border-stone-700/50 overflow-hidden"
            >
                <div className="flex items-center gap-4 p-4 border-b border-stone-200 dark:border-stone-800">
                    <Search size={20} className="text-stone-500 flex-shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search apps, projects, files..."
                        className="w-full bg-transparent text-lg text-stone-800 dark:text-stone-200 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none"
                    />
                </div>
                
                <div ref={resultsRef} className="max-h-[50vh] overflow-y-auto">
                    {results.length > 0 ? (
                        <ul className="p-2">
                            {results.map((result, index) => {
                                const Icon = result.icon;
                                return (
                                <li
                                    key={result.id}
                                    onClick={() => handleResultClick(result)}
                                    className={`flex items-center justify-between gap-4 p-3 rounded-lg cursor-pointer ${selectedIndex === index ? 'bg-amber-500/20' : 'hover:bg-stone-200/50 dark:hover:bg-stone-800/50'}`}
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="bg-stone-200 dark:bg-stone-800 p-2 rounded-md">
                                            <Icon size={18} className="text-stone-600 dark:text-stone-300" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-stone-800 dark:text-stone-200 truncate">{result.title}</p>
                                            <p className="text-xs text-stone-500 dark:text-stone-400 capitalize">{result.type}</p>
                                        </div>
                                    </div>
                                    {selectedIndex === index && <CornerDownLeft size={16} className="text-stone-500 flex-shrink-0" />}
                                </li>
                                )
                            })}
                        </ul>
                    ) : (
                        query.trim() && (
                            <div className="p-8 text-center text-stone-500">
                                <p>No results found for "{query}"</p>
                            </div>
                        )
                    )}
                </div>

                {results.length > 0 && (
                    <div className="p-2 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-end gap-4">
                        <span>Navigate with ↑↓</span>
                        <span>Open with ↵</span>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default UniversalSearch;