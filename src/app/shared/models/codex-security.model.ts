export type CodexSecurityLevel =
  | 'public'
  | 'restricted'
  | 'classified'
  | 'secret'
  | 'top-secret';

export interface CodexSecurity {
  level: CodexSecurityLevel;
  clearance?: string;
  encrypted?: boolean;
  watermark?: boolean;
}