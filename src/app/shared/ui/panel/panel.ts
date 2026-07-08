import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.html',
  styleUrls: ['./panel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Panel {}