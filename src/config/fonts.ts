import { Inter, Stalinist_One, Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const stalinistOne = Stalinist_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});
