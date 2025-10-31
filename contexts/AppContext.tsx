import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { AppContextType, Theme, AppID, WindowState, ToastMessage, DockPosition, WallpaperID, Notification, VFSFile } from '../types';
import { APPS, INITIAL_WINDOWS_STATE } from '../constants';
import { Aperture, Info } from 'lucide-react';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>('dark');
    const [windows, setWindows] = useState<Record<AppID, WindowState>>(INITIAL_WINDOWS_STATE);
    const [zIndexCounter, setZIndexCounter] = useState(10);
    const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);
    const [dockPosition, setDockPositionState] = useState<DockPosition>('bottom');
    const [wallpaper, setWallpaperState] = useState<WallpaperID>('dots');
    const [secretProjectsUnlocked, setSecretProjectsUnlocked] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [isGuiding, setIsGuiding] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [activeFile, setActiveFile] = useState<VFSFile | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        setThemeState(savedTheme || 'dark');

        const savedWallpaper = localStorage.getItem('wallpaper') as WallpaperID | null;
        if (savedWallpaper) {
            setWallpaperState(savedWallpaper);
        }

        const savedPosition = localStorage.getItem('dockPosition') as DockPosition | null;
        if (savedPosition === 'left') {
            localStorage.setItem('dockPosition', 'bottom');
            setDockPositionState('bottom');
        } else if (savedPosition) {
            setDockPositionState(savedPosition);
        }
        
        // Add welcome notification on boot
        addNotification({
            icon: Aperture,
            title: 'Welcome to Portfolio OS',
            message: 'Feel free to explore the apps and get to know me better!'
        });

        // Add a helpful tip after a delay
        const tipTimeout = setTimeout(() => {
             addNotification({
                icon: Info,
                title: 'System Tip',
                message: 'You can right-click anywhere on the desktop for quick options.'
            });
        }, 30 * 1000); // 30 seconds

        return () => clearTimeout(tipTimeout);
    }, []);

    const setTheme = (theme: Theme) => {
        setThemeState(theme);
        localStorage.setItem('theme', theme);
    };

    const setWallpaper = (wallpaper: WallpaperID) => {
        setWallpaperState(wallpaper);
        localStorage.setItem('wallpaper', wallpaper);
    };

    const setDockPosition = (position: DockPosition) => {
        setDockPositionState(position);
        localStorage.setItem('dockPosition', position);
    };

    const focusWindow = useCallback((id: AppID) => {
        setZIndexCounter(prevCounter => {
            const newZIndex = prevCounter + 1;
            setWindows(prevWindows => ({
                ...prevWindows,
                [id]: { ...prevWindows[id], zIndex: newZIndex, isMinimized: false },
            }));
            return newZIndex;
        });
    }, []);
    
    const openWindow = useCallback((id: AppID, title?: string) => {
        setZIndexCounter(prevCounter => {
            const newZIndex = prevCounter + 1;
            const appInfo = APPS.find(app => app.id === id);
            const windowTitle = title || appInfo?.title || 'Window';

            setWindows(prev => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    title: windowTitle,
                    isOpen: true,
                    isMinimized: false,
                    zIndex: newZIndex,
                },
            }));
            if (appInfo && appInfo.id !== 'editor') { // Don't notify for editor opening
                addNotification({
                    icon: appInfo.icon,
                    title: `${windowTitle} Opened`,
                    message: `You've launched the ${appInfo.title} application.`
                });
            }
            return newZIndex;
        });
    }, []);


    const closeWindow = (id: AppID) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false },
        }));
        if (id === 'editor') {
            setActiveFile(null);
        }
    };

    const toggleMinimize = (id: AppID) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isMinimized: !prev[id].isMinimized },
        }));
    };

    const closeAllWindows = () => {
        setWindows(prev => {
            const newWindows = { ...prev };
            for (const id in newWindows) {
                newWindows[id as AppID].isOpen = false;
            }
            return newWindows;
        });
    };
    
    const refreshDesktop = closeAllWindows;
    
    const toast = (message: string, type: ToastMessage['type'] = 'info') => {
        const id = Date.now();
        setToastMessages(prev => [...prev, { id, message, type }]);
    };
    
    const removeToast = (id: number) => {
        setToastMessages(prev => prev.filter(t => t.id !== id));
    };

    const unlockSecretProjects = () => setSecretProjectsUnlocked(true);
    const incrementClickCount = () => setClickCount(c => c + 1);

    const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
        const newNotification: Notification = {
            id: Date.now(),
            timestamp: new Date(),
            read: false,
            ...notification
        };
        setNotifications(prev => [newNotification, ...prev]);
    }, []);

    const clearNotifications = () => {
        setNotifications([]);
    };

    const markNotificationsAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };


    const value = {
        theme, setTheme, 
        wallpaper, setWallpaper,
        windows, openWindow, closeWindow, toggleMinimize, focusWindow, 
        toast, toastMessages, removeToast,
        dockPosition, setDockPosition,
        closeAllWindows,
        refreshDesktop,
        secretProjectsUnlocked, unlockSecretProjects,
        clickCount, incrementClickCount,
        isGuiding, setIsGuiding,
        notifications, addNotification, clearNotifications, markNotificationsAsRead,
        isSearchOpen, setSearchOpen,
        activeFile, setActiveFile,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};