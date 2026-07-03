import { ResultType } from '@quiz/enums/result-type.enum';

export class QuizScoreRule {
  static resolve(heroScore: number, henchScore: number): ResultType {
    if (heroScore > henchScore) return ResultType.HERO;
    if (henchScore > heroScore) return ResultType.PROTECTOR;
    if (henchScore === heroScore) return ResultType.VIGILANTE;
    if (henchScore === heroScore) return ResultType.MERCENARY;
    return ResultType.HENCHMAN;
  }
}