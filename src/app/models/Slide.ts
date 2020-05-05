export interface Slide {
  getBackgroundImage(): string | null;
  getBackgroundColor(): string;
  getElementClass(): string;
  toMarkdown(): string;
}
