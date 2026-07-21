import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodexComposerService {
  clear(container: HTMLElement): void { container.replaceChildren(); }
  cloneLayer(svg: SVGSVGElement): SVGSVGElement { return svg.cloneNode(true) as SVGSVGElement; }
  compose(layers: SVGSVGElement[]): SVGSVGElement {
    if (!layers.length) { throw new Error('[CodexComposer] No SVG layers provided.'); }
    const root = this.cloneLayer(layers[0]);
    this.clearRoot(root);
    const defs = this.createDefs(root);
    this.mergeDefinitions(defs, layers);
    this.mergeStyles(defs, layers);
    this.mergeGroups(root, layers);
    return root;
  }
  private clearRoot(root: SVGSVGElement): void {
    root.querySelectorAll('defs').forEach(node => node.remove());
    root.querySelectorAll('style').forEach(node => node.remove());
    Array
      .from(root.children)
      .filter(node => node.tagName.toLowerCase() === 'g')
      .forEach(node => node.remove());
  }
  private createDefs(root: SVGSVGElement): SVGDefsElement {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    root.insertBefore(defs, root.firstChild); return defs;
  }
  private mergeDefinitions(defs: SVGDefsElement, layers: SVGSVGElement[]): void {
    const ids = new Set<string>();
    for (const layer of layers) {
      const layerDefs = layer.querySelector('defs');
      if (!layerDefs) { continue; }
      Array.from(layerDefs.children).forEach(node => {
        const id = node.getAttribute('id');
        if (id && ids.has(id)) { return; }
        if (id) { ids.add(id); }
        defs.appendChild(node.cloneNode(true));
      });
    }
  }
  private mergeStyles(defs: SVGDefsElement, layers: SVGSVGElement[]): void {
    const css: string[] = [];
    for (const layer of layers) {
      layer.querySelectorAll('style').forEach(style => { css.push(style.textContent ?? ''); });
    }
    if (!css.length) { return; }
    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = css.join('\n');
    defs.appendChild(style);
  }
  private mergeGroups(root: SVGSVGElement, layers: SVGSVGElement[]): void {
  const rootGroups = new Map<string, SVGGElement>();
  root.querySelectorAll('g[id]').forEach(group => { rootGroups.set(group.id, group as SVGGElement); });
  for (const layer of layers) {
    Array.from(layer.children) .filter(node => node.tagName.toLowerCase() === 'g') .forEach(group => {
      const id = group.id;
      if (id && rootGroups.has(id)) { const target = rootGroups.get(id)!; Array.from(group.childNodes).forEach(child => { target.appendChild(child.cloneNode(true)); }); return; }
      root.appendChild(group.cloneNode(true));
    });
  }}
}