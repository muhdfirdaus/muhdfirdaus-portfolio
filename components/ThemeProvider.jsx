"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"      // adds class="light" or "dark" to <html>
      defaultTheme="system"  // follow OS theme by default
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
