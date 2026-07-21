import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexSection } from '@shared/models/codex-section.model';

@Component({
  selector: 'app-codex-section',
  standalone: true,
  imports: [],
  templateUrl: './codex-section.html',
  styleUrls: ['./codex-section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexSectionComponent {
  readonly section = input.required<CodexSection>();
}
