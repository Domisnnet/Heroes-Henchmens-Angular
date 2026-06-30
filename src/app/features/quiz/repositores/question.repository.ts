import { Injectable } from '@angular/core';
import { Question } from '@quiz/models/question.model';
import { QUESTIONS } from '@quiz/data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionRepository {
  getAll(): Question[] { return QUESTIONS; }
}