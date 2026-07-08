import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {}