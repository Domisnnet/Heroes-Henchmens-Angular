import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CodexLayer } from '@shared/models/codex-layer.model';
@Injectable({
  providedIn: 'root',
})
export class CodexLoaderService {
  private readonly http = inject(HttpClient);
  private readonly basePath = 'assets/codex/frame';
  private readonly registry: Record<CodexLayer, string> = {
    frame: 'codex-frame.svg',
    ornaments: 'codex-ornaments.svg',
    details: 'codex-details.svg',
    seals: 'codex-seals.svg',
    final: 'codex-frame-final.svg',
  };
  async loadLayer(layer: CodexLayer): Promise<string> {
    const file = this.registry[layer];
    return firstValueFrom(this.http.get(`${this.basePath}/${file}`, { responseType: 'text' }));
  }
}
