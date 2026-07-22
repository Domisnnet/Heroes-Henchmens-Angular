import { CodexGlyph } from './codex-glyph.model';
import { CodexMetadata } from './codex-metadata.model';
import { CodexSection } from './codex-section.model';
import { CodexSecurity } from './codex-security.model';
import { CodexTimeline } from './codex-timeline.model';
export interface CodexRecord {
  id: string;
  slug: string;
  type: CodexDocumentType;
  title: string;
  subtitle?: string;
  glyph: CodexGlyph;
  security: CodexSecurity;
  metadata: CodexMetadata;
  narrative: string;
  sections: CodexSection[];
  timeline: CodexTimeline[];
  tags?: string[];
  relatedArtifacts?: string[];
  rarity: CodexRarity;
  theme: CodexTheme;
}

export type CodexDocumentType =
  |'artifact'
  |'entity'
  |'location'
  |'archive'
  |'protocol'
  |'mission'
  |'order'
  |'phenomenon'
  |'technology'
  |'unknown';

export type CodexTheme = |'cosmic' |'solar' |'ancient' |'corrupted';
export type CodexRarity = |'common' |'uncommon' |'rare' |'epic' |'legendary' |'mythic';