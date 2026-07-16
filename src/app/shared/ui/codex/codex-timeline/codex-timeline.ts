import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexTimeline } from '@shared/models/codex-timeline.model';

@Component({
  selector: 'app-codex-timeline',
  standalone: true,
  imports: [],
  templateUrl: './codex-timeline.html',
  styleUrls: ['./codex-timeline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexTimelineComponent {
  readonly timeline = input.required<CodexTimeline[]>();
}