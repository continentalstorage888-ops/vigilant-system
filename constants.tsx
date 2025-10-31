import React from 'react';
import { UserCircle2, FolderGit2, AtSign, Palette, Bot, TerminalSquare, FileText, HardDrive, Target, Grid3x3, Gamepad2, Hand, LayoutGrid, Hash, Puzzle, FlaskConical, Users, LockKeyhole, Contact2, Sparkles, Newspaper, FileCode2, AreaChart, type LucideProps } from 'lucide-react';
import { AppDefinition, AppID, WindowState } from './types';

const UserIcon: React.FC<LucideProps> = (props) => <UserCircle2 {...props} />;
const ProjectsIcon: React.FC<LucideProps> = (props) => <FolderGit2 {...props} />;
const ContactIcon: React.FC<LucideProps> = (props) => <AtSign {...props} />;
const SettingsIcon: React.FC<LucideProps> = (props) => <Palette {...props} />;
const AssistantIcon: React.FC<LucideProps> = (props) => <Bot {...props} />;
const TerminalIcon: React.FC<LucideProps> = (props) => <TerminalSquare {...props} />;
const ReaderIcon: React.FC<LucideProps> = (props) => <FileText {...props} />;
const FileExplorerIcon: React.FC<LucideProps> = (props) => <HardDrive {...props} />;
const HireMeIcon: React.FC<LucideProps> = (props) => <Target {...props} />;
const GamesFolderIcon: React.FC<LucideProps> = (props) => <Gamepad2 {...props} />;
const SkillsPlaygroundIcon: React.FC<LucideProps> = (props) => <FlaskConical {...props} />;
const WorkWithMeIcon: React.FC<LucideProps> = (props) => <Users {...props} />;
const SecretProjectsIcon: React.FC<LucideProps> = (props) => <LockKeyhole {...props} />;
const BusinessCardIcon: React.FC<LucideProps> = (props) => <Contact2 {...props} />;
const SkillsInterestsIcon: React.FC<LucideProps> = (props) => <Sparkles {...props} />;
const ArticlesIcon: React.FC<LucideProps> = (props) => <Newspaper {...props} />;
const EditorIcon: React.FC<LucideProps> = (props) => <FileCode2 {...props} />;
const AreaChartIcon: React.FC<LucideProps> = (props) => <AreaChart {...props} />;


// Game Icons
const TicTacToeIcon: React.FC<LucideProps> = (props) => <Grid3x3 {...props} />;
const RockPaperScissorsIcon: React.FC<LucideProps> = (props) => <Hand {...props} />;
const ConnectFourIcon: React.FC<LucideProps> = (props) => <LayoutGrid {...props} />;
const GuessTheNumberIcon: React.FC<LucideProps> = (props) => <Hash {...props} />;
const HangmanIcon: React.FC<LucideProps> = (props) => <Puzzle {...props} />;


export const APPS: AppDefinition[] = [
    { id: 'about', title: 'About Me', icon: UserIcon },
    { id: 'projects', title: 'Projects', icon: ProjectsIcon },
    { id: 'articles', title: 'My Articles', icon: ArticlesIcon },
    { id: 'contact', title: 'Contact', icon: ContactIcon },
    { id: 'ai_assistant', title: 'AI Assistant', icon: AssistantIcon },
    { id: 'terminal', title: 'Terminal', icon: TerminalIcon },
    { id: 'settings', title: 'Settings', icon: SettingsIcon },
    { id: 'reader', title: 'Reader', icon: ReaderIcon },
    { id: 'file_explorer', title: 'Explorer', icon: FileExplorerIcon },
    { id: 'hire_me', title: 'Start Here', icon: HireMeIcon },
    { id: 'games_folder', title: 'Games', icon: GamesFolderIcon },
    { id: 'skills_playground', title: 'Skills Playground', icon: SkillsPlaygroundIcon },
    { id: 'work_with_me', title: 'Work With Me', icon: WorkWithMeIcon },
    { id: 'business_card', title: 'Business Card', icon: BusinessCardIcon },
    { id: 'skills_interests', title: 'Skills & Interests', icon: SkillsInterestsIcon },
    { id: 'tic_tac_toe', title: 'Tic-Tac-Toe', icon: TicTacToeIcon },
    { id: 'rock_paper_scissors', title: 'Rock Paper Scissors', icon: RockPaperScissorsIcon },
    { id: 'connect_four', title: 'Connect Four', icon: ConnectFourIcon },
    { id: 'guess_the_number', title: 'Guess the Number', icon: GuessTheNumberIcon },
    { id: 'hangman', title: 'Portfolio Hangman', icon: HangmanIcon },
    { id: 'secret_projects', title: 'Secret Projects', icon: SecretProjectsIcon, hidden: true },
    { id: 'editor', title: 'Code Editor', icon: EditorIcon, hidden: true },
    { id: 'data_wave_dashboard', title: 'Data Wave Metrics', icon: AreaChartIcon, hidden: true },
];

// Define which apps should appear in the dock
export const DOCK_APPS: AppDefinition[] = APPS.filter(app => 
    !['reader', 'file_explorer', 'hire_me', 'tic_tac_toe', 'games_folder', 'rock_paper_scissors', 'connect_four', 'guess_the_number', 'hangman', 'skills_playground', 'work_with_me', 'secret_projects', 'business_card', 'skills_interests', 'about', 'projects', 'articles', 'editor'].includes(app.id)
);


export const INITIAL_WINDOWS_STATE: Record<AppID, WindowState> = APPS.reduce((acc, app) => {
    acc[app.id] = {
        id: app.id,
        title: app.title,
        isOpen: false,
        isMinimized: false,
        zIndex: 0,
    };
    return acc;
}, {} as Record<AppID, WindowState>);