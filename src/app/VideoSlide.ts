import { Slide } from "./models/Slide";

export class VideoSlide implements Slide {
  constructor(private title: string, private id: string) {}

  getBackgroundColor() {
    return "black";
  }

  getBackgroundImage() {
    return null;
  }

  getElementClass() {
    return "slide-video";
  }

  toMarkdown() {
    return `
# ${this.title}

<div class="video-wrapper">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${this.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    `;
  }
}
