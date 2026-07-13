export type CodexTimelineStatus =
  | 'pending'
  | 'active'
  | 'completed'
  | 'cancelled';

export interface CodexTimeline {
  id: string;
  year: string;
  title: string;
  narrative?: string;
  status?: CodexTimelineStatus;
}