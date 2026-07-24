import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CODEX_LABELS } from '@shared/ui/codex/constants/codex.constants';
@Component({
  selector: 'app-codex-tags',
  standalone: true,
  templateUrl: './codex-tags.html',
  styleUrls: ['./codex-tags.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexTagsComponent {
  readonly tags = input.required<string[]>();
  protected readonly labels = CODEX_LABELS;
}