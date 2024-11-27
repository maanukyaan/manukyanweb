import { Inter, Unbounded } from "next/font/google";
import localFont from "next/font/local";

export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
});

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const square = localFont({
  src: "../assets/fonts/Square/Square.ttf",
});
