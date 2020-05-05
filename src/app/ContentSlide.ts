import { Slide } from "./models/Slide";

export class ContentSlide implements Slide {
  constructor(private title: string, private content: string) {}

  getBackgroundColor() {
    return "#222";
  }

  getBackgroundImage() {
    return null;
  }

  getElementClass() {
    return "slide-content";
  }

  toMarkdown() {
    return `# ${this.title}\n\n${this.content}`;
  }
}
