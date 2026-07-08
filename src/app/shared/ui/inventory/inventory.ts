import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {}
