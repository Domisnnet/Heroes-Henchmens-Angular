import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodexLoaderService {
  private readonly http = inject(HttpClient);
  private readonly basePath = 'assets/codex/frame';
  async loadFrame(): Promise<string> { return this.load('codex-frame.svg'); }
  async loadOrnaments(): Promise<string> { return this.load('codex-ornaments.svg'); }
  async loadDetails(): Promise<string> { return this.load('codex-details.svg'); }
  async loadSeals(): Promise<string> { return this.load('codex-seals.svg'); }
  async loadFrameFinal(): Promise<string> { return this.load('codex-frame-final.svg'); }
  async load(filename: string): Promise<string> { return firstValueFrom(this.http.get(`${this.basePath}/${filename}`, { responseType: 'text' })); }
}