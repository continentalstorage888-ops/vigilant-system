import { VFSFile, VFSDirectory, Project, Article } from './types';
import { portfolioData, articles } from './data';

const createProjectReadme = (project: Project): string => `
# ${project.title}
*Category: ${project.category}*

${project.description}

${project.contributions ? `### Contributions\n${project.contributions.map(c => `- ${c}`).join('\n')}` : ''}
${project.tasks ? `### Tasks\n${project.tasks.map(t => `- ${t}`).join('\n')}` : ''}
${project.features ? `### Features\n${project.features.map(f => `- ${f}`).join('\n')}` : ''}

### Links
${Object.entries(project.links).map(([key, value]) => value ? `- [${key.charAt(0).toUpperCase() + key.slice(1)}](${value})` : '').filter(Boolean).join('\n')}
`;

const createArticleFileContent = (article: Article): string => `
# ${article.title}
*${article.subtitle} - ${article.date}*

---

${article.content}
`;

const buildVFS = (): VFSDirectory => {
    const root: VFSDirectory = {
        type: 'directory',
        name: '~',
        children: {},
    };

    // FIX: Explicitly cast directory object literals to VFSDirectory to prevent excess property errors.
    root.children['Desktop'] = { type: 'directory', name: 'Desktop', children: {} } as VFSDirectory;
    root.children['Documents'] = { type: 'directory', name: 'Documents', children: {} } as VFSDirectory;
    root.children['Projects'] = { type: 'directory', name: 'Projects', children: {} } as VFSDirectory;
    root.children['Articles'] = { type: 'directory', name: 'Articles', children: {} } as VFSDirectory;

    // FIX: Explicitly cast file object literal to VFSFile to prevent excess property errors.
    (root.children['Desktop'] as VFSDirectory).children['README.txt'] = {
        type: 'file',
        name: 'README.txt',
        content: portfolioData.readme,
    } as VFSFile;
    // FIX: Explicitly cast file object literal to VFSFile to prevent excess property errors.
    (root.children['Desktop'] as VFSDirectory).children['resume.pdf'] = {
        type: 'file',
        name: 'resume.pdf',
        content: '/tanmay-resume.pdf',
        isLink: true,
    } as VFSFile;

    const projectsDir = root.children['Projects'] as VFSDirectory;
    portfolioData.projects.forEach(project => {
        const projectDirName = project.title.replace(/[^a-zA-Z0-9]/g, '_');
        // FIX: Explicitly cast nested object literals to their respective VFS types to prevent excess property errors.
        projectsDir.children[projectDirName] = {
            type: 'directory',
            name: project.title,
            children: {
                'README.md': {
                    type: 'file',
                    name: 'README.md',
                    content: createProjectReadme(project)
                } as VFSFile
            }
        } as VFSDirectory;
    });

    const articlesDir = root.children['Articles'] as VFSDirectory;
    articles.forEach(article => {
        const articleFileName = `${article.id}.md`;
        // FIX: Explicitly cast file object literal to VFSFile to prevent excess property errors.
        articlesDir.children[articleFileName] = {
            type: 'file',
            name: `${article.title}.md`,
            content: createArticleFileContent(article),
        } as VFSFile;
    });
    
    // FIX: Explicitly cast file object literal to VFSFile to prevent excess property errors.
     (root.children['Documents'] as VFSDirectory).children['resume.pdf'] = {
        type: 'file',
        name: 'resume.pdf',
        content: '/tanmay-resume.pdf',
        isLink: true,
    } as VFSFile;

    return root;
};

export const VFS = buildVFS();