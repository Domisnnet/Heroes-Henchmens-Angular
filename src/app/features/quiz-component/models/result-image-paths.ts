export const RESULT_IMAGE_PATHS = {
  hero: 'assets/results/hero.png',
  protector: 'assets/results/protector.png',
  vigilante: 'assets/results/vigilante.png',
  mercenary: 'assets/results/mercenary.png',
  henchmen: 'assets/results/henchmen.png',
} as const;

export type ResultType = keyof typeof RESULT_IMAGE_PATHS;
export type ResultImagePath = (typeof RESULT_IMAGE_PATHS)[ResultType];