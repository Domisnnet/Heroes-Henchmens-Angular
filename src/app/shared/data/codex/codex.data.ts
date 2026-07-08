import { CodexRecord } from '@shared/models/codex.model';

export const CODEX_RECORDS: CodexRecord[] = [
  {
    id: 'primordial-prism',
    title: 'Primordial Prism',
    subtitle: 'The First Known Energy Core',
    classification: 'artifact',
    security: 'classified',
    glyph: 'assets/branding/glyphs/primordial-prism.svg',
    narrative:
      'The Primordial Prism is considered the first documented energy core capable of stabilizing the resonance between every known Artifact. Ancient records indicate that all modern relics are fragments or derivatives of its original architecture. Its true origin remains unknown.',
    tags: [
      'Energy',
      'Artifact',
      'Prism',
      'Origin',
      'Resonance'
    ],
    relatedArtifacts: [
      'Prism Alpha',
      'Order Core',
      'Artifact Shield'
    ],
    timeline: [
      {
        id: 't001',
        year: 'Unknown',
        title: 'First Detection',
        description:
          'Ancient records describe the first resonance event associated with the Primordial Prism.'
      },
      {
        id: 't002',
        year: 'Archive 001',
        title: 'Order Classification',
        description:
          'The Order officially classified the Primordial Prism as a Class-A Artifact.'
      }
    ]
  }
];