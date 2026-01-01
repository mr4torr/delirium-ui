import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#85ab86",
  green: "#61bbac",
  greenAlt: "#90a9db",
  orange: "#b7967b",
  pink: "#61bbac",
  purple: "#69aa6a",
  red: "#9ba1e2",
  salmon: "#cfbc93",
  turquoize: "#e7a98c",
  yellow: "#f88d6f",
};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};

export const jetbrainPumpkinDark: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({
    base: "#2b2d30",
    // primary: "#0077ff",
    primary: "#f88d6f",
    foreground: "#bcbcb4"
  }),
};
