import { Question } from '@quiz/models/question.model';
import { QuizScore } from '@quiz/models/quiz-score.model';

export interface QuizState {
  currentQuestion: number;
  questions: Question[];
  score: QuizScore;
  finished: boolean;
}