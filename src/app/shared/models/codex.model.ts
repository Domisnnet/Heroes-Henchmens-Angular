export type CodexClassification = 'artifact' | 'entity' | 'technology' | 'location' | 'protocol';

export type CodexSecurity = 'public' | 'restricted' | 'classified';

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CodexRecord {
  id: string;
  title: string;
  subtitle: string;
  classification: CodexClassification;
  security: CodexSecurity;
  glyph: string;
  narrative: string;
  tags: string[];
  relatedArtifacts: string[];
  timeline: TimelineEntry[];
}
