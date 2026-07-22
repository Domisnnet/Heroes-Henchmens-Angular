import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CODEX_GLYPHS } from '@shared/models/codex-glyphs';
import { CodexRecord } from '@shared/models/codex.model';
@Component({
  selector: 'app-codex-header',
  standalone: true,
  imports: [],
  templateUrl: './codex-header.html',
  styleUrls: ['./codex-header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodexHeaderComponent {
  readonly codex = input.required<CodexRecord>();
  readonly glyphPath = computed(() => {
    const glyph = this.codex().glyph;
    return glyph ? CODEX_GLYPHS[glyph] : null;
  });
}
