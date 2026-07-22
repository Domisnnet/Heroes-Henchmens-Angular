import { CodexRecord } from '@shared/models/codex.model';

export const CODEX_RECORDS: CodexRecord[] = [
  {
    id: 'primordial-prism',
    slug: 'primordial-prism',
    type: 'artifact',
    title: 'Primordial Prism',
    subtitle: 'The First Known Energy Core',
    glyph: 'prism',
    security: {
      level: 'public',
      watermark: true,
      encrypted: false,
      clearance: 'Order',
    },
    metadata: {
      author: 'The Order',
      origin: 'Codex Vaticinarum',
      collection: 'Artifacts',
      language: 'Ancient',
      edition: 'I',
    },
    narrative:
      'The Primordial Prism is considered the first documented energy core capable of stabilizing the resonance between every known Artifact. Ancient records indicate that all modern relics are fragments or derivatives of its original architecture. Its true origin remains unknown.',
    sections: [
      {
        id: 'history',
        type: 'history',
        title: 'Historical Records',
        content: 'The Primordial Prism predates every known Artifact documented by the Order.',
      },
      {
        id: 'research',
        type: 'research',
        title: 'Research Notes',
        content:
          'Current resonance patterns indicate that modern relics still inherit part of its original frequency.',
      },
    ],
    timeline: [
      {
        id: 't001',
        type: 'discovery',
        title: 'First Detection',
        description:
          'Ancient records describe the first resonance event associated with the Primordial Prism.',
        date: 'Unknown Era',
      },
      {
        id: 't002',
        type: 'classification',
        title: 'Order Classification',
        description: 'The Order officially classified the Primordial Prism as a Class-A Artifact.',
        date: 'Archive 001',
      },
    ],
    tags: ['Energy', 'Artifact', 'Prism', 'Origin', 'Resonance'],
    relatedArtifacts: [],
    rarity: 'legendary',
    theme: 'ancient',
  },
];
