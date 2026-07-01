import { QuizScore } from '@quiz/models/quiz-score.model';

export const QUIZ_CONSTANTS = {
  INITIAL_QUESTION: 0,
  INITIAL_SCORE: <QuizScore>{ hero: 0, hench: 0 },
  RESULT_MARGIN: 5
} as const;