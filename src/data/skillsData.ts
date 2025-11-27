export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  {
    name: 'Python',
    percentage: 88,
    icon: '🔥',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Java',
    percentage: 72,
    icon: '☕',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'JavaScript',
    percentage: 85,
    icon: '🌟',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    name: 'React',
    percentage: 78,
    icon: '⚛️',
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    name: 'Node.js',
    percentage: 70,
    icon: '🟢',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'SQL',
    percentage: 65,
    icon: '🗃️',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'Machine Learning',
    percentage: 60,
    icon: '🤖',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Git',
    percentage: 75,
    icon: '📊',
    color: 'from-orange-600 to-orange-700'
  }
];