"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("jaunrcy-theme");
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    applyTheme(initialTheme);
    setTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("jaunrcy-theme")) return;

      const systemTheme: Theme = event.matches ? "light" : "dark";
      applyTheme(systemTheme);
      setTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", followSystemTheme);
    return () => mediaQuery.removeEventListener("change", followSystemTheme);
  }, []);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      className="focus-ring pressable flex h-11 w-11 items-center justify-center rounded-full text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
      aria-label={label}
      title={label}
      onClick={() => {
        applyTheme(nextTheme);
        localStorage.setItem("jaunrcy-theme", nextTheme);
        setTheme(nextTheme);
      }}
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" size={18} />
      ) : (
        <Sun aria-hidden="true" size={18} />
      )}
    </button>
  );
}
