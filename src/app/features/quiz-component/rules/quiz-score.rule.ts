import { QUIZ_CONSTANTS } from '@quiz/constants/quiz.constants';
import { ResultType } from '@quiz/enums/result-type.enum';
export class QuizScoreRule {
  static resolve(heroScore: number, henchScore: number): ResultType {
    const difference = heroScore - henchScore;
    if (difference >= QUIZ_CONSTANTS.RESULT_THRESHOLDS.HERO) return ResultType.HERO;
    if (difference >= QUIZ_CONSTANTS.RESULT_THRESHOLDS.PROTECTOR) return ResultType.PROTECTOR;
    if (difference > QUIZ_CONSTANTS.RESULT_THRESHOLDS.MERCENARY && difference < QUIZ_CONSTANTS.RESULT_THRESHOLDS.PROTECTOR) return ResultType.VIGILANTE;
    if (difference > QUIZ_CONSTANTS.RESULT_THRESHOLDS.MERCENARY) return ResultType.MERCENARY;
    return ResultType.HENCHMEN;
  }
}