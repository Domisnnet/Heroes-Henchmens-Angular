import { QuestionCategory } from '@quiz/enums/question-category.enum';

export interface AnalysisItem {
  category: QuestionCategory;
  points: number;
  percentage: number;
}