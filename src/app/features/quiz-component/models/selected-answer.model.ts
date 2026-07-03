import { Answer } from '@quiz/models/answer.model';
import { Question } from '@quiz/models/question.model';

export interface SelectedAnswer {
  question: Question;
  answer: Answer;
}