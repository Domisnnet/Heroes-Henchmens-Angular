import { Injectable } from '@angular/core';
import { QUESTIONS } from '@features/quiz-component/data/questions';
import { Question } from '@features/quiz-component/models/question.model';
@Injectable({
    providedIn: 'root'
})
export class QuestionRepository {
    getAll(): Question[] { return QUESTIONS; }
    getFirst(): Question { return QUESTIONS[0]; }
    getByIndex(index: number): Question | undefined { return QUESTIONS[index]; }
    getById(id: number): Question | undefined { return QUESTIONS.find(question => question.id === id); }
    getTotal(): number { return QUESTIONS.length; }
}