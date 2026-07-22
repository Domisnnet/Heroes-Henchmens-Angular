import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models';
@Component({
  selector: 'app-codex-body',
  standalone: true,
  templateUrl: './codex-body.html',
  styleUrls: ['./codex-body.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexBodyComponent {
  readonly codex = input.required<CodexRecord>();
}