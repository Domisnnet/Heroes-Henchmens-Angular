import { CodexRecord } from '@shared/models/codex.model';

export const CODEX_RECORDS: CodexRecord[] = [
  {
    id: 'primordial-prism',
    slug: 'primordial-prism',
    title: 'Primordial Prism',
    subtitle: 'The First Known Energy Core',
    glyph: 'assets/branding/glyphs/prism.svg',
    narrative:
      'The Primordial Prism is considered the first documented energy core capable of stabilizing the resonance between every known Artifact. Ancient records indicate that all modern relics are fragments or derivatives of its original architecture. Its true origin remains unknown.',
    classification: 'artifact',
    tags: [
      'Energy',
      'Artifact',
      'Prism',
      'Origin',
      'Resonance'
    ],
    sections: [
      {
        id: 'history',
        title: 'Historical Records',
        content: 'The Primordial Prism predates every known Artifact documented by the Order.'
      },
      {
        id: 'research',
        title: 'Research Notes',
        content: 'Current resonance patterns indicate that modern relics still inherit part of its original frequency.'
      }
    ],
    timeline: [
      {
        id: 't001',
        title: 'First Detection',
        description: 'Ancient records describe the first resonance event associated with the Primordial Prism.',
        year: 'date?: Date'
      },
      {
        id: 't002',
        title: 'Order Classification',
        description: 'The Order officially classified the Primordial Prism as a Class-A Artifact.',
        year: 'Archive 001'
      }
    ],
    rarity: 'legendary',
    theme: 'ancient'
  }
];