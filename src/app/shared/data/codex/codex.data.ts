import { CodexRecord } from '@shared/models';

export const CODEX_RECORDS: CodexRecord[] = [
  {
    id: 'primordial-prism',
    slug: 'primordial-prism',
    title: 'Primordial Prism',
    subtitle: 'The First Known Energy Core',
    glyph: 'prism',
    classification: 'artifact',
    security: { level: 'public', watermark: true },
    metadata: {
      author: 'The Order',
      origin: 'Codex Vaticinarum',
      collection: 'Artifacts',
      language: 'Ancient',
      edition: 'I'
    },
    rarity: 'legendary',
    tags: [ 'Energy', 'Artifact', 'Prism', 'Origin', 'Resonance' ],
    relatedArtifacts: [ 'resonance-ring', 'origin-node' ],
    sections: [
      {
        id: 'introduction',
        type: 'introduction',
        title: 'Introduction',
        content:
          'The Primordial Prism is considered the first documented energy core capable of stabilizing the resonance between every known Artifact.',
      },
      {
        id: 'history',
        type: 'history',
        title: 'Historical Records',
        content:
          'Ancient records indicate that every modern Artifact is derived from fragments of the Primordial Prism.',
      },
      {
        id: 'research',
        type: 'research',
        title: 'Research Notes',
        content:
          'Current resonance patterns demonstrate that every documented relic still inherits part of its original frequency.'
      }
    ],
    timeline: [
      {
        id: 'first-detection',
        type: 'discovery',
        title: 'First Detection',
        description:
          'The earliest references describe an anomalous resonance event associated with the Primordial Prism.',
        date: 'Unknown Era'
      },
      {
        id: 'order-classification',
        type: 'classification',
        title: 'Order Classification',
        description: 'The Order officially recognized the Primordial Prism as a Legendary Artifact.',
        date: 'Archive I'
      }
    ],
  },
];