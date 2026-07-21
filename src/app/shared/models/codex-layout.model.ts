export interface CodexLayout {
  document: CodexDocumentLayout;
  header: CodexHeaderLayout;
  body: CodexBodyLayout;
  footer: CodexFooterLayout;
  glyph: CodexGlyphLayout;
  title: CodexTitleLayout;
  subtitle: CodexSubtitleLayout;
  divider: CodexDividerLayout;
}

export interface CodexDocumentLayout {
  width: number;
  height: number;
}
export interface CodexHeaderLayout {
  top: number;
  bottom: number;
}
export interface CodexBodyLayout {
  top: number;
  bottom: number;
}
export interface CodexFooterLayout {
  top: number;
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
export interface CodexDividerLayout {
  top: number;
}
