import { QuestionCategory } from '@quiz/enums/question-category.enum';

export interface AnswerHistory {
  answerId: number;
  category: QuestionCategory;
  heroPoints: number;
  henchPoints: number;
  questionId: number;
  selectedAt: Date;
}