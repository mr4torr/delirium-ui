import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#7fb2b3",
  green: "#bbab97",
  greenAlt: "#7eaadb",
  orange: "#7fb2b3",
  pink: "#baa2da",
  purple: "#baa2da",
  red: "#d78884",
  salmon: "#bcbcb4",
  turquoize: "#baa2da",
  yellow: "#7eaadb",
};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};

export const jetbrainDark: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({
    base: "#2b2d30",
    primary: "#0077ff",
    foreground: "#bcbcb4"
  }),
};
