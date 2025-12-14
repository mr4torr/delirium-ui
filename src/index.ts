import { makeTheme } from "./theme";
import {
  aquarelleCymbidium,
  aquarelleHydrangea,
  aquarelleLilac,
} from "./variations/aquarelle";
import { dark, darken } from "./variations/dark";
import { jetbrainLight } from "./variations/jetbrain";
import { light } from "./variations/light";


makeTheme("jetbrain-light", jetbrainLight, { light: true });
makeTheme("everforest-light", light, { light: true });
makeTheme("everforest-dark", dark);
makeTheme("everforest-darken", darken);

makeTheme("aquarelle-cymbidium", aquarelleCymbidium);
makeTheme("aquarelle-hydrangea", aquarelleHydrangea);
makeTheme("aquarelle-lilac", aquarelleLilac);