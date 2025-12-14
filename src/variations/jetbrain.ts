import { makeMainColorsLight } from "../helper";
import { Theme, ThemeColors, ThemeLevels } from "../typing";

const colors: ThemeColors = {
  blue: "#008D90",  
  green: "#8C6C41", 
  greenAlt: "#0063d3", 
  orange: "#008D90",
  pink: "#6B2FBA", 
  purple: "#6B2FBA",
  red: "#AA3731",  
  salmon: "#444b61", // #5f5faf alternativa
  turquoize: "#6B2FBA", 
  yellow: "#0063d3",
};

const levels: ThemeLevels = {
  danger: "#e67e80",
  info: "#a7c080",
  success: "#83c092",
  warning: "#dbbc7f",
};

export const jetbrainLight: Theme = {
  ui: makeMainColorsLight({
    base: '#f7f7f7',
    primary: colors.greenAlt,
    foreground: '#444b61',
  }),
  colors,
  levels,
}
