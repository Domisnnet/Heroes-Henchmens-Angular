import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { QuizEngineService } from '@features/quiz-component/services/quiz-engine.service';
import { ResultQuiz } from '@features/quiz-component/models/result.model';

@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  readonly headerMessage = UI_MESSAGES.HEADER.RESULT;
  readonly footerMessage = UI_MESSAGES.FOOTER.RESULT;
  private readonly engine = inject(QuizEngineService);
  private readonly router = inject(Router);
  readonly result: ResultQuiz = this.engine.getResult();
  restart(): void { this.engine.reset(); this.router.navigate(['/quiz-component']); }
  share(): void { } //área de compartilhamento de resultados, pode ser implementada futuramente
}