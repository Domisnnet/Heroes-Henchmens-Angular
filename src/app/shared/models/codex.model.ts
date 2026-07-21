import { CodexGlyph } from './codex-glyph.model';
import { CodexMetadata } from './codex-metadata.model';
import { CodexSection } from './codex-section.model';
import { CodexSecurity } from './codex-security.model';
import { CodexTimeline } from './codex-timeline.model';
export interface CodexRecord {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  glyph?: CodexGlyph;
  type: CodexDocumentType;
  security?: CodexSecurity;
  metadata?: CodexMetadata;
  tags?: string[];
  relatedArtifacts?: string[];
  sections?: CodexSection[];
  timeline?: CodexTimeline[];
  rarity?: CodexRarity;
}

export type CodexDocumentType =
  | 'artifact'
  | 'entity'
  | 'location'
  | 'archive'
  | 'protocol'
  | 'mission'
  | 'order'
  | 'phenomenon'
  | 'technology'
  | 'unknown';

export type CodexRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic';