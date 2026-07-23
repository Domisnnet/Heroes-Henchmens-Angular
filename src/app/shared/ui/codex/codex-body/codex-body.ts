import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models';
import { CODEX_LABELS } from '@shared/ui/codex/constants/codex.constants';
@Component({
  selector: 'app-codex-body',
  standalone: true,
  templateUrl: './codex-body.html',
  styleUrls: ['./codex-body.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexBodyComponent {
  readonly codex = input.required<CodexRecord>();
  protected readonly labels = CODEX_LABELS;
}
