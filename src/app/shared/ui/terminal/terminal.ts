import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.html',
  styleUrls: ['./terminal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalComponent {}