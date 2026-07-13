import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, ViewChild, inject, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';
import { CodexRendererService } from '@shared/ui/services/codex-renderer.service';

@Component({
    selector: 'app-codex',
    standalone: true,
    templateUrl: './codex.html',
    styleUrls: ['./codex.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodexComponent implements AfterViewInit {
  readonly codex = input.required<CodexRecord>();
  @ViewChild('frameContainer', { static: true })
  private readonly frameContainer!: ElementRef<HTMLDivElement>;
  private readonly renderer = inject(CodexRendererService);
  private readonly destroyRef = inject(DestroyRef);
  async ngAfterViewInit(): Promise<void> { await this.renderer.render(this.frameContainer.nativeElement);
    this.destroyRef.onDestroy(() => { this.renderer.destroy(this.frameContainer.nativeElement); });
  }
}