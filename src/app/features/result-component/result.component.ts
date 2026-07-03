import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { QuizFacade } from '@quiz/facades/quiz.facade';
import { QuizAnalysisService } from '@quiz/services/quiz-analysis.service';
import { ResultQuiz } from '@quiz/models/result.model';
import { AnalysisItem } from '@quiz/models/analysis-item.model';
@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  readonly headerMessage = UI_MESSAGES.HEADER.RESULT;
  readonly footerMessage = UI_MESSAGES.FOOTER.RESULT;
  private readonly facade = inject(QuizFacade);
  private readonly router = inject(Router);
  private readonly analysisService = inject(QuizAnalysisService);
  readonly result: ResultQuiz = this.facade.getResult();
  readonly pageClass = `result__page result__page--${this.result.type}`
  readonly analysis: AnalysisItem[] = this.analysisService.build(this.facade.history());
  readonly heroScore = this.facade.heroScore();
  readonly henchScore = this.facade.henchScore();
  readonly heroPercentage = this.calculateHeroPercentage();
  readonly henchPercentage = 100 - this.heroPercentage;
  restart(): void { this.facade.reset(); this.router.navigate(['/quiz']); }
  share(): void { /* Implementação futura */ }
  private calculateHeroPercentage(): number {
    const total = this.heroScore + this.henchScore;
    if (total === 0) { return 0; }
    return Math.round((this.heroScore / total) * 100);
  }
}