import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import Window from './components/Window';
import BootScreen from './components/BootScreen';
import { useWindowManager } from './hooks/useWindowManager';
import AboutApp from './apps/AboutApp';
import ProjectsApp from './apps/ProjectsApp';
import ContactApp from './apps/ContactApp';
import SettingsApp from './apps/SettingsApp';
import AI_AssistantApp from './apps/AI_AssistantApp';
import TerminalApp from './apps/TerminalApp';
import ReaderApp from './apps/ReaderApp';
import FileExplorerApp from './apps/FileExplorerApp';
import EditorApp from './apps/EditorApp';
import HireMeApp from './apps/HireMeApp';
import TicTacToeApp from './apps/TicTacToeApp';
import GamesFolderApp from './apps/GamesFolderApp';
import RockPaperScissorsApp from './apps/RockPaperScissorsApp';
import ConnectFourApp from './apps/ConnectFourApp';
import GuessTheNumberApp from './apps/GuessTheNumberApp';
import HangmanApp from './apps/HangmanApp';
import SkillsPlaygroundApp from './apps/SkillsPlaygroundApp';
import WorkWithMeApp from './apps/WorkWithMeApp';
import SecretProjectsApp from './apps/SecretProjectsApp';
import BusinessCardApp from './apps/BusinessCardApp';
import SkillsInterestsApp from './apps/SkillsInterestsApp';
import ArticlesApp from './apps/ArticlesApp';
import Toast from './components/Toast';
import DesktopPet from './components/DesktopPet';
import { AppID } from './types';
import { useAppContext } from './contexts/AppContext';
import { AnimatePresence } from 'framer-motion';
import OnboardingModal from './components/OnboardingModal';
import MenuBar from './components/MenuBar';
import NotificationCenter from './components/NotificationCenter';
import { APPS } from './constants';
import { LockKeyhole } from 'lucide-react';
import UniversalSearch from './components/UniversalSearch';
import DataWaveIndiaDashboard from './apps/DataWaveIndiaDashboard';

const AppContent: React.FC = () => {
    const { windows } = useWindowManager();
    const { theme, clickCount, incrementClickCount, unlockSecretProjects, toast, wallpaper, addNotification, isSearchOpen, setSearchOpen } = useAppContext();
    const [booting, setBooting] = useState(true);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBooting(false);
            const hasVisited = localStorage.getItem('hasVisitedPortfolioOS');
            if (!hasVisited) {
                setShowOnboarding(true);
            }
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

     useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    // Easter Egg: Konami Code
    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let index = 0;
        const handler = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === konamiCode[index].toLowerCase()) {
                index++;
                if (index === konamiCode.length) {
                    unlockSecretProjects();
                    addNotification({
                        icon: LockKeyhole,
                        title: 'System Unlocked',
                        message: 'Secret Projects app is now available on your desktop.'
                    });
                    index = 0;
                }
            } else {
                index = 0;
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [unlockSecretProjects, addNotification]);
    
    // Universal Search Shortcut
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(!isSearchOpen);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isSearchOpen, setSearchOpen]);


    // Easter Egg: Click Counter
    useEffect(() => {
        if (clickCount === 100) {
            toast("You seem very interested! Let's talk.", 'info');
        }
    }, [clickCount, toast]);
    
    const handleCloseOnboarding = () => {
        setShowOnboarding(false);
        localStorage.setItem('hasVisitedPortfolioOS', 'true');
    };

    const appComponents: { [key in AppID]: React.FC } = {
        about: AboutApp,
        projects: ProjectsApp,
        contact: ContactApp,
        settings: SettingsApp,
        ai_assistant: AI_AssistantApp,
        terminal: TerminalApp,
        reader: ReaderApp,
        file_explorer: FileExplorerApp,
        editor: EditorApp,
        hire_me: HireMeApp,
        tic_tac_toe: TicTacToeApp,
        games_folder: GamesFolderApp,
        rock_paper_scissors: RockPaperScissorsApp,
        connect_four: ConnectFourApp,
        guess_the_number: GuessTheNumberApp,
        hangman: HangmanApp,
        skills_playground: SkillsPlaygroundApp,
        work_with_me: WorkWithMeApp,
        secret_projects: SecretProjectsApp,
        business_card: BusinessCardApp,
        skills_interests: SkillsInterestsApp,
        articles: ArticlesApp,
        data_wave_dashboard: DataWaveIndiaDashboard,
    };

    if (booting) {
        return <BootScreen />;
    }

    return (
        <div onClick={incrementClickCount} className={`relative w-screen h-screen overflow-hidden transition-colors duration-500 ${`wallpaper-${wallpaper}-${theme}`} select-none`}>
            <MenuBar onToggleNotifications={() => setIsNotificationCenterOpen(!isNotificationCenterOpen)} />

            <Desktop />
            <DesktopPet />
            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                    {Object.values(windows).map((win) => {
                        if (!win.isOpen) return null;
                        const AppContentComponent = appComponents[win.id];
                        if (!AppContentComponent) return null;
                        return (
                            <Window
                                key={win.id}
                                id={win.id}
                                winState={win}
                                padding={!['terminal', 'business_card', 'editor', 'data_wave_dashboard'].includes(win.id)}
                            >
                                <AppContentComponent />
                            </Window>
                        );
                    })}
                </AnimatePresence>
            </div>
            <Dock />
            <Toast />
            <NotificationCenter isOpen={isNotificationCenterOpen} onClose={() => setIsNotificationCenterOpen(false)} />
            <AnimatePresence>
                {showOnboarding && <OnboardingModal onClose={handleCloseOnboarding} />}
            </AnimatePresence>
            <AnimatePresence>
                {isSearchOpen && <UniversalSearch />}
            </AnimatePresence>
        </div>
    );
};


const App: React.FC = () => {
    return (
        <AppProvider>
            <AppContent/>
        </AppProvider>
    );
};

export default App;