import { QuizScore } from '@quiz/models/quiz-score.model';

export const QUIZ_CONSTANTS = {
  INITIAL_QUESTION: 0,
  INITIAL_SCORE: <QuizScore>{ hero: 0, hench: 0 },
  RESULT_THRESHOLDS: {
    HERO: 17,
    PROTECTOR: 8,
    VIGILANTE_MIN: -7,
    VIGILANTE_MAX: 7,
    MERCENARY: -17,
  },
} as const;
