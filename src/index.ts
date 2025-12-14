import { makeTheme } from "./theme";
import {
  aquarelleCymbidium,
  aquarelleHydrangea,
  aquarelleLilac,
  aquarelleSwamp,
} from "./variations/aquarelle-dark";
import { everForestDark, everForestDarken, everForestLilac } from "./variations/everforest-dark";
import { jetbrainLight } from "./variations/jetbrain-light";
import { everForestLight } from "./variations/everforest-light";

makeTheme("jetbrain-light", jetbrainLight, { light: true });

makeTheme("everforest-light", everForestLight, { light: true });
makeTheme("everforest-dark", everForestDark);
makeTheme("everforest-darken", everForestDarken);
makeTheme("everforest-lilac", everForestLilac);

makeTheme("aquarelle-cymbidium", aquarelleCymbidium);
makeTheme("aquarelle-hydrangea", aquarelleHydrangea);
makeTheme("aquarelle-lilac", aquarelleLilac);
makeTheme("aquarelle-swamp", aquarelleSwamp);