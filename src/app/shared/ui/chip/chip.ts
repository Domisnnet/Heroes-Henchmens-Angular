import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.html',
  styleUrls: ['./chip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {}
