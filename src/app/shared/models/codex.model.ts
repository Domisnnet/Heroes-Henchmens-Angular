import { CodexMetadata } from './codex-metadata.model';
import { CodexSection } from './codex-section.model';
import { CodexSecurity } from './codex-security.model';
import { CodexTimeline } from './codex-timeline.model';

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

export interface CodexRecord {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  glyph?: string;
  description?: string;
  sections: CodexSection[];
  metadata: CodexMetadata;
  timeline?: CodexTimeline[];
  security: CodexSecurity;
  tags?: string[];
  rarity?: CodexRarity;
  theme?: CodexTheme;
}