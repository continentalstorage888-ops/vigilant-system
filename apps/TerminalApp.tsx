import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data';

const PROMPT = 'guest@tanmay.os:~$';

const TerminalApp: React.FC = () => {
    const [history, setHistory] = useState<string[]>(['Welcome to Portfolio OS Terminal. Type `help` for a list of commands.']);
    const [input, setInput] = useState('');
    const endOfTerminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const executeCommand = (command: string): string[] => {
        const [cmd, ...args] = command.toLowerCase().split(' ');

        switch (cmd) {
            case 'help':
                return [
                    'Available commands:',
                    '  <span class="text-amber-300">whoami</span>    - Display my professional summary.',
                    '  <span class="text-amber-300">skills</span>    - List my technical skills.',
                    '  <span class="text-amber-300">projects</span>  - List my projects.',
                    '  <span class="text-amber-300">contact</span>   - Show my contact information.',
                    '  <span class="text-amber-300">hire_me</span>   - See a special message.',
                    '  <span class="text-amber-300">clear</span>     - Clear the terminal screen.',
                    '  <span class="text-amber-300">help</span>      - Show this help message.',
                ];
            case 'whoami':
                return [`<span class="font-bold">${portfolioData.name}</span> - ${portfolioData.title}`, '', portfolioData.about];
            case 'skills':
                return ['<span class="font-bold">Skills:</span>', ...portfolioData.skills.map(s => `- ${s}`)];
            case 'projects':
                return ['<span class="font-bold">Projects:</span>', ...portfolioData.projects.map(p => `- ${p.title} (${p.category})`)];
            case 'contact':
                return [
                    '<span class="font-bold">Contact Information:</span>',
                    `  Email:    <a href="mailto:${portfolioData.contact.email}" class="text-amber-300 underline">${portfolioData.contact.email}</a>`,
                    `  LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank" class="text-amber-300 underline">linkedin.com/in/tanmay-kalbande</a>`,
                    `  GitHub:   <a href="${portfolioData.contact.github}" target="_blank" class="text-amber-300 underline">github.com/tanmay-kalbande</a>`,
                ];
            case 'hire_me':
                return [
                    '<span class="text-green-400">**********************************************</span>',
                    '<span class="text-green-400">*                                            *</span>',
                    '<span class="text-green-400">*   Thank you for your interest!             *</span>',
                    '<span class="text-green-400">*   I am actively seeking new opportunities  *</span>',
                    '<span class="text-green-400">*   in Data Science and AI. Let\'s connect!    *</span>',
                    '<span class="text-green-400">*                                            *</span>',
                    `<span class="text-green-400">*   <a href="mailto:${portfolioData.contact.email}" class="text-amber-300 underline">Email Me</a> or find me on <a href="${portfolioData.contact.linkedin}" target="_blank" class="text-amber-300 underline">LinkedIn</a>   *</span>`,
                    '<span class="text-green-400">*                                            *</span>',
                    '<span class="text-green-400">**********************************************</span>',
                ];
            case 'clear':
                // This command is handled in the keydown handler.
                // This case is kept to show up in the `help` command.
                return [];
            default:
                return [`<span class="text-red-400">command not found:</span> ${command}`];
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const command = input.trim();
            const commandLower = command.toLowerCase();

            if (commandLower === 'clear') {
                setHistory([]);
                setInput('');
                return;
            }

            const newHistory = [...history, `${PROMPT} ${command}`];

            if (command) {
                const output = executeCommand(command);
                newHistory.push(...output.map(line => line || ' '));
            }

            setHistory(newHistory);
            setInput('');
        }
    };
    
    useEffect(() => {
        endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <div 
            className="h-full bg-stone-900 text-stone-300 font-mono text-sm focus:outline-none flex flex-col" 
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex-grow p-3 overflow-y-auto select-text">
                {history.map((line, index) => (
                    <p key={index} className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: line }} />
                ))}
                <div ref={endOfTerminalRef} />
            </div>
            <div className="flex items-center p-3 pt-0 flex-shrink-0">
                <span className="text-amber-300 flex-shrink-0">{PROMPT}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    className="flex-grow bg-transparent border-none outline-none text-stone-300 ml-2"
                    autoFocus
                    spellCheck="false"
                />
                 <span className="bg-amber-300 w-2 h-4 animate-pulse"></span>
            </div>
        </div>
    );
};

export default TerminalApp;