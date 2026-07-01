import { Injectable } from '@angular/core';
import { ResultQuiz } from '@features/quiz-component/models/result.model';
import { ResultType } from '@features/quiz-component/enums/result-type.enum';
import { RESULTS } from '@features/quiz-component/data/results';

@Injectable({
    providedIn: 'root'
})
export class ResultRepository {
    getAll(): ResultQuiz[] { return RESULTS; }
    getByType(type: ResultType): ResultQuiz | undefined { return RESULTS.find(result => result.type === type); }
}