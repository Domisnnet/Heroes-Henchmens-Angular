export type CodexTimelineType =
  'discovery' | 'research' | 'archive' | 'incident' | 'classification';
export interface CodexTimeline {
  id: string;
  type: CodexTimelineType;
  title: string;
  description: string;
  date?: string;
}
