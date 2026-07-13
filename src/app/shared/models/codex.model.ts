import { CodexMetadata } from './codex-metadata.model';
import { CodexSection } from './codex-section.model';
import { CodexSecurity } from './codex-security.model';
import { CodexTimeline } from './codex-timeline.model';

export interface CodexRecord {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  glyph?: string;
  classification: CodexClassification;
  security: CodexSecurityLevel;
  narrative: string;
  tags?: string[];
  relatedArtifacts?: string[];
  sections?: CodexSection[];
  timeline?: CodexTimeline[];
  rarity?: CodexRarity;
  theme?: CodexTheme;
}

export type CodexClassification =
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

export type CodexSecurityLevel =
  | 'public'
  | 'restricted'
  | 'classified'
  | 'secret'
  | 'top-secret';

export type CodexTheme =
  | 'cosmic'
  | 'solar'
  | 'ancient'
  | 'corrupted';

export type CodexRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic';