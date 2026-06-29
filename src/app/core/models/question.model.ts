export interface Answer {
  id: number;
  text: string;
  heroPoints: number;
  henchPoints: number;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}