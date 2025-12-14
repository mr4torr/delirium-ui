import { writeFile, writeFileSync } from "fs";
import bridge from "../bridge.json" assert { type: "json" };
import { BridgeItem, Theme, ThemeOptions } from "./typing";
import ui from "./ui";
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";

let bfile: BridgeItem[] = JSON.parse(JSON.stringify(bridge));

export async function makeTheme(
  name: string,
  theme: Theme,
  { desaturateInputs, hc, light, untindedSelection }: ThemeOptions = {
    desaturateInputs: false,
    hc: false,
    light: false,
    untindedSelection: false,
  },
): Promise<void> {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    colors: ui(theme, hc, light, untindedSelection, desaturateInputs),
    name: `DeliriumTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
    tokenColors: syntax(theme, hc, light),
  };

  writeFile(
    `themes/delirium-theme-${name}.json`,
    JSON.stringify(themeTemplate),
    (err) => {
      if (err) console.log("error", err);
    },
  );

  // Generate bridge.json
  const themeName = name
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

  bfile.push({
    name: `Delirium Theme ${themeName}`,
    slug: name.split(" ").join("-").toLowerCase(),
    theme,
    uiTheme: light ? "vs" : "vs-dark",
  });

  if (bfile.length === new Set(bfile.map((item) => item.name)).size) {
    writeFileSync("bridge.json", JSON.stringify(bfile), {
      encoding: "utf8",
    });
  }
}
