import { Dictionary } from "@/types/i18n";
import "server-only";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
  am: () => import("./am.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[locale]();
