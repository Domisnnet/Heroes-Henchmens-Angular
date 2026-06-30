import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';
import { Answer } from '@quiz/models/answer.model';
import { Question } from '@quiz/models/question.model';
import { QuizEngineService } from '@quiz/services/quiz-engine.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer
  ],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss'
})
export class Quiz {
  private readonly engine = inject(QuizEngineService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  currentQuestion!: Question;
  constructor() {
    this.engine.currentQuestion$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(question => { this.currentQuestion = question; });
    this.engine.finished$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(finished => {
        if (finished) { this.router.navigate(['/result']); }
      });
  }
  answers(answer: Answer): void { this.engine.answer(answer); }
}