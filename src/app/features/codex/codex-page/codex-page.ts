import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CODEX_RECORDS } from '@shared/data/codex/codex.data';
import { CodexComponent } from '@shared/ui/codex';
@Component({
  selector: 'app-codex-page',
  standalone: true,
  imports: [CodexComponent],
  templateUrl: './codex-page.html',
  styleUrls: ['./codex-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexPage {
  protected readonly record = CODEX_RECORDS[0];
}