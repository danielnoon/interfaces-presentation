import { App } from "./App";
import { slides } from "./slides";

const mount = document.querySelector<HTMLDivElement>("#slideshow-root")!;

const app = new App(slides, mount);

addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowRight") {
    app.advanceSlide();
  }
  if (ev.key === "ArrowLeft") {
    app.retreatSlide();
  }
});
