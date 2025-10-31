import { Project, Experience, Certification, Article } from './types';

export const portfolioData = {
  name: 'Tanmay Kalbande',
  title: 'Data Scientist & AI Specialist',
  about: "Data science enthusiast skilled in statistical analysis, machine learning, and data visualization. Passionate about uncovering insights from complex datasets to drive informed decision-making. Focused on contributing to impactful projects and staying updated with the latest advancements in data science.",
  readme: `
# Welcome to My Portfolio OS!

This is an interactive desktop experience built to showcase my skills and projects.

## Features:
- **Draggable Windows:** Grab the title bar to move windows around.
- **Snapping Desktop Icons:** Drag and drop desktop icons; they'll snap to the grid.
- **App Dock:** Launch my main applications from the dock.
- **AI Assistant:** Ask the AI anything about my portfolio.
- **Terminal:** Use command-line instructions to navigate my profile.
- **Customization:** Change the theme and wallpaper in the Settings app.

Feel free to explore and get in touch!
`,
  stats: {
    experience: "1.10",
    projects: 11,
    certifications: 4,
  },
  technicalSummary: [
    "Hands-on in end-to-end development of predictive modeling solutions.",
    "Proficient in Python (NumPy, Pandas, Scikit-learn, Jupyter).",
    "SQL: SQL Server, Spark.",
    "Analytics: Machine learning (supervised/unsupervised), deep learning, neural networks, NLP.",
    "Data Visualization: Matplotlib, Seaborn, Tableau, PowerBI.",
    "Big Data: Hadoop, Spark.",
    "Ethical AI: Understanding of ethical considerations in AI development and deployment."
  ],
  tools: {
    languages: ["Python", "SQL", "R", "C"],
    databases: ["SQL Server", "Spark"],
    ides: ["PyCharm", "VS Code", "Atom", "Jupyter Notebooks"],
    bi: ["Excel", "Tableau", "PowerBI"]
  },
  skills: ["Python", "R", "SQL", "Machine Learning", "Statistical Analysis", "Data Visualization"],
  interests: ["Artificial Intelligence", "Big Data", "Natural Language Processing", "Ethical AI", "Deep Learning", "TinyML"],
  contact: {
    email: "kalbandetanmay@gmail.com",
    phone: "737-838-1494",
    linkedin: "https://www.linkedin.com/in/tanmay-kalbande",
    github: "https://github.com/tanmay-kalbande",
    medium: "https://medium.com/@tanmaykalbande",
    whatsapp: "https://wa.me/7378381494"
  },
  experience: [
    {
      role: "Analyst",
      company: "Capgemini",
      duration: "March 2024 - Present",
      duties: [
        "Utilized advanced analytical techniques for actionable insights.",
        "Collaborated with cross-functional teams to translate data findings into business strategies.",
        "Designed and implemented interactive dashboards for visualizing key metrics."
      ]
    },
    {
      role: "Data Analyst Trainee",
      company: "Rubixe",
      duration: "Nov 2022 - Dec 2023",
      duties: [
        "Worked with teams to gather, clean, and organize data.",
        "Explored data patterns and trends to shape practical strategies.",
        "Created clear reports and interactive visualizations."
      ]
    }
  ] as Experience[],
  projects: [
    {
      category: "AI Project",
      title: "Pustakam - The AI Book Writer",
      description: "An AI-powered application that generates complete, structured books on any topic, maintaining context across chapters. Supports multiple AI models and operates locally for privacy.",
      links: {
        live: "https://pustakam-ai.vercel.app/"
      },
      icon: "📚"
    },
    {
      category: "AI Project",
      title: "Ai-Tutor - Your Personal AI Tutor",
      description: "A personalized learning environment built around Google's Gemma. Features different AI personas, context-aware quizzes, and interactive learning-journey flowcharts.",
      links: {
        live: "https://ai-tutor-test-it-out-here.vercel.app/"
      },
      icon: "🎓"
    },
    {
      category: "Work Project",
      title: "Web Traffic Analysis for Conversion Rate Improvement",
      description: "Analyzed website traffic data using Python and Google Analytics for Zoompare.",
      contributions: ["Performed web traffic analysis", "Implemented A/B testing", "Aligned findings with engineering teams"],
      links: {},
      icon: "📈"
    },
    {
      category: "Work Project",
      title: "Customer Segmentation using Clustering Analysis",
      description: "Applied K-means clustering to customer data and visualized resulting segments for Rubixe.",
      contributions: ["Implemented K-means clustering algorithm", "Evaluated and visualized distinct customer segments"],
      links: {},
      icon: "👥"
    },
    {
      category: "Work Project",
      title: "Lead Quality Prediction",
      description: "Explored data and utilized multiple models to predict lead quality for sales prioritization for Rubixe.",
      links: {},
      icon: "🎯"
    },
    {
      category: "Work Project",
      title: "Movie Recommendation System",
      description: "Developed a collaborative filtering-based recommendation system for personalized movie suggestions for Rubixe.",
      links: {},
      icon: "🎬"
    },
    {
      category: "Work Project",
      title: "Sentiment Analysis of Customer Reviews",
      description: "Analyzed sentiment in customer reviews using NLP techniques for Sentix.",
      links: {},
      icon: "💬"
    },
    {
      category: "Work Project",
      title: "Predictive Maintenance System",
      description: "Developed a predictive maintenance system to anticipate equipment failures for TechCorp.",
      links: {},
      icon: "🛠️"
    },
    {
      category: "Fun Project",
      title: "Expense Tracker",
      description: "Web application for tracking personal expenses with data visualization and CSV import/export functionality.",
      links: {
        live: "https://expense-tail.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Expense-Tracker"
      },
      icon: "💸"
    },
    {
      category: "Fun Project",
      title: "Table Extractor",
      description: "A Flask web app for extracting tables from web pages, using BeautifulSoup and DataTables.",
      links: {
        live: "https://table-extractor.onrender.com/",
        github: "https://github.com/tanmay-kalbande/table-extractor-app"
      },
      icon: "📋"
    },
    {
      category: "Fun Project",
      title: "Goal Tracker",
      description: "Helps you achieve your goals one day at a time!",
      links: {
        live: "https://tanmay-kalbande.github.io/Goal-Tracker/",
        github: "https://github.com/tanmay-kalbande/Goal-Tracker"
      },
      icon: "🏁"
    },
    {
      category: "Fun Project",
      title: "The Scam Master Podcast",
      description: "Exposes fraudsters and provides guidance to outwit them.",
      links: {
        website: "https://the-scam-master.vercel.app/",
        instagram: "https://www.instagram.com/the_scam_master/",
        github: "https://github.com/the-scam-master/podcast_webpage"
      },
      icon: "🎙️"
    },
    {
      category: "Fun Project",
      title: "Incident Tracker",
      description: "Tool to record, track, and manage incidents efficiently.",
      links: {
        live: "https://tanmay-kalbande.github.io/Incident-Tracker/",
        github: "https://github.com/tanmay-kalbande/Incident-Tracker"
      },
      icon: "🚨"
    },
    {
      category: "AI Project",
      title: "Bias & Fairness Checker [AI]",
      description: "AI tool to detect potential biases in text and suggest inclusive language improvements.",
      links: {
        live: "https://bias-checker.onrender.com/",
        github: "https://github.com/tanmay-kalbande/bias-fairness-checker"
      },
      icon: "🤖"
    },
    {
      category: "AI Project",
      title: "AI Data Structurer [AI]",
      description: "AI-powered web app that transforms unstructured data into organized formats.",
      links: {
        github: "https://github.com/tanmay-kalbande/ai-data-structurer"
      },
      icon: "✨"
    },
    {
      category: "Fun Project",
      title: "Enhanced macOS Notes",
      description: "Web-based note-taking app mimicking macOS aesthetics, with dark mode and rich text formatting.",
      links: {
        live: "https://enhanced-mac-os-notes.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Enhanced-macOS-Notes"
      },
      icon: "📝"
    },
    {
      category: "Fun Project",
      title: "Life Loops - Game Edition",
      description: "Gamified habit-tracking web app with a retro-styled point system.",
      links: {
        live: "https://life-loops-game-edition.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Life-Loops---Game-Edition"
      },
      icon: "🎮"
    },
    {
      category: "Fun Project",
      title: "Jawala Vyapar",
      description: "Online phone directory for local businesses with category filtering and multi-language support.",
      links: {},
      icon: "📒"
    },
    {
      category: "Fun Project",
      title: "Mindfulness App",
      description: "Simple mindfulness web app with yoga and meditation guides.",
      links: {
        live: "https://breathewell.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Mindfulness-App"
      },
      icon: "🧘"
    },
    {
      category: "AI Project",
      title: "Report Generator [AI]",
      description: "AI-powered tool to capture data and generate insights for business decisions using Python.",
      links: {},
      icon: "📄"
    },
    {
      category: "BI Dashboard",
      title: "Power BI: Data Wave Metrics in India",
      description: "Explores wireless data usage and ARPU metrics, with insights into quarterly revenue and data consumption trends.",
      links: {},
      icon: "📊",
      appId: 'data_wave_dashboard'
    }
  ] as Project[],
  certifications: [
    { name: "AWS Cloud Technical Essentials", issuer: "AWS", date: "Dec 2024" },
    { name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "Apr 2024" },
    { name: "Technical Support Fundamentals", issuer: "Google", date: "Dec 2023" },
    { name: "Certified Data Scientist", issuer: "IABAC", date: "Sep 2023" },
    { name: "Data Science Foundation", issuer: "IABAC", date: "Aug 2023" },
    { name: "Certified Data Scientist Certification", issuer: "DataMites™", date: "Apr 2023" },
    { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "London App Brewery", date: "Ongoing" },
    { name: "The Data Science Course Complete Data Science Bootcamp", issuer: "365 Data Science", date: "Ongoing" }
  ] as Certification[],
};

