import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {}
