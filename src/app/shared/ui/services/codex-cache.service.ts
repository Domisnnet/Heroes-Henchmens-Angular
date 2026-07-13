import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodexCacheService {
  private readonly cache = new Map<string, string>();
  has(key: string): boolean { return this.cache.has(key); }
  get(key: string): string | null { return this.cache.get(key) ?? null; }
  set(key: string, value: string): void { this.cache.set(key, value); }
  remove(key: string): void { this.cache.delete(key); }
  clear(): void { this.cache.clear(); }
  keys(): string[] { return [...this.cache.keys()]; }
  size(): number { return this.cache.size; }
}