import { Dictionary } from "@/types/i18n";
import "server-only";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () =>
    import("../../config/i18n/en.json").then((module) => module.default),
  ru: () =>
    import("../../config/i18n/ru.json").then((module) => module.default),
  am: () =>
    import("../../config/i18n/am.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[locale]();
