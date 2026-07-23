import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CODEX_LABELS, CODEX_METADATA_LABELS } from '../constants/codex.constants';
import { CodexRecord } from '@shared/models';
@Component({
  selector: 'app-codex-footer',
  standalone: true,
  templateUrl: './codex-footer.html',
  styleUrls: ['./codex-footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexFooterComponent {
  readonly codex = input.required<CodexRecord>();
  protected readonly labels = CODEX_LABELS;
  protected readonly metadata = CODEX_METADATA_LABELS;
}
