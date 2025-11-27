export interface Project {
  id: number;
  title: string;
  description: string;
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
    title: 'UpSkilled',
    description: 'Your personalized AI mentor to bridge the gap between where you are and where you want to be in tech.',
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
    technologies: ['Next.js', 'React', 'FastAPI', 'Finance'],
    imageUrl: '/dogecoin-dashboard.png',
    githubUrl: 'https://github.com/TROJANmocX/Dogecoin-Dashboard',
    featured: true,
    humor: false
  },
  {
    id: 5,
    title: 'VibeCraft-AI',
    description: 'Emotion-powered moodboard generator that turns your feelings into visual art, music, quotes, and journal prompts.',
    technologies: ['React', 'OpenAI', 'Gemini', 'Art'],
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/VibeCraft-AI',
    featured: true,
    humor: false
  },
  {
    id: 6,
    title: 'Invoice Digitization Tool',
    description: 'AI-powered web application that extracts key details from uploaded invoices using OCR and predicts GST rates.',
    technologies: ['OCR', 'AI', 'Web App', 'FinTech'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Invoice-Digitization-and-Tax-Prediction-Tool',
    featured: false,
    humor: false
  },
  {
    id: 7,
    title: 'Wild World',
    description: 'A 3D animated, eco-themed Animal Awareness website featuring a responsive card carousel showcasing various animals.',
    technologies: ['3D', 'Web', 'Animation', 'Eco'],
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/Wild-World-',
    featured: false,
    humor: false
  },
  {
    id: 8,
    title: 'AI Career Advisor',
    description: 'Helps students and professionals discover the best career paths in tech and beyond based on their skills and interests.',
    technologies: ['AI', 'Career', 'Guidance'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/AI-Career-Advisor-',
    featured: false,
    humor: false
  },
  {
    id: 9,
    title: 'AI Hackathon Mentor Bot',
    description: 'A bot designed to mentor participants during AI hackathons.',
    technologies: ['Bot', 'AI', 'Mentorship'],
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/TROJANmocX/AI-hackathon-mentor-bot',
    featured: false,
    humor: false
  }
];