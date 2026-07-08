import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';
@Component({
  selector: 'app-codex',
  standalone: true,
  imports: [],
  templateUrl: './codex.html',
  styleUrls: ['./codex.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexComponent {
  readonly codex = input.required<CodexRecord>();
}