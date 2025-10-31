import React, { useState, useEffect, useRef } from 'react';
import { AppID } from '../types';
import ContextMenu from './ContextMenu';
import { useWindowManager } from '../hooks/useWindowManager';
import { APPS } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import type { LucideProps } from 'lucide-react';

const DESKTOP_APP_IDS: AppID[] = ['file_explorer', 'reader', 'hire_me', 'projects', 'about', 'articles'];

const DesktopItem: React.FC<{ 
    id: AppID;
    title: string;
    // FIX: Updated icon prop type to be consistent with the change in `types.ts`.
    icon: React.ComponentType<LucideProps>;
    onDoubleClick: (id: AppID) => void; 
}> = ({ id, title, icon: Icon, onDoubleClick }) => {
    const { theme } = useAppContext();
    
    return (
        <div
            className="flex flex-col items-center justify-center text-center w-24 h-24 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/20 dark:focus:bg-white/20 focus:outline-none select-none"
            onDoubleClick={() => onDoubleClick(id)}
            tabIndex={0}
            aria-label={`Open ${title}`}
        >
            <Icon className={`w-10 h-10 mb-2 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`} />
            <span className={`text-sm font-medium w-full break-words ${theme === 'dark' ? 'text-white' : 'text-stone-900'} [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)] dark:[text-shadow:1px_1px_2px_rgba(0,0,0,0.7)]`}>{title}</span>
        </div>
    );
}

const Desktop: React.FC = () => {
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);
    const { openWindow } = useWindowManager();
    const { secretProjectsUnlocked } = useAppContext();
    const desktopRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (contextMenu && desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
            setContextMenu(null);
        }
    };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contextMenu]);

    const desktopItems = APPS.filter(app => DESKTOP_APP_IDS.includes(app.id));
    const secretProjectApp = APPS.find(app => app.id === 'secret_projects');

    if (secretProjectsUnlocked && secretProjectApp) {
        desktopItems.push(secretProjectApp);
    }


    return (
        <div 
            ref={desktopRef}
            className="absolute inset-0 w-full h-full"
            onContextMenu={handleContextMenu}
        >
            <div className="absolute top-2 left-0 p-4 md:p-8 flex flex-col flex-wrap content-start gap-2 h-full">
                 {desktopItems.map((item) => (
                    <DesktopItem 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        icon={item.icon} 
                        onDoubleClick={openWindow}
                    />
                ))}
            </div>

            {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(null)} />}
        </div>
    );
};

export default Desktop;