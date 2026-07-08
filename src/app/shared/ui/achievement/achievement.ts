import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [],
  templateUrl: './achievement.html',
  styleUrls: ['./achievement.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Achievement {}