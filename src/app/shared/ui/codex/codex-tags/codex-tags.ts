import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-codex-tags',
  standalone: true,
  imports: [],
  templateUrl: './codex-tags.html',
  styleUrls: ['./codex-tags.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexTagsComponent {
  readonly tags = input.required<string[]>();
}
