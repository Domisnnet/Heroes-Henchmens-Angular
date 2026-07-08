import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}