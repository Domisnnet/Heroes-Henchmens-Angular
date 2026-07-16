import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';

@Component({
  selector: 'app-codex-header',
  standalone: true,
  imports: [],
  templateUrl: './codex-header.html',
  styleUrls: ['./codex-header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexHeaderComponent {
  readonly codex = input.required<CodexRecord>();
}