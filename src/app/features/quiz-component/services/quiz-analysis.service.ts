import { Injectable } from '@angular/core';
import { AnalysisItem } from '@quiz/models/analysis-item.model';
import { QuestionCategory } from '@quiz/enums/question-category.enum';
import { SelectedAnswer } from '@quiz/models/selected-answer.model';

@Injectable({
  providedIn: 'root',
})
export class QuizAnalysisService {
  build(history: SelectedAnswer[]): AnalysisItem[] {
    const result = new Map<QuestionCategory, number>();
    const maxPoints = 3;
    history.forEach((item) => {
      const category = item.question.category;
      const current = result.get(category) ?? 0;
      result.set(category, current + item.answer.heroPoints);
    });
    return [...result.entries()]
      .map(([category, points]) => ({
        category,
        points,
        percentage: Math.round((points / maxPoints) * 100),
      }))
      .sort((a, b) => b.points - a.points);
  }
}
