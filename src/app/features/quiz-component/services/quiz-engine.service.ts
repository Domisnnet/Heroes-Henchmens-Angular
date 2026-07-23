import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer } from '@quiz/models/answer.model';
import { Question } from '@quiz/models/question.model';
import { QuizScore } from '@quiz/models/quiz-score.model';
import { ResultQuiz } from '@quiz/models/result.model';
import { SelectedAnswer } from '@quiz/models/selected-answer.model';
import { QUIZ_CONSTANTS } from '@quiz/constants/quiz.constants';
import { QuestionRepository } from '@quiz/repository/question.repository';
import { ResultRepository } from '@quiz/repository/result.repository';
import { QuizScoreRule } from '@quiz/rules/quiz-score.rule';

@Injectable({
  providedIn: 'root',
})
export class QuizEngineService {
  private currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
  private heroPoints = QUIZ_CONSTANTS.INITIAL_SCORE.hero;
  private henchPoints = QUIZ_CONSTANTS.INITIAL_SCORE.hench;
  private readonly selectedAnswers: SelectedAnswer[] = [];
  private readonly currentQuestionSubject: BehaviorSubject<Question>;
  readonly currentQuestion$: Observable<Question>;
  private readonly heroScoreSubject = new BehaviorSubject<number>(
    QUIZ_CONSTANTS.INITIAL_SCORE.hero
  );
  private readonly henchScoreSubject = new BehaviorSubject<number>(
    QUIZ_CONSTANTS.INITIAL_SCORE.hench
  );
  private readonly finishedSubject = new BehaviorSubject<boolean>(false);
  readonly heroScore$ = this.heroScoreSubject.asObservable();
  readonly henchScore$ = this.henchScoreSubject.asObservable();
  readonly finished$ = this.finishedSubject.asObservable();
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly resultRepository: ResultRepository
  ) {
    this.currentQuestionSubject = new BehaviorSubject<Question>(this.questionRepository.getFirst());
    this.currentQuestion$ = this.currentQuestionSubject.asObservable();
  }
  answer(answer: Answer): void {
    if (this.finished) {
      return;
    }
    this.selectedAnswers.push({ question: this.currentQuestion, answer });
    this.addScore(answer);
    this.nextQuestion();
  }
  reset(): void {
    this.currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
    this.heroPoints = QUIZ_CONSTANTS.INITIAL_SCORE.hero;
    this.henchPoints = QUIZ_CONSTANTS.INITIAL_SCORE.hench;
    this.selectedAnswers.length = 0;
    this.heroScoreSubject.next(this.heroPoints);
    this.henchScoreSubject.next(this.henchPoints);
    this.finishedSubject.next(false);
    this.loadCurrentQuestion();
  }
  getResult(): ResultQuiz {
    const resultType = QuizScoreRule.resolve(this.heroPoints, this.henchPoints);
    return this.resultRepository.getByType(resultType)!;
  }
  get currentQuestion(): Question {
    return this.currentQuestionSubject.value;
  }
  get heroScore(): number {
    return this.heroPoints;
  }
  get henchScore(): number {
    return this.henchPoints;
  }
  get finished(): boolean {
    return this.finishedSubject.value;
  }
  get answersHistory(): SelectedAnswer[] {
    return [...this.selectedAnswers];
  }
  get score(): QuizScore {
    return { hero: this.heroPoints, hench: this.henchPoints };
  }
  private addScore(answer: Answer): void {
    this.heroPoints += answer.heroPoints;
    this.henchPoints += answer.henchPoints;
    this.heroScoreSubject.next(this.heroPoints);
    this.henchScoreSubject.next(this.henchPoints);
  }
  private nextQuestion(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.questionRepository.getTotal()) {
      this.finishedSubject.next(true);
      return;
    }
    this.loadCurrentQuestion();
  }
  private loadCurrentQuestion(): void {
    const question = this.questionRepository.getByIndex(this.currentIndex);
    if (question) {
      this.currentQuestionSubject.next(question);
    }
  }
}
