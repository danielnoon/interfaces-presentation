import { Slide } from "./models/Slide";

export class CodeSlide implements Slide {
  constructor(
    private code: string,
    private language: string,
    private title?: string
  ) {}

  getBackgroundColor() {
    return "dark-gray";
  }

  getBackgroundImage() {
    return null;
  }

  getElementClass() {
    return "slide-code";
  }

  toMarkdown() {
    const title = this.title ? `# ${this.title}\n` : "";
    const code = "```" + this.language + "\n" + this.code.trim() + "\n```";

    return title + code;
  }
}
