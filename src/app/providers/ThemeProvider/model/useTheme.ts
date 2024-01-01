import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContex } from "./ThemeContex";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContex);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        document.body.classList.add(newTheme);
        document.body.classList.remove(theme);
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        document.body.classList.add(newTheme);
        document.body.classList.remove(theme);
        break;
      default:
        newTheme = Theme.DARK;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    console.log(theme);
  };
  return { theme: theme || Theme.DARK, toggleTheme };
}
