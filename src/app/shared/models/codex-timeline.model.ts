export type CodexTimelineType =
  | 'discovery'
  | 'research'
  | 'classification'
  | 'incident'
  | 'mission'
  | 'archive'
  | 'observation'
  | 'unknown';
export interface CodexTimeline {
  id: string;
  type: CodexTimelineType;
  title: string;
  description: string;
  date: string;
}