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
    id: 13,
    title: 'Quantum Weather App',
    description: 'A high-fidelity weather and air-quality dashboard that turns real-time data into clear daily decisions. Built with Next.js, AQI intelligence, and a decision-first UI.',
    technologies: ['Next.js', 'Weather API', 'Dashboard'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Quantum-Weather-App',
    demoUrl: 'https://quantum-weather-app.vercel.app/',
    featured: true,
    humor: false
  },
  {
    id: 12,
    title: 'Useless Website',
    description: 'A useless website with one job: judge your curiosity and send you somewhere random on the internet. No goals, no productivity, no tracking.',
    technologies: ['web', 'Randomizer', 'Fun'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Useless-Website-',
    demoUrl: 'https://useless-website2.vercel.app/',
    featured: false,
    humor: true
  },
  {
    id: 11,
    title: 'ExplainThis.live',
    description: 'ExplainThis.live turns confusing text into explanations that don’t make you re-read the same sentence five times.',
    technologies: ['AI', 'Next.js', 'NLP'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/ExplainThis.live',
    demoUrl: 'https://explainthis.live',
    featured: true,
    humor: true
  },
  {
    id: 10,
    title: 'Music-as-Memory',
    description: 'Music as Memory is where songs come with stories. Not playlists, not algorithms, just moments. The track you played during exams, heartbreaks, late night walks.',
    technologies: ['React', 'Spotify API', 'Storytelling'],
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Music-as-Memory',
    featured: true,
    humor: false
  },
  {
    id: 1,
    title: 'UpSkilled',
    description: 'Your personalized AI mentor to bridge the gap between where you are and where you want to be in tech.',
    problem: 'Self-taught developers often feel lost in a sea of tutorials without a clear, personalized roadmap.',
    solution: 'An AI-driven platform that generates custom learning paths, tracks progress, and provides real-time mentorship.',
    technologies: ['AI', 'Education', 'Mentorship'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/UpSkilled',
    featured: true,
    humor: false
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: 'Dogecoin-Dashboard',
    description: 'Predict Dogecoin\'s price with modern web tech and meme magic? Built a dashboard using Next.js, React, TypeScript, Tailwind CSS, and FastAPI.',
    problem: 'Crypto tracking tools are often overly complex and lack the "fun" factor of meme coins.',
    solution: 'A streamlined, meme-friendly dashboard that combines real-time data with community sentiment analysis.',
    technologies: ['Next.js', 'React', 'FastAPI', 'Finance'],
    imageUrl: '/dogecoin-dashboard.png',
    githubUrl: 'https://github.com/TROJANmocX/Dogecoin-Dashboard',
    featured: true,
    humor: false
  },
];