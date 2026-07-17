import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';
import { CodexSectionComponent } from '@shared/ui/codex/codex-section/codex-section';

@Component({
  selector: 'app-codex-body',
  standalone: true,
  imports: [ CodexSectionComponent ],
  templateUrl: './codex-body.html',
  styleUrls: ['./codex-body.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexBodyComponent {
  readonly codex = input.required<CodexRecord>();
}