
export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface StudentData {
  name: string;
  branch: string;
  grade: string;
}

export interface QuizResult {
  score: number;
  correctCount: number;
  totalQuestions: number;
  timeTaken: string;
  answers: {
    question: string;
    selected: string;
    correct: string;
    isCorrect: boolean;
  }[];
}

export type Page = 'info' | 'quiz' | 'report';
