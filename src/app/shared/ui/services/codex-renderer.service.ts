import { Injectable, inject } from '@angular/core';
import { CodexClassification, CodexRecord } from '@shared/models/codex.model';
import { CodexLayer } from '@shared/models/codex-layer.model';
import { CodexLoaderService } from './codex-loader.service';
import { CodexCacheService } from './codex-cache.service';
import { CodexComposerService } from './codex-composer.service';
@Injectable({
  providedIn: 'root',
})
export class CodexRendererService {
  private readonly loader = inject(CodexLoaderService);
  private readonly cache = inject(CodexCacheService);
  private readonly composer = inject(CodexComposerService);
  private readonly parser = new DOMParser();
  private readonly presets: Record<CodexClassification, CodexLayer[]> = {
    artifact: [
      'frame',
      'ornaments',
      'details',
      'seals',
      'final',
    ],
    entity: [
      'frame',
      'ornaments',
      'final',
    ],
    location: [
      'frame',
      'details',
      'final',
    ],
    archive: [
      'frame',
      'details',
      'seals',
      'final',
    ],
    protocol: [
      'frame',
      'details',
    ],
    mission: [
      'frame',
      'ornaments',
      'details',
      'final',
    ],
    order: [
      'frame',
      'ornaments',
      'seals',
      'final',
    ],
    phenomenon: [
      'frame',
      'details',
      'final',
    ],
    technology: [
      'frame',
      'details',
      'seals',
      'final',
    ],
    unknown: [
      'frame',
      'final',
    ],
  };
  async render(container: HTMLElement, record: CodexRecord): Promise<void> {
    this.composer.clear(container);
    const layers = this.resolveLayers(record);
    const svgLayers: SVGSVGElement[] = [];
    for (const layer of layers) { svgLayers.push(await this.resolveLayer(layer)); }
    const svg = this.composer.compose(svgLayers);
    container.appendChild(svg);
  }
  private resolveLayers(record: CodexRecord): CodexLayer[] {
    return this.presets[ record.classification ?? 'artifact' ];
  }
  private async resolveLayer(layer: CodexLayer): Promise<SVGSVGElement> {
    const cached = this.cache.get(layer);
    if (cached) { return this.composer.cloneLayer(cached); }
    const source = await this.loader.loadLayer(layer);
    const svg = this.parse(source);
    this.cache.set(layer, svg);
    return this.composer.cloneLayer(svg);
  }
  private parse(source: string): SVGSVGElement {
    const xml = this.parser.parseFromString(source, 'image/svg+xml');
    const root = xml.documentElement;
    if (root.tagName.toLowerCase() !== 'svg') {
      throw new Error('[CodexRenderer] Invalid SVG document.');
    }
    return root as unknown as SVGSVGElement;
  }
}