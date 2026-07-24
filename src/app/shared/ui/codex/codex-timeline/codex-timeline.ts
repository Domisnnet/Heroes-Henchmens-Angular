import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CODEX_LABELS } from '@shared/ui/codex/constants/codex.constants';
import { CodexTimeline } from '@shared/models/codex-timeline.model';

@Component({
  selector: 'app-codex-timeline',
  standalone: true,
  templateUrl: './codex-timeline.html',
  styleUrls: ['./codex-timeline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexTimelineComponent {
  readonly timeline = input.required<CodexTimeline[]>();
  protected readonly labels = CODEX_LABELS;
}