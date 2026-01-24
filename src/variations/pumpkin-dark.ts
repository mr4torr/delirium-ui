import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#85ab86",
  green: "#7fbbb3",
  greenAlt: "#83c092",
  orange: "#cfbc93",
  pink: "#d3c6aa",
  purple: "#83c092",
  red: "#e67e80",
  salmon: "#d3c6aa",
  turquoize: "#e7a98c",
  yellow: "#f88d6f",
};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#7fbbb3",
  success: "#83c092",
  warning: "#d3c6aa",
};

export const pumpkinDark: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({
    base: "#2b2d30",
    primary: "#f88d6f",
    foreground: "#bcbcb4"
  }),
};
