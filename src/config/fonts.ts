import { Inter, Noto_Sans_Armenian, Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const notoSansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
});
