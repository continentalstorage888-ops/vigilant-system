import React from 'react';
import type { LucideProps } from 'lucide-react';

export type AppID = 'about' | 'projects' | 'contact' | 'settings' | 'ai_assistant' | 'terminal' | 'reader' | 'file_explorer' | 'hire_me' | 'tic_tac_toe' | 'games_folder' | 'rock_paper_scissors' | 'connect_four' | 'guess_the_number' | 'hangman' | 'skills_playground' | 'work_with_me' | 'secret_projects' | 'business_card' | 'skills_interests' | 'articles' | 'editor' | 'data_wave_dashboard';

export type Theme = 'light' | 'dark';

export type WallpaperID = 'dots' | 'blueprint' | 'circuit' | 'plus' | 'zigzag' | 'woven';

export type DockPosition = 'bottom' | 'left' | 'right';

export interface WindowState {
    id: AppID;
    title: string;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

export interface AppDefinition {
    id: AppID;
    title: string;
    icon: React.ComponentType<LucideProps>;
    hidden?: boolean;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  features?: string[];
  contributions?: string[];
  tasks?: string[];
  links: {
    live?: string;
    github?: string;
    website?: string;
    instagram?: string;
  };
  icon: string;
  appId?: AppID;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  project: string;
  content: string;
  snippet: string;
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    duties: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error';
}

export interface ChatMessage {
    role: 'user' | 'model';
    parts: string;
}

export interface Notification {
    id: number;
    icon: React.ComponentType<LucideProps>;
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
}

export interface SearchResultItem {
    id: string;
    type: 'app' | 'project' | 'article' | 'skill' | 'file' | 'link';
    title: string;
    icon: React.ComponentType<LucideProps>;
    action: () => void;
}

// Virtual File System Types
export interface VFSNode {
    type: 'file' | 'directory';
    name: string;
}
export interface VFSFile extends VFSNode {
    type: 'file';
    content: string;
    isLink?: boolean;
}
export interface VFSDirectory extends VFSNode {
    type: 'directory';
    children: { [key: string]: VFSNode };
}


export interface AppContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    wallpaper: WallpaperID;
    setWallpaper: (wallpaper: WallpaperID) => void;
    windows: Record<AppID, WindowState>;
    openWindow: (id: AppID, title?: string) => void;
    closeWindow: (id: AppID) => void;
    toggleMinimize: (id: AppID) => void;
    focusWindow: (id: AppID) => void;
    toast: (message: string, type?: ToastMessage['type']) => void;
    toastMessages: ToastMessage[];
    removeToast: (id: number) => void;
    dockPosition: DockPosition;
    setDockPosition: (position: DockPosition) => void;
    closeAllWindows: () => void;
    refreshDesktop: () => void;
    secretProjectsUnlocked: boolean;
    unlockSecretProjects: () => void;
    clickCount: number;
    incrementClickCount: () => void;
    isGuiding: boolean;
    setIsGuiding: (isGuiding: boolean) => void;
    notifications: Notification[];
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
    clearNotifications: () => void;
    markNotificationsAsRead: () => void;
    isSearchOpen: boolean;
    setSearchOpen: (isOpen: boolean) => void;
    activeFile: VFSFile | null;
    setActiveFile: (file: VFSFile | null) => void;
}