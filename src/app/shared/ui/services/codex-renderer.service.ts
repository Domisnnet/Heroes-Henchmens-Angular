import { Injectable, inject } from '@angular/core';
import { CodexLoaderService } from './codex-loader.service';
import { CodexCacheService } from './codex-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CodexRendererService {
  private readonly loader = inject(CodexLoaderService);
  private readonly cache = inject(CodexCacheService);
  private readonly parser = new DOMParser();
  async render(container: HTMLElement): Promise<void> {
    this.clear(container);
    const master = this.createMasterSvg();
    const layers = await this.loadLayers();
    for (const layer of layers) { this.merge(master, layer); }
    container.appendChild(master);
  }
  async reload(container: HTMLElement): Promise<void> { this.cache.clear(); await this.render(container); }
  destroy(container: HTMLElement): void { this.clear(container); }
  private async loadLayers(): Promise<string[]> {
    return Promise.all([
      this.load('frame', () => this.loader.loadFrame()),
      this.load('ornaments', () => this.loader.loadOrnaments()),
      this.load('details', () => this.loader.loadDetails()),
      this.load('seals', () => this.loader.loadSeals()),
      this.load('frame-final', () => this.loader.loadFrameFinal())
    ]);
  }
  private async load(key: string, callback: () => Promise<string>): Promise<string> {
    if (this.cache.has(key)) { return this.cache.get(key)!; }
    const svg = await callback();
    this.cache.set(key, svg);
    return svg;
  }
  private createMasterSvg(): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 400 600');
    svg.setAttribute('class', 'codex-svg');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    return svg;
  }
  private merge(master: SVGSVGElement, source: string): void {
    const documentSvg = this.parser.parseFromString(source, 'image/svg+xml');
    const svg = documentSvg.documentElement;
    Array.from(svg.childNodes).forEach(node => { 
      master.appendChild(master.ownerDocument.importNode(node, true)
    ); });
  }
  private clear(container: HTMLElement): void { container.replaceChildren(); }
}