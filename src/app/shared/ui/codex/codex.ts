import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-codex',
  standalone: true,
  imports: [],
  templateUrl: './codex.html',
  styleUrls: ['./codex.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexComponent {}