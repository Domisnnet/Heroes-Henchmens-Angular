import { ResultQuiz } from '@features/quiz-component/models/result.model';
import { ResultType } from '@features/quiz-component/enums/result-type.enum';

export const RESULTS: ResultQuiz[] = [
  {
    type: ResultType.HERO,
    title: 'HERÓI',
    subtitle: 'O Símbolo da Esperança',
    description: 'Você representa o mais alto ideal de heroísmo.',
    text:
      'Você coloca o bem coletivo acima dos próprios interesses. Coragem, honestidade e empatia guiam suas decisões, inspirando outras pessoas a fazer o que é certo.',
    image: 'assets/results/hero.png'
  },
  {
    type: ResultType.PROTECTOR,
    title: 'PROTETOR',
    subtitle: 'O Guardião dos Inocentes',
    description: 'Sua prioridade sempre será proteger quem precisa.',
    text:
      'Você acredita que força só faz sentido quando usada para defender os mais vulneráveis. Age com equilíbrio, responsabilidade e espírito de equipe.',
    image: 'assets/results/protector.png'
  },
  {
    type: ResultType.VIGILANTE,
    title: 'VIGILANTE',
    subtitle: 'O Justiceiro Solitário',
    description: 'Você segue seu próprio código moral.',
    text:
      'Nem sempre acredita que as regras sejam suficientes para fazer justiça. Prefere agir por conta própria, assumindo as consequências das suas escolhas.',
    image: 'assets/results/vigilante.png'
  },
  {
    type: ResultType.MERCENARY,
    title: 'MERCENÁRIO',
    subtitle: 'O Profissional',
    description: 'Resultados importam mais do que ideais.',
    text:
      'Você toma decisões de forma prática e estratégica. Lealdade existe, mas precisa ser conquistada. Seu foco está em atingir os objetivos da maneira mais eficiente possível.',
    image: 'assets/results/mercenary.png'
  },
  {
    type: ResultType.HENCHMEN,
    title: 'HENCHMEN',
    subtitle: 'O Capanga do Caos',
    description: 'O caos é sua maior diversão.',
    text:
      'Você desafia regras, provoca conflitos e não se intimida diante das consequências. Para você, poder e liberdade caminham lado a lado.',
    image: 'assets/results/henchmen.png'
  }
];