import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';

@Component({
  selector: 'app-codex-footer',
  standalone: true,
  imports: [],
  templateUrl: './codex-footer.html',
  styleUrls: ['./codex-footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexFooterComponent {
  readonly codex = input.required<CodexRecord>();
}
