import { Answer } from './answer.model';
import { Question } from './question.model';

export interface SelectedAnswer {
  question: Question;
  answer: Answer;
}