export type CodexTimelineStatus =
  | 'pending'
  | 'active'
  | 'completed'
  | 'cancelled';

export interface CodexTimeline {
  id: string;
  title: string;
  description?: string;
  date?: Date;
  status?: CodexTimelineStatus;
}