export const secretProjects = [
    {
      icon: "🌌",
      title: "Project Nebula",
      description: "A generative art project using GANs to create unique cosmic visuals based on user-inputted text prompts. Explores the intersection of AI creativity and astronomy."
    },
    {
      icon: "🎵",
      title: "AI Music Composer",
      description: "A recurrent neural network (RNN) trained on classical music datasets to compose short, original MIDI melodies. A fun exploration into algorithmic composition."
    },
    {
      icon: "📈",
      title: "Real-time Stock Anomaly Detector",
      description: "A conceptual project to use unsupervised learning models (like Isolation Forest) to detect unusual trading patterns in real-time stock market data streams."
    },
    {
      icon: "🤖",
      title: "TinyML Keyword Spotting",
      description: "An experiment in deploying a lightweight neural network on a microcontroller (like an Arduino Nano) to recognize custom keywords (e.g., 'Hey, Portfolio!')."
    }
];


export const articles: Article[] = [
    {
        id: 'pustakam-ai-book-writer',
        title: "I Built an AI (Pustakam) That Writes Entire Books",
        subtitle: "by Tanmay Kalbande",
        date: "September 11, 2025",
        project: "Pustakam",
        snippet: "I'll be honest Pustakam exists because I'm terrible at following through on learning projects. Picture this: I'd get excited about learning... I'd have three browser tabs still open, half-watched videos, and exactly zero understanding. Sound familiar?",
        content: `![Pustakam Analytics Dashboard](https://cdn.jsdelivr.net/gh/continentalstorage888-ops/didactic-meme@main/Screenshot%202025-10-30%20at%2021-57-41%20Pustakam%20AI%20Book%20Generation%20Engine.png)

I'll be honest Pustakam exists because I'm terrible at following through on learning projects.

Picture this: I'd get excited about learning, say, GraphQL. I'd bookmark fifteen Medium articles, queue up six YouTube tutorials, and download two PDFs. Three weeks later, I'd have three browser tabs still open, half-watched videos, and exactly zero understanding of GraphQL. Sound familiar?

The problem wasn't the resources it was that they were scattered, inconsistent, and written for different audiences. I kept wishing someone would just write the perfect book for exactly what I needed to learn.

Then I had a stupid obvious realization: what if I could make the AI write that book?

Not just a ChatGPT dump, but an actual book. With chapters that build on each other. With a table of contents that makes sense. With consistency from start to finish.

Six weeks of wrestling with APIs and state management later, Pustakam was born.
### The "Simple" Idea That Wasn't Simple At All

My initial plan was embarrassingly naive: "Just ask GPT to write a book in one go!"

Yeah, that didn't work. At all.

First attempt: Asked for a 10 chapter book on React hooks. Got back a rambling mess that repeated itself three times and had chapters that contradicted each other. The "Advanced Hooks" chapter somehow knew less than the "Beginner Hooks" chapter.

Second attempt: Tried breaking it into steps. Better, but the chapters felt like they were written by different people who'd never met.

That's when I realized the real challenge: generating a full book either overwhelms the AI with too much at once, or if you break it up, you lose the thread between chapters. I needed a way to maintain context and consistency across multiple requests.
### The Four-Step Process (That Took Four Rewrites)

After multiple failed attempts, I landed on a process that actually works:

**Step 1: Define What You Actually Want** Not just "teach me Python" but "teach me Python for data analysis, assuming I know basic programming but nothing about data science."

**Step 2: The AI Proposes a Roadmap** This was the breakthrough. Instead of diving straight into content, the AI first creates a detailed outline. You can see the whole structure before committing to hours of generation.

**Step 3: Sequential Generation with Memory** Here's the trick: when generating chapter 5, the AI gets a summary of chapters 1-4. It's like giving each writer the notes from previous chapters.

**Step 4: The Polish** The AI writes an introduction, conclusion, and glossary based on the complete book. Everything gets stitched together into proper Markdown.
### Technical Stuff (The Fun Problems)
#### The Model Switching Thing

I got tired of being locked into OpenAI's pricing, so I built the app to work with multiple AI providers. You can plug in your own API keys for:

- Google's Gemini models (surprisingly good and cheaper)
- Mistral (fast and decent for simpler books)
- ZhipuAI (if you want to try something different)

This wasn't just about flexibility different models have different strengths. Gemini is great at technical content, Mistral excels at creative writing, and sometimes you just want to see what the underdog can do.
#### The Privacy Decision

I made everything local-first because I'm paranoid about data privacy, and frankly, I didn't want to deal with user accounts, databases, and server costs.

Your books, your API keys, your data all stored in your browser. Never touches my servers because I don't have servers. This also means the app works offline once loaded, which is a nice bonus.
#### The State Management Nightmare

Managing the UI while multiple AI requests run sequentially was... educational.

Imagine this: User clicks "Generate Book." The app needs to:

1.  Generate roadmap (30 seconds)
2.  Generate 8 chapters sequentially (5 minutes)
3.  Generate intro, conclusion, glossary (1 minute)
4.  Assemble everything (instant)

All while showing progress, handling errors, and staying responsive. TypeScript saved my sanity here I can't imagine managing this complexity in plain JavaScript.
### What I Learned (The Hard Way)

- **Prompt engineering is 80% of the work.** The difference between a mediocre book and a great one isn't the model it's how you ask the model to write.
- **Context is everything.** The breakthrough wasn't using better AI; it was giving the AI better context about what came before.
- **Users want to know what's coming.** The roadmap preview step seems unnecessary until you realize people need to see the structure before spending the next few minutes generating content.

### The Stuff I'm Actually Proud Of

**The Analytics Dashboard:** After generating a book, you get metrics like reading time, complexity score, and topic breakdown. It's probably overengineered, but it makes the books feel more real.

**The Reading Experience:** I spent way too much time perfecting the typography and spacing. Books deserve to look like books, even digital ones.

**The Export:** Everything exports as clean Markdown. No proprietary formats, no vendor lock-in. Your book, your format.

### Try It (But Manage Your Expectations)

Pustakam won't replace real books written by experts. But if you need to quickly get up to speed on something specific, or you learn better from structured content than scattered tutorials, it might be useful.

Fair warning: generating a full book takes 5-10 minutes and costs $0.10-$0.20 in API fees depending on length and model. Not instant, not free, but probably cheaper than buying a book you'll only half-read.

Try it here: [https://pustakam-ai.vercel.app/](https://pustakam-ai.vercel.app/)

I'd love to know what breaks when you use it. And more importantly what kind of book did you make?`
    },
    {
        id: 'ai-tutor-gemma',
        title: "Why I Built My Own AI Tutor Instead of Using ChatGPT",
        subtitle: "by Tanmay Kalbande",
        date: "October 19, 2025",
        project: "Ai-Tutor",
        snippet: "I built Ai-Tutor because I was already obsessed with Gemma and wanted an excuse to use it more. Here's what my study sessions looked like: one AI chat open for explanations. Another tab for generating practice questions. My notes app buried somewhere.",
        content: `![Ai-Tutor Welcome Screen](https://cdn.jsdelivr.net/gh/continentalstorage888-ops/didactic-meme@main/ai-tutot-welcome-screen.png)

I built Ai-Tutor because I was already obsessed with Gemma and wanted an excuse to use it more.

Here's what my study sessions looked like: one AI chat open for explanations. Another tab for generating practice questions. My notes app buried somewhere. And about twelve other tabs I'd opened three days ago and never closed.

By the end, I'd have useful information scattered everywhere and zero idea where I saved what.

The tools were fine. The workflow was chaos.

I kept thinking - why isn't there just one place where I can chat with AI, generate quizzes, take notes, and not feel like I'm managing a tech stack just to learn something?

So I built it. Took about four weeks of nights and weekends and more debugging than I care to admit. Clean interface, no clutter. Pick your persona and start learning.
### Why I Built This Around Gemma

Let me talk about Gemma for a second.

I was already using Gemma for months before building Ai-Tutor. If you've used it for learning, you know what I mean. The responses just make sense. Clear explanations without being condescending. Detailed without being bloated. For tutoring? It's genuinely the best.

Every time I tried other models, I'd come back to Gemma. So when I decided to build this app, Gemma wasn't a choice I made during development it was the reason I started building.

The app is designed around Gemma's strengths. I added Mistral and ZhipuAI later for variety (different models are good at different things), but Gemma's the foundation. It's the one I actually use daily.

If you haven't tried Gemma for learning something new, you should. It just gets it.
### Why Different AI Personas Actually Matter

This was the first thing I got wrong.

Initial version: one AI voice. Standard helpful assistant tone. It worked, but it felt generic. Like every other chat interface.

Then I realized something obvious I don't always want to learn the same way.

Sometimes I'm exploring a new topic and want someone patient who explains things clearly. Other times I'm cramming for something and need direct, no-nonsense answers. Sometimes I want creative explanations that make concepts click.

Same AI. Different vibe. Completely different learning experience.

So I added four personas:

- **Friendly Mentor** - patient, encouraging, takes time to explain
- **Exam Coach** - direct, focused, no fluff
- **Creative Guide** - uses analogies and stories to make things stick
- **Standard Tutor** - balanced, structured, classic teaching mode

The difference isn't subtle. Ask the Friendly Mentor about recursion and you'll get a warm explanation with examples building gradually. Ask the Exam Coach and you'll get the definition, key points, and practice problems. Same topic, totally different approach.

Turns out, matching the AI's teaching style to your learning mood makes a huge difference.

### The Quiz Feature That Actually Knows Your Conversation

Most AI quiz generators are garbage.

You ask for a quiz, you get generic questions that could apply to anything. "What is X?" "Define Y." Boring. Useless. Not actually testing if you understood anything.

I wanted quizzes that felt like they were made for you, based on what you'd just learned in your conversation.

So here's how it works in Ai-Tutor:

You're chatting with the AI about, say, React hooks. You've been going back and forth, asking questions, getting explanations. You feel like you get it.

Hit the quiz button.

The AI looks at your entire conversation history what you asked about, what concepts came up, where you seemed confused and generates questions specifically about that.

Not generic React hooks questions. Questions about the specific aspects you were learning. If you spent time on useEffect dependencies, you're getting questions about useEffect dependencies.

Multiple choice format. Clean interface. You answer, get instant feedback, and the AI explains why the answer is what it is.

The difference between this and random quiz generators? Context. The quiz knows what you've been learning because it was part of the conversation.

Does it work perfectly every time? No. Sometimes the AI generates a weird question. But most of the time? It's genuinely helpful for testing if you actually retained what you just learned.
### The Flowchart Feature That Almost Broke Me

Okay, this one. This feature took longer than everything else combined.

The idea was: what if you could visualize your entire learning conversation as a flowchart? See how concepts connect, what questions led where, how ideas build on each other.

Not a static diagram showing how the app works. An actual AI-generated learning map based on YOUR conversation.

**The First Attempt (That Immediately Failed)**

I built a basic flowchart generator. Asked the AI to analyze the conversation and output nodes and connections.

It worked. Kind of.

Problem? The flowcharts were messy. Too many nodes. Connections everywhere. No clear hierarchy. Users couldn't tell what they were looking at.

**The Second Attempt (That Was Worse)**

Okay, let me be smarter about the prompt. Tell the AI to identify only key concepts. Limit connections. Create clear hierarchy.

Better, but still not right.

New problem: the visualization itself sucked. Static SVG that you couldn't interact with. No zoom. No pan. For complex conversations, it was unreadable.

**The Third Attempt (That Actually Worked)**

I stepped back and asked: what do learners actually need from this?

Not every detail. Not every tangent. Just the main path of learning what question started it, what concepts emerged, how they connect, where the conversation went.

So I rebuilt it completely:

The AI now analyzes your conversation and creates a structured learning map. Main questions. Key concepts. Relationships between ideas. Examples that came up. Theories explored.

And the visualization is a proper interactive canvas. You can zoom in and out. Pan around. Click on nodes. It's not just a pretty diagram it's a map of your actual learning journey.

Look at a conversation about "What Came Before the Big Bang?" The flowchart shows:

- The initial question
- The cause & effect problem that came up
- Analogies used (like how a cake needs ingredients)
- Speculative theories explored
- Specific examples like Cyclic Universe Model
- How everything connects

It's not perfect. Complex conversations can still get messy. But most of the time? It's genuinely cool seeing your learning session visualized as a knowledge map.

The breakthrough was realizing the flowchart isn't documentation. It's reflection. It helps you see the structure of what you just learned.

Took three complete rewrites to figure that out.
### Model Flexibility (Because One AI Isn't Always Enough)

Different models are good at different things. Gemma's my default and favorite, but sometimes you want options.

So Ai-Tutor supports multiple models. Gemma, Mistral, ZhipuAI plug in your API keys, switch whenever you want.

Your conversation history stays intact when you switch. It's not starting from scratch.

The real benefit? If one model gives you a weird answer or doesn't quite get what you're asking, try another. Having options matters.
### The Technical Stuff That Made This Harder Than Expected

**Managing State During Conversations**

You're chatting. You generate a quiz. You save a note. You switch personas. You create a flowchart. All while AI responses are streaming in.

Keeping the UI responsive and not breaking when users do things in weird orders? That took more work than the actual features.

**Making Streaming Feel Smooth**

AI responses stream in word by word. Looks cool, but implementing it properly especially when you're handling different response types (regular chat, quiz questions, notes, flowchart data) was tricky.

The breakthrough was treating everything as messages in a stream, just formatted differently. Chat messages look like chat. Quizzes look like quizzes. Flowcharts render on canvas. Same streaming system underneath.

**The Flowchart Canvas**

Building an interactive canvas that handles zoom, pan, and node interactions without lagging? Harder than expected.

First version couldn't handle more than 5 nodes without performance issues. Had to completely rewrite the rendering logic to make it smooth.

**Local Storage That Actually Works**

I use browser localStorage for persistence. It's simple, synchronous, and handles the data volume just fine for most users.

You can have dozens of conversations saved, hundreds of notes, and it all loads instantly because it's already on your device. For very heavy users, there's quota exceeded handling built in to prevent issues.

Plus, everything stays private. Your data never leaves your browser
### What Actually Worked (And What Didn't)

**Worked:** Building around Gemma. That model really is perfect for learning tasks.

**Worked:** The persona system. People actually use it and switch between them. Not a gimmick.

**Worked:** Quiz context. Making questions based on your actual conversation instead of generic topics makes a real difference.

**Worked:** Interactive flowchart canvas. Seeing your learning journey as a visual map is genuinely useful.

**Didn't work initially:** Flowchart generation. First two versions were unusable. Had to completely rethink what the feature should show.

**Didn't work initially:** Quiz question quality. Had to add way more context about the conversation to make questions relevant.

**Still not sure about:** Whether people actually want to switch AI models mid-conversation or if they just pick one and stick with it.
### Things I'm Actually Happy With

The conversation management is clean. You can have multiple topics going, switch between them, never lose context.

The markdown rendering looks good. Code blocks are properly highlighted. Math equations render correctly.

The quiz interface feels native. Multiple choice works smoothly. Explanations appear after you answer.

The flowchart visualization actually helps you understand the structure of what you learned, not just looks pretty.
### Try It (With Your Own API Keys)

Fair warning: you need your own API keys. I'm not paying for everyone's AI usage side project budgets don't work that way.

But once you plug in your keys for Gemma (or Mistral/ZhipuAI), everything works. No subscriptions, no usage limits beyond what your API provider sets.

It's also a PWA, so you can install it like an app if you want. Not a huge deal, but it's there.

It's live at: [https://ai-tutor-test-it-out-here.vercel.app/](https://ai-tutor-test-it-out-here.vercel.app/)

I'd genuinely love to know what you think:

- Does the persona thing actually help?
- Do you use the quizzes or ignore them?
- Is the flowchart visualization useful or just eye candy?
- If you're already a Gemma fan, does this click for you?

Also debating whether to open-source this or keep iterating privately. Thoughts?

Built with React, TypeScript, Vite, and TailwindCSS. Probably overengineered in places, but that's half the fun.

#AI #WebDevelopment #Learning #PWA #React #Gemma #EdTech #SideProjects`
    }
];