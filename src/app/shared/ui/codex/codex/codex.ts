import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject, input } from '@angular/core';
import { CodexRecord } from '@shared/models/codex.model';
import { CodexHeaderComponent } from '@shared/ui/codex/codex-header/codex-header';
import { CodexBodyComponent } from '@shared/ui/codex/codex-body/codex-body';
import { CodexTagsComponent } from '@shared/ui/codex/codex-tags/codex-tags';
import { CodexTimelineComponent } from '@shared/ui/codex/codex-timeline/codex-timeline';
import { CodexFooterComponent } from '@shared/ui/codex/codex-footer/codex-footer';
import { CodexRendererService } from '@shared/ui/services/codex-renderer.service';

@Component({
  selector: 'app-codex',
  standalone: true,
  imports: [
    CodexHeaderComponent,
    CodexBodyComponent,
    CodexTagsComponent,
    CodexTimelineComponent,
    CodexFooterComponent
  ],
  templateUrl: './codex.html',
  styleUrls: ['./codex.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexComponent implements AfterViewInit {
  readonly codex = input.required<CodexRecord>();
  @ViewChild('frameContainer', { static: true })
  private readonly frameContainer!: ElementRef<HTMLDivElement>;
  private readonly renderer = inject(CodexRendererService);
  async ngAfterViewInit(): Promise<void> {
    await this.renderer.render(this.frameContainer.nativeElement, this.codex());
  }
}