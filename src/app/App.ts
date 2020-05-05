import { Slide } from "./models/Slide";
import marked from "marked";
import { wait } from "./globals";
import prism from "prismjs";
import highlight from "highlight.js";

export class App {
  currentSlideIndex = 0;
  currentSlideElement?: HTMLDivElement;

  constructor(private slides: Slide[], private mount: HTMLDivElement) {
    marked.setOptions({
      highlight: (code, lang) => {
        return highlight.highlight(lang || "html", code).value;
      },
    });
    this.changeSlide(0);
  }

  advanceSlide() {
    this.changeSlide(this.currentSlideIndex + 1);
  }

  retreatSlide() {
    this.changeSlide(this.currentSlideIndex - 1);
  }

  changeSlide(to: number) {
    if (to >= 0 && to < this.slides.length) {
      this.fadeOutOldSlide();
      this.fadeInNewSlide(to);
      this.currentSlideIndex = to;
    }
  }

  async fadeOutOldSlide() {
    if (this.currentSlideElement) {
      const slide = this.currentSlideElement;
      slide.classList.add("fade-out");
      await wait(300);
      this.mount.removeChild(slide);
    }
  }

  fadeInNewSlide(idx: number) {
    const slide = this.slides[idx];

    const element = document.createElement("div");
    element.classList.add("slide", "fade-in", slide.getElementClass());
    const html = marked.parse(slide.toMarkdown());
    element.innerHTML = `<div class="slide-container">${html}</div>`;

    if (slide.getBackgroundColor()) {
      element.style.setProperty("background-color", slide.getBackgroundColor());
    }

    if (slide.getBackgroundImage()) {
      element.style.setProperty(
        "background-image",
        `url(${slide.getBackgroundImage()})`
      );
    }

    this.currentSlideElement = element;

    this.mount.appendChild(element);
  }
}
