import "server-only";

type Dictionary = {
  [key: string]: string | Record<string, string>;
};

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[locale]();
