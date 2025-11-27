export interface ChatbotQuestion {
  id: number;
  question: string;
  answer: string;
}

export const chatbotQuestions: ChatbotQuestion[] = [
  {
    id: 1,
    question: 'What is your name?',
    answer: 'My name is Arish. I\'m a computer science student and developer.'
  },
  {
    id: 2,
    question: 'What do you study?',
    answer: 'I study Computer Science with a focus on machine learning and web development.'
  },
  {
    id: 3,
    question: 'What programming languages do you know?',
    answer: 'I\'m proficient in Python, Java, JavaScript, and I\'m currently learning Rust and Go.'
  },
  {
    id: 4,
    question: 'Are you looking for internships?',
    answer: 'Yes! I\'m actively looking for internships in software development, particularly in the areas of web development and machine learning.'
  },
  {
    id: 5,
    question: 'What\'s your favorite project?',
    answer: 'My favorite project is EcoTrack. It combines my passion for environmental sustainability with programming.'
  },
  {
    id: 6,
    question: 'How can I contact you?',
    answer: 'You can reach me through email at arish@example.com or connect with me on LinkedIn or GitHub using the links in the contact section.'
  },
  {
    id: 7,
    question: 'What music do you listen to while coding?',
    answer: 'I mostly listen to Lo-Fi beats or instrumental music when coding. Sometimes I enjoy ambient electronic music too.'
  },
  {
    id: 8,
    question: 'Do you have any hobbies outside of coding?',
    answer: 'Yes! I enjoy hiking, photography, playing the guitar, and I\'m also into chess and competitive gaming.'
  }
];