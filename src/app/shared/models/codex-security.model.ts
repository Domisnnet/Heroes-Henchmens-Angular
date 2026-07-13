export interface CodexSecurity {
  level: CodexSecurityLevel;
  clearance?: string;
  encrypted?: boolean;
  watermark?: boolean;
}

export type CodexSecurityLevel =
  | 'public'
  | 'restricted'
  | 'classified'
  | 'secret'
  | 'top-secret';