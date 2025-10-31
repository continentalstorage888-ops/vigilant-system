import React, { ReactNode, useState, useRef } from 'react';
import { motion, Variants, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { AppID, WindowState, DockPosition } from '../types';
import { useWindowManager } from '../hooks/useWindowManager';
import { DOCK_APPS } from '../constants';
import { useAppContext } from '../contexts/AppContext';

interface WindowProps {
    id: AppID;
    children: ReactNode;
    winState: WindowState;
    padding?: boolean;
}

const DOCK_APP_IDS = DOCK_APPS.map(app => app.id);

const getVariants = (position: DockPosition, isMaximized: boolean): Variants => {
    const transition = { type: "spring" as const, stiffness: 400, damping: 30 };

    // Define the final position and size
    const finalState = isMaximized 
    ? { top: '6vh', left: '5vw', width: '90vw', height: '88vh' } 
    : { top: '15%', left: '10%', width: '80vw', height: '70vh' };

    // Initial state is always a scale/fade in place. This avoids the "flash".
    const initialState = {
        opacity: 0,
        scale: 0.3,
        x: 0,
        y: 0,
        ...finalState
    };
    
    // Minimized state depends on dock position.
    let minimizedState = {};
    if (position === 'right') {
        minimizedState = {
            opacity: 0,
            scale: 0.3,
            x: "50vw",
            y: 0,
            ...finalState
        };
    } else if (position === 'left') {
        minimizedState = {
            opacity: 0,
            scale: 0.3,
            x: "-50vw",
            y: 0,
            ...finalState
        };
    }
    else { // Default to bottom
        minimizedState = {
            opacity: 0,
            scale: 0.3,
            y: "50vh",
            x: 0,
            ...finalState
        };
    }

    return {
        hidden: initialState,
        visible: { ...finalState, opacity: 1, scale: 1, x: 0, y: 0, transition },
        minimized: { ...minimizedState, transition: { duration: 0.2 } }
    };
};


const Window: React.FC<WindowProps> = ({ id, children, winState, padding = true }) => {
    const { closeWindow, toggleMinimize, focusWindow } = useWindowManager();
    const { dockPosition } = useAppContext();
    const [isMaximized, setIsMaximized] = useState(false);
    const constraintsRef = useRef(null);
    const dragControls = useDragControls();
    const isDockApp = DOCK_APP_IDS.includes(id);

    const variants = getVariants(dockPosition, isMaximized);

    const handlePointerDownHeader = (e: React.PointerEvent) => {
        // Stop event from bubbling to parent, which also calls focusWindow,
        // to prevent race conditions with drag initiation.
        e.stopPropagation();
        focusWindow(id);
        dragControls.start(e);
    };

    return (
        <>
            <div ref={constraintsRef} className="absolute inset-0 pointer-events-none" />
            <motion.div
                drag
                dragControls={dragControls}
                dragListener={false}
                dragMomentum={false}
                dragConstraints={constraintsRef}
                initial="hidden"
                exit="minimized"
                variants={variants}
                animate={winState.isMinimized ? "minimized" : "visible"}
                style={{ zIndex: winState.zIndex }}
                onPointerDown={() => focusWindow(id)}
                className={`absolute pointer-events-auto`}
            >
                <div className={`w-full h-full shadow-2xl rounded-xl flex flex-col overflow-hidden border border-stone-300/50 dark:border-stone-700/50 ${
                    id === 'terminal' 
                    ? 'bg-stone-900' 
                    : 'bg-stone-100/80 dark:bg-stone-900/80 backdrop-blur-xl'
                }`}>
                    <header onPointerDown={handlePointerDownHeader} className="drag-handle flex items-center justify-between pl-4 pr-2 py-1.5 bg-stone-200/50 dark:bg-stone-800/50 border-b border-stone-300/50 dark:border-stone-700/50 cursor-move select-none flex-shrink-0">
                        <h2 className="font-semibold text-sm text-stone-800 dark:text-stone-200">{winState.title}</h2>
                        <div className="flex items-center space-x-1">
                            {isDockApp && (
                                <button onClick={() => toggleMinimize(id)} className="p-1.5 rounded-full hover:bg-stone-300/50 dark:hover:bg-stone-700/50 transition-colors" aria-label="Minimize window">
                                    <Minus size={14} className="text-stone-800 dark:text-stone-200" />
                                </button>
                            )}
                             <button onClick={() => setIsMaximized(!isMaximized)} className="p-1.5 rounded-full hover:bg-stone-300/50 dark:hover:bg-stone-700/50 transition-colors md:block hidden" aria-label="Maximize window">
                                {isMaximized ? <Minimize2 size={14} className="text-stone-800 dark:text-stone-200" /> : <Maximize2 size={14} className="text-stone-800 dark:text-stone-200" />}
                            </button>
                            <button onClick={() => closeWindow(id)} className="p-1.5 rounded-full hover:bg-red-500/80 dark:hover:bg-red-500/80 transition-colors group" aria-label="Close window">
                                <X size={14} className="text-stone-800 dark:text-stone-200 group-hover:text-white" />
                            </button>
                        </div>
                    </header>
                    <main className={`flex-grow ${padding ? 'p-4 overflow-y-auto' : 'overflow-hidden'}`}>
                        {children}
                    </main>
                </div>
            </motion.div>
        </>
    );
};

export default Window;