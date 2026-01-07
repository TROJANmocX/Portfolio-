export interface Project {
  id: number;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  humor?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project-MIA',
    description: 'MIA – Your moody AI assistant that obeys… sometimes. Talks back, reads your gestures, and might plot your downfall.',
    problem: 'Standard voice assistants are boring, robotic, and lack genuine personality or "human" quirks.',
    solution: 'A chaotic, gesture-controlled AI with a distinct personality that makes interaction fun and unpredictable.',
    technologies: ['AI', 'Assistant', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Project-MIA',
    featured: true,
    humor: true
  },
  {
    id: 2,
    title: 'Digital Guilt Trap',
    description: 'A sensory web experience that physically manifests digital guilt through audio-reactive visuals and aggressive user feedback loops.',
    problem: 'Web interactions are often sterile and emotionless, lacking a visceral connection to the user.',
    solution: 'Created an uncomfortable, high-friction interface that forces users to confront their digital consumption habits.',
    technologies: ['React', 'Framer Motion', 'Web Audio API'],
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Digital-Guilt-Trap',
    demoUrl: 'https://digital-guilt-trap.vercel.app',
    featured: true,
    humor: true
  },
  {
    id: 3,
    title: 'The Checker',
    description: 'A relationship dynamics analyzer that quantifies compatibility using complex state logic and tiered assessment metrics.',
    problem: 'Subjective relationship advice lacks data-driven frameworks for objective analysis.',
    solution: 'Built a logic-heavy assessment engine that processes 50+ variables to output a brutally honest compatibility score.',
    technologies: ['React', 'Complex State', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/the-checker-main',
    demoUrl: 'https://the-checker.vercel.app',
    featured: true,
    humor: false
  },
  {
    id: 4,
    title: 'Quantum Weather App',
    description: 'A high-fidelity dashboard that transforms raw atmospheric data into actionable daily decisions using real-time API aggregation.',
    problem: 'Weather apps present data but fail to answer the core question: "What should I do today?"',
    solution: 'Engineered a decision-first interface that synthesizes AQI, UV, and temp data into concrete lifestyle recommendations.',
    technologies: ['Next.js', 'External APIs', 'Data Viz'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Quantum-Weather-App',
    demoUrl: 'https://quantum-weather-app.vercel.app',
    featured: true,
    humor: false
  },
  {
    id: 5,
    title: 'Useless Website',
    description: 'A definitive test of curiosity that sends users to random internet corners, stripping away all productivity metrics.',
    problem: 'The web has become optimized for "conversion" at the cost of exploration and serendipity.',
    solution: 'Developed a pure anti-productivity tool that celebrates the randomness of the early internet.',
    technologies: ['JavaScript', 'API', 'Chaos'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Useless-Website-',
    demoUrl: 'https://useless-website2.vercel.app',
    featured: true,
    humor: true
  },
  {
    id: 6,
    title: 'MedGuardian',
    description: 'MedGuardian is your slightly paranoid but very clever AI buddy that guesses what disease you might have without convincing you you\'re terminal.',
    problem: 'People often panic-search symptoms online, leading to misinformation and unnecessary anxiety.',
    solution: 'A calm, rational AI diagnostic tool that provides preliminary insights based on medical data, not fear-mongering.',
    technologies: ['Healthcare', 'AI', 'Prediction'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/MedGuardian',
    featured: true,
    humor: false
  },
  {
    id: 7,
    title: 'Dogecoin Dashboard',
    description: 'Predict Dogecoin\'s price with modern web tech and meme magic? Built a dashboard using Next.js, React, TypeScript, Tailwind CSS, and FastAPI.',
    problem: 'Crypto tracking tools are often overly complex and lack the "fun" factor of meme coins.',
    solution: 'A streamlined, meme-friendly dashboard that combines real-time data with community sentiment analysis.',
    technologies: ['Next.js', 'React', 'FastAPI', 'Finance'],
    imageUrl: '/dogecoin-dashboard.png',
    githubUrl: 'https://github.com/TROJANmocX/Dogecoin-Dashboard',
    featured: true,
    humor: false
  },
  {
    id: 8,
    title: 'AlgoViz',
    description: 'An interactive algorithm visualizer that demystifies complex data structures and sorting mechanics through beautiful, real-time animations.',
    problem: 'Abstract algorithms are notoriously difficult to understand through static text and code alone.',
    solution: 'Created a visual playground where users can step through algorithms like sorting and pathfinding in real-time.',
    technologies: ['React', 'Algorithms', 'Visualization'],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/AlgoViz',
    featured: true,
    humor: false
  }
];