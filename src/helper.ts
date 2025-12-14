import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

import { ThemeUi } from "./typing";

extend([mixPlugin]);

interface ThemePropsDark {
  base: string;
  fontTeinted?: boolean;
  primary: string;
  primaryAlt?: string;
  reversed?: boolean;
  foreground?: string;
  foregroundAlt?: string;
  editorForeground?: string;
}

interface ThemePropsLight {
  base: string;
  desaturated?: boolean;
  primary: string;
  primaryAlt?: string;
  foreground?: string;
  foregroundAlt?: string;
  editorForeground?: string;
}

export function isTooNeutral(hex: string, threshold = 0.3): boolean {
  const { s } = c(hex).toHsl();
  return s < threshold * 100;
}

export function isTooVibrant(hex: string, threshold = 0.3): boolean {
  const { s } = c(hex).toHsl();
  return s >= threshold * 100;
}

/**
 * Calculates and returns an object with color values based on the input properties.
 *
 * @param {ThemePropsDark} themeProps - The input object with color properties.
 * @returns {ThemeUi} - An object with color values based on the input properties.
 */
export function makeMainColorsDark({
  base,
  fontTeinted,
  primary,
  primaryAlt,
  reversed,
  foreground,
  foregroundAlt,
  editorForeground,
}: ThemePropsDark): ThemeUi {
  const darkenColor: string = c(base).darken(0.022).toHex();
  const sat = 0.01;

  let _foreground =  c(foreground ?? base);
  if(!foreground) {
    _foreground = fontTeinted ? _foreground.lighten(0.6) : _foreground.lighten(0.7);
  }

  let _foregroundAlt =  c(foregroundAlt ?? _foreground);
  if(!foregroundAlt) {
    _foregroundAlt = fontTeinted ? _foregroundAlt.lighten(0.15) : _foregroundAlt.lighten(0.25);
  }

  return {
    border: c(base).lighten(0.06).toHex(),
    // Fonts
    default: fontTeinted
      ? _foreground.saturate(0.15).toHex()
      : _foreground.desaturate(sat).toHex(),
    defaultalt: fontTeinted
      ? _foregroundAlt.saturate(0.05).toHex()
      : _foregroundAlt.desaturate(sat).toHex(),
    defaultMain: fontTeinted
      ? c(base).lighten(0.55).saturate(0.07).toHex()
      : c(base).lighten(0.6).desaturate(sat).toHex(),
    // UI
    primary,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.05).toHex(),
    uibackground: reversed ? darkenColor : base,
    uibackgroundalt: reversed ? base : darkenColor,
    uibackgroundmid: c(base).mix(darkenColor).toHex(),
    foreground: _foreground.toHex(),
    editorForeground: editorForeground ?? _foreground.toHex(),
    foregroundalt: _foregroundAlt.toHex(),
  };
}

/**
 * Generates color values for various elements of a UI theme based on the provided theme properties.
 * @param themeProps - The theme properties.
 * @returns An object containing color values for various elements of a UI theme.
 */
export function makeMainColorsLight({
  base,
  desaturated,
  primary,
  primaryAlt,
  foreground,
  foregroundAlt,
  editorForeground,
}: ThemePropsLight): ThemeUi {
  const darkenColor: string = c(base).darken(0.035).toHex();
  const mixedColor: string = c(base).mix(darkenColor).toHex();
  const borderColor: string = c(base).darken(0.08).toHex();
  const fontColor: string = c(primary).darken(0.1).toHex();

  let _foreground =  c(foreground ?? base);
  if(!foreground) {
    _foreground = desaturated ? _foreground.darken(0.4) : _foreground.darken(0.3);
  }

  let _foregroundAlt =  c(foregroundAlt ?? base);
  if(!foregroundAlt) {
    _foregroundAlt = desaturated ? _foregroundAlt.lighten(0.3) : _foregroundAlt.lighten(0.15);
  }

  return {
    border: desaturated ? c(borderColor).desaturate(0.5).toHex() : borderColor,
    // Fonts
    default: desaturated
      ? _foreground.desaturate(0.3).toHex()
      : _foreground.desaturate(0.3).toHex(),
    defaultalt: _foreground.toHex(),
    // defaultalt: desaturated
    //   ? _foregroundAlt.desaturate(0.5).toHex()
    //   : _foregroundAlt.desaturate(0.5).toHex(),
    defaultMain: desaturated
      ? c(fontColor).darken(0.3).desaturate(0.3).toHex()
      : c(fontColor).darken(0.5).desaturate(0.3).toHex(),
    // UI
    primary,
    primaryalt: primaryAlt ? primaryAlt : c(base).lighten(0.02).toHex(),
    uibackground: base,
    uibackgroundalt: desaturated
      ? c(darkenColor).desaturate(0.35).toHex()
      : darkenColor,
    uibackgroundmid: desaturated
      ? c(mixedColor).desaturate(0.25).toHex()
      : mixedColor,
    foreground: _foreground.toHex(),
    editorForeground: editorForeground ?? _foreground.toHex(),
    foregroundalt: _foregroundAlt.toHex(),
  };
}