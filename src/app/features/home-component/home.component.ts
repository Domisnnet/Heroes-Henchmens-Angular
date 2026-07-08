import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { ArtifactViewerComponent } from '@shared/artifact-viewer/artifact-viewer';
import { AchievementComponent } from '@shared/ui/achievement/achievement.component';
import { ACHIEVEMENTS } from '@shared/data/achievements/achievements';
import { CodexComponent } from '@shared/ui/codex/codex';
import { CODEX_RECORDS } from '@shared/data/codex/codex.data';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CodexComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly achievements = ACHIEVEMENTS;
  protected readonly codex = CODEX_RECORDS[0];
  readonly headerMessage = UI_MESSAGES.HEADER.HOME;
  readonly footerMessage = UI_MESSAGES.FOOTER.HOME;
  constructor(private readonly router: Router) {}
  startQuiz(): void { this.router.navigate(['/quiz']); }
}