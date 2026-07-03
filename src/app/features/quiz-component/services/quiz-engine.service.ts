import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Answer } from '@quiz/models/answer.model';
import { Question } from '@quiz/models/question.model';
import { ResultQuiz } from '@quiz/models/result.model';
import { QUIZ_CONSTANTS } from '@quiz/constants/quiz.constants';
import { QuestionRepository } from '@quiz/repository/question.repository';
import { ResultRepository } from '@quiz/repository/result.repository';
import { QuizScoreRule } from '@quiz/rules/quiz-score.rule';
@Injectable({
  providedIn: 'root'
})
export class QuizEngineService {
  private currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
  private readonly currentQuestionSubject: BehaviorSubject<Question>;
  private readonly heroScoreSubject = new BehaviorSubject<number>(
    QUIZ_CONSTANTS.INITIAL_SCORE.hero
  );
  private readonly henchScoreSubject = new BehaviorSubject<number>(
    QUIZ_CONSTANTS.INITIAL_SCORE.hench
  );
  private readonly finishedSubject = new BehaviorSubject<boolean>(false);
  readonly currentQuestion$
  readonly heroScore$ = this.heroScoreSubject.asObservable();
  readonly henchScore$ = this.henchScoreSubject.asObservable();
  readonly finished$ = this.finishedSubject.asObservable();
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly resultRepository: ResultRepository
  ) {
    this.currentQuestionSubject = new BehaviorSubject<Question>(
      this.questionRepository.getFirst()
    );
    this.currentQuestion$ = this.currentQuestionSubject.asObservable();
  }
  answer(answer: Answer): void {
    if (this.finished) { return; }
    this.addPoints(answer);
    this.nextQuestion();
  }
  reset(): void {
    this.currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
    this.heroScoreSubject.next(QUIZ_CONSTANTS.INITIAL_SCORE.hero);
    this.henchScoreSubject.next(QUIZ_CONSTANTS.INITIAL_SCORE.hench);
    this.finishedSubject.next(false);
    this.loadCurrentQuestion();
  }
  getResult(): ResultQuiz {
    const type = QuizScoreRule.resolve(this.heroScore, this.henchScore);
    return this.resultRepository.getByType(type)!;
  }
  get currentQuestion(): Question { return this.currentQuestionSubject.value; }
  get heroScore(): number { return this.heroScoreSubject.value; }
  get henchScore(): number { return this.henchScoreSubject.value; }
  get finished(): boolean { return this.finishedSubject.value; }
  private addPoints(answer: Answer): void {
    this.heroScoreSubject.next(this.heroScore + answer.heroPoints);
    this.henchScoreSubject.next(this.henchScore + answer.henchPoints);
  }
  private nextQuestion(): void { 
    this.currentIndex++;
    if (this.currentIndex >= this.questionRepository.getTotal()) {
      this.finishedSubject.next(true); return; 
    } 
    this.loadCurrentQuestion();
  }
  private loadCurrentQuestion(): void {
    const question = this.questionRepository.getByIndex(this.currentIndex);
    if (!question) { return; }
    this.currentQuestionSubject.next(question); 
  }
}