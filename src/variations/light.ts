import { makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#6a8149ff",
  green: "#538d61ff",
  greenAlt: "#4d8d85ff",
  orange: "#a79672ff",
  pink: "#b49557ff",
  purple: "#5a9f6bff",
  red: "#ac6587ff", 
  salmon: "#ad9c79ff",
  turquoize: "#9a5b3eff",
  yellow: "#b95456ff",

};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};

export const light: Theme = {
  ui: makeMainColorsLight({
    base: '#FFFFFF',
    primary: colors.greenAlt,
    foreground: '#515151',
  }),
  colors,
  levels,
}
