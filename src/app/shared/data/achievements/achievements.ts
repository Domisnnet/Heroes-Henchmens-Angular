import { Achievement } from '@shared/models/achievement.model';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-contact',
    title: 'Primeiro Contato',
    description: 'Primeiro acesso ao sistema.',
    icon: 'assets/branding/glyphs/prism.svg',
    rarity: 'common',
    unlocked: true,
  },
];
