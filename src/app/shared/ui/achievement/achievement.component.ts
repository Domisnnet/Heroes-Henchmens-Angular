import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Achievement } from '@shared/models/achievement.model';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [],
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementComponent {
  readonly achievement = input.required<Achievement>();
}