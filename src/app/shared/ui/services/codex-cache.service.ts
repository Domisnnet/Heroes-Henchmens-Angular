import { Injectable } from '@angular/core';
import { CodexLayer } from '@shared/models/codex-layer.model';
@Injectable({
  providedIn: 'root',
})
export class CodexCacheService {
  private readonly cache = new Map<CodexLayer, SVGSVGElement>();
  has(layer: CodexLayer): boolean { return this.cache.has(layer); }
  get(layer: CodexLayer): SVGSVGElement | null { return this.cache.get(layer) ?? null; }
  set(layer: CodexLayer, svg: SVGSVGElement): void { this.cache.set(layer, svg); }
  remove(layer: CodexLayer): void { this.cache.delete(layer); }
  clear(): void { this.cache.clear(); }
  keys(): CodexLayer[] { return [ ...this.cache.keys() ]; }
  size(): number { return this.cache.size; }
}