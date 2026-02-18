import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import it from "./locales/it/translation.json";
import pl from "./locales/pl/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    it: { translation: it },
    pl: { translation: pl },
    de: { translation: de },
    fr: { translation: fr },
    es: { translation: es },
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
