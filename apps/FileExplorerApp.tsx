import React, { useState, useMemo } from 'react';
import { VFS } from '../vfs';
import { VFSNode, VFSDirectory, VFSFile } from '../types';
import { Folder, FileText, ArrowUp, Home, FileUp } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const getIconForNode = (node: VFSNode) => {
    if (node.type === 'directory') return Folder;
    if ((node as VFSFile).isLink) return FileUp;
    return FileText;
};

const getNodeByPath = (path: string[]): VFSNode | null => {
    let currentNode: VFSNode = VFS;
    for (const part of path) {
        if (currentNode.type !== 'directory') return null;
        const children = (currentNode as VFSDirectory).children;
        if (!children[part]) return null;
        currentNode = children[part];
    }
    return currentNode;
};

const FileExplorerApp: React.FC = () => {
    const [currentPath, setCurrentPath] = useState<string[]>([]);
    const { openWindow, setActiveFile } = useAppContext();

    const currentNode = useMemo(() => getNodeByPath(currentPath), [currentPath]);
    const currentDirectory = currentNode?.type === 'directory' ? (currentNode as VFSDirectory) : null;
    const pathString = `~/${currentPath.join('/')}`;

    const handleNodeDoubleClick = (node: VFSNode) => {
        if (node.type === 'directory') {
            const dirNode = node as VFSDirectory;
            const parent = getNodeByPath(currentPath) as VFSDirectory;
            const key = Object.keys(parent.children).find(k => parent.children[k] === dirNode);
            if (key) {
                setCurrentPath(prev => [...prev, key]);
            }
        } else {
            const fileNode = node as VFSFile;
            if (fileNode.isLink) {
                 window.open(fileNode.content, '_blank');
            } else {
                setActiveFile(fileNode);
                openWindow('editor', fileNode.name);
            }
        }
    };

    const navigateUp = () => {
        if (currentPath.length > 0) {
            setCurrentPath(prev => prev.slice(0, -1));
        }
    };

    const navigateHome = () => {
        setCurrentPath([]);
    }

    const renderDirectoryTree = (dir: VFSDirectory, path: string[] = []): React.ReactNode => {
        return (
            <ul className="pl-4">
                {Object.entries(dir.children)
                    .filter(([_, node]) => node.type === 'directory')
                    .map(([key, node]) => {
                        const newPath = [...path, key];
                        const newPathStr = newPath.join('/');
                        const currentPathStr = currentPath.join('/');
                        const isActive = currentPathStr.startsWith(newPathStr);
                        
                        return (
                             <li key={key}>
                                <button
                                    onClick={() => setCurrentPath(newPath)}
                                    className={`flex items-center w-full text-left p-1 rounded-md text-sm ${currentPathStr === newPathStr ? 'bg-stone-300 dark:bg-stone-700 font-semibold' : 'hover:bg-stone-200/50 dark:hover:bg-stone-800/50'}`}
                                >
                                    <Folder size={14} className="mr-2 flex-shrink-0" />
                                    <span className="truncate">{node.name}</span>
                                </button>
                                {isActive && renderDirectoryTree(node as VFSDirectory, newPath)}
                            </li>
                        )
                    })}
            </ul>
        );
    }
    
    return (
        <div className="h-full flex flex-col bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200">
            <header className="flex items-center gap-2 p-2 border-b border-stone-200 dark:border-stone-800 flex-shrink-0">
                <button onClick={navigateUp} disabled={currentPath.length === 0} className="p-1.5 rounded-md hover:bg-stone-200/50 dark:hover:bg-stone-800/50 disabled:opacity-30">
                    <ArrowUp size={16} />
                </button>
                 <button onClick={navigateHome} className="p-1.5 rounded-md hover:bg-stone-200/50 dark:hover:bg-stone-800/50">
                    <Home size={16} />
                </button>
                <div className="flex-grow bg-stone-200 dark:bg-stone-800 p-1.5 rounded-md text-sm font-mono truncate">
                    {pathString}
                </div>
            </header>

            <div className="flex flex-grow min-h-0">
                <aside className="w-48 flex-shrink-0 bg-stone-200/50 dark:bg-stone-800/50 p-2 border-r border-stone-200 dark:border-stone-800 overflow-y-auto">
                    <button
                        onClick={navigateHome}
                        className={`flex items-center w-full text-left p-1 rounded-md text-sm mb-2 ${currentPath.length === 0 ? 'bg-stone-300 dark:bg-stone-700 font-semibold' : 'hover:bg-stone-200/50 dark:hover:bg-stone-800/50'}`}
                    >
                        <Home size={14} className="mr-2 flex-shrink-0" />
                        <span className="truncate">Home (~)</span>
                    </button>
                    {renderDirectoryTree(VFS)}
                </aside>

                <main className="flex-grow p-4 overflow-y-auto">
                    {currentDirectory ? (
                        <div className="flex flex-wrap gap-4">
                            {Object.values(currentDirectory.children).map(node => {
                                const Icon = getIconForNode(node);
                                return (
                                    <div
                                        key={node.name}
                                        onDoubleClick={() => handleNodeDoubleClick(node)}
                                        className="flex flex-col items-center p-2 rounded-lg cursor-pointer transition-colors hover:bg-stone-200/50 dark:hover:bg-stone-800/50 w-24 h-24 justify-center select-none"
                                    >
                                        <Icon className="w-10 h-10 mb-1 text-amber-500" />
                                        <span className="text-xs text-center break-words w-full">{node.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Could not load directory.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default FileExplorerApp;