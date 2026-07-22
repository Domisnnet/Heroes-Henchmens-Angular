export interface CodexLayout {
  document: CodexDocumentLayout;
  header: CodexHeaderLayout;
  glyph: CodexGlyphLayout;
  title: CodexTitleLayout;
  subtitle: CodexSubtitleLayout;
  body: CodexBodyLayout;
  content: CodexContentLayout;
  timeline: CodexTimelineLayout;
  divider: CodexDividerLayout;
  footer: CodexFooterLayout;
}

export interface CodexDocumentLayout {
  width: number;
  height: number;
}
export interface CodexHeaderLayout {
  top: number;
  bottom: number;
}
export interface CodexGlyphLayout {
  centerX: number;
  centerY: number;
  size: number;
}
export interface CodexTitleLayout {
  top: number;
}
export interface CodexSubtitleLayout {
  top: number;
}
export interface CodexBodyLayout {
  top: number;
  bottom: number;
}
export interface CodexContentLayout {
  top: number;
}
export interface CodexTimelineLayout {
  top: number;
}
export interface CodexDividerLayout {
  top: number;
}
export interface CodexFooterLayout {
  top: number;
}
