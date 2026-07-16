import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodexComposerService {
  compose(layers: SVGSVGElement[]): SVGSVGElement {
    if (!layers.length) { throw new Error('[CodexComposer] No SVG layers supplied.'); }
    const root = layers[0].cloneNode(true) as SVGSVGElement;
    while (root.firstChild) { root.removeChild(root.firstChild); }
    layers.forEach(layer => { Array.from(layer.childNodes).forEach(node => { root.appendChild(node.cloneNode(true)); }); }); return root;
  }
}