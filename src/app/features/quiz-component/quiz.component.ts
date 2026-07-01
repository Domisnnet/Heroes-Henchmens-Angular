import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { Answer } from '@features/quiz-component/models/answer.model';
import { Question } from '@features/quiz-component/models/question.model';
import { QuizEngineService } from '@features/quiz-component/services/quiz-engine.service';

@Component({
    selector: 'app-quiz-component',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        FooterComponent
    ],
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  readonly headerMessage = UI_MESSAGES.HEADER.QUIZ;
  readonly footerMessage = UI_MESSAGES.FOOTER.QUIZ;
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
        .subscribe(finished => { if (finished) { this.router.navigate(['/result']); } });
    }
  answers(answer: Answer): void { this.engine.answer(answer); }
}