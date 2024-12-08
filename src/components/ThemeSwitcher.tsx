"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDarkScheme);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDarkScheme ? "dark" : "light",
      );
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      const theme = newTheme ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);

      return newTheme;
    });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      {isDark ? (
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9m8 0v4m2-2h-4" />
      ) : (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </>
      )}
    </svg>
  );
}
