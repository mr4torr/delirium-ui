import { makeMainColorsDark } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#a7c080",
  green: "#83c092",
  greenAlt: "#7fbbb3",
  orange: "#d3c6aa",
  pink: "#dbbc7f",
  purple: "#83c092",
  red: "#d699b6",
  salmon: "#d3c6aa",
  turquoize: "#e69875",
  yellow: "#e67e80",
};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};


export const everForestDark: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#282829", primary: "#a7c080", foreground: "#d3c6aa" }),
};

export const everForestDarken: Theme = {
  colors,
  levels,
  ui: makeMainColorsDark({ base: "#181819", primary: "#a7c080", foreground: "#d3c6aa" }),
};

export const everForestLilac: Theme = {
  colors: {
    ...colors,
    orange: '#e1d7c3',
    salmon: "#e1d7c3",
  },
  levels,
  ui: makeMainColorsDark({ base: "#252433", primary: "#9587ff", foreground: "#ede7da", editorForeground: "#e1d7c3" }),
};

