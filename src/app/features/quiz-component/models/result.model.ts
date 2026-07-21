import { ResultType } from '@quiz/enums/result-type.enum';
export interface ResultQuiz {
  description: string;
  subtitle: string;
  text: string;
  title: string;
  type: ResultType;
  image: string;
}
