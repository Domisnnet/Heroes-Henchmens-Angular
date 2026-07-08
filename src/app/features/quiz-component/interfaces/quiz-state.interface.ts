import { Question } from '@features/quiz-component/models/question.model';

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  score: number;
  finished: boolean;
}
