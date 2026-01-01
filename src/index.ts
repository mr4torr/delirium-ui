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
import { jetbrainPumpkinDark } from "./variations/jetbrain-pumpkin-dark";
import { jetbrainDark } from "./variations/jetbrain-dark";

makeTheme("jetbrain-light", jetbrainLight, { light: true });
makeTheme("jetbrain-dark", jetbrainDark);
makeTheme("jetbrain-pumpkin-dark", jetbrainPumpkinDark);

makeTheme("everforest-light", everForestLight, { light: true });
makeTheme("everforest-dark", everForestDark);
makeTheme("everforest-darken", everForestDarken);
makeTheme("everforest-lilac", everForestLilac);

makeTheme("aquarelle-cymbidium", aquarelleCymbidium);
makeTheme("aquarelle-hydrangea", aquarelleHydrangea);
makeTheme("aquarelle-lilac", aquarelleLilac);
makeTheme("aquarelle-swamp", aquarelleSwamp);