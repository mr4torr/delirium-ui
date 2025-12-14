import { makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#6a8149",
  green: "#538d61",
  greenAlt: "#4d8d85",
  orange: "#a79672",
  pink: "#b49557",
  purple: "#5a9f6b",
  red: "#ac6587", 
  salmon: "#444b61",
  turquoize: "#DB704B",
  yellow: "#b95456",

};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};

export const everForestLight: Theme = {
  ui: makeMainColorsLight({
    base: '#FFFFFF',
    primary: colors.greenAlt,
    foreground: '#515151',
  }),
  colors,
  levels,
}
