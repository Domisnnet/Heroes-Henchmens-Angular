import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.html',
  styleUrls: ['./toast.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {}