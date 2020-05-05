import { Slide } from "./models/Slide";
import { DEFAULT_TITLE_BACKGROUND } from "./globals";

export class TitleSlide implements Slide {
  constructor(private title: string, private background?: string) {}

  toMarkdown() {
    return `# ${this.title}`;
  }

  getBackgroundImage() {
    return this.background || DEFAULT_TITLE_BACKGROUND;
  }

  getBackgroundColor() {
    return "#333";
  }

  getElementClass() {
    return "slide-title";
  }
}
