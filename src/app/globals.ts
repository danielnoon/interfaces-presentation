export const DEFAULT_TITLE_BACKGROUND = "assets/background.jpg";

export const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
