import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-artifact-viewer',
  standalone: true,
  imports: [],
  templateUrl: './artifact-viewer.html',
  styleUrls: ['./artifact-viewer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactViewerComponent {
  readonly size = input<number>(320);
  readonly aura = input(true);
  readonly shield = input(true);
  readonly frame = input(true);
  readonly core = input(true);
  readonly slot = input(true);
  readonly lock = input(true);
  readonly sigil = input(true);
}
