import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodexComposerService {
  compose(layers: SVGSVGElement[]): SVGSVGElement {
    if (!layers.length) { throw new Error('[CodexComposer] No SVG layers supplied.'); }
    const root = this.cloneRoot(layers[0]);
    layers.forEach(layer => {
      Array.from(layer.childNodes).forEach(node => { root.appendChild(node.cloneNode(true)); });
    }); return root;
  }
  composeSelected(registry: Record<string, SVGSVGElement>, names: string[],): SVGSVGElement {
    const layers: SVGSVGElement[] = [];
    names.forEach(name => { const svg = registry[name]; if (svg) { layers.push(svg); }
    }); return this.compose(layers);
  }
  cloneLayer(layer: SVGSVGElement): SVGSVGElement { return layer.cloneNode(true) as SVGSVGElement; }
  clear(container: HTMLElement): void {
    while (container.firstChild) { container.removeChild(container.firstChild); }
  }
  private cloneRoot(layer: SVGSVGElement): SVGSVGElement {
    const root = layer.cloneNode(true) as SVGSVGElement;
    while (root.firstChild) { root.removeChild(root.firstChild); } return root;
  }
}