import { makeTheme } from "./theme";
import {
  aquarelleCymbidium,
  aquarelleHydrangea,
  aquarelleLilac,
  aquarellePumpkin,
  aquarelleSwamp,
} from "./variations/aquarelle-dark";
import { everForestDark, everForestDarken, everForestLilac, everForestPumpkin } from "./variations/everforest-dark";
import { jetbrainLight } from "./variations/jetbrain-light";
import { everForestLight } from "./variations/everforest-light";
import { pumpkinDark } from "./variations/pumpkin-dark";
import { jetbrainDark } from "./variations/jetbrain-dark";

makeTheme("jetbrain-light", jetbrainLight, { light: true });
makeTheme("jetbrain-dark", jetbrainDark);

makeTheme("everforest-light", everForestLight, { light: true });
makeTheme("everforest-dark", everForestDark);
makeTheme("everforest-darken", everForestDarken);
makeTheme("everforest-lilac", everForestLilac);
makeTheme("everforest-pumpkin", everForestPumpkin);

makeTheme("aquarelle-cymbidium", aquarelleCymbidium);
makeTheme("aquarelle-hydrangea", aquarelleHydrangea);
makeTheme("aquarelle-lilac", aquarelleLilac);
makeTheme("aquarelle-swamp", aquarelleSwamp);
makeTheme("aquarelle-pumpkin", aquarellePumpkin);

makeTheme("pumpkin-dark", pumpkinDark);
