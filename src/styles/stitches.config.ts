import { createStitches } from "@stitches/react";

export const mediaConfig = {
  fold: "(max-width: 280px)",
  mb: "(max-width: 600px)",
  tb: "(min-width: 601px) and (max-width: 1260px)",
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: mediaConfig,
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { backgroundColor: "#fff" },
});
