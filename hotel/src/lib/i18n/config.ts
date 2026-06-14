import type { Dict } from "./vi";

export type { Dict } from "./vi";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export async function getDictionary(locale: Locale): Promise<Dict> {
  if (locale === "en") {
    const { en } = await import("./en");
    return en;
  }
  const { vi } = await import("./vi");
  return vi;
}
