"use client";
import React, { useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContex,
} from "../model/ThemeContex";

type Props = {
  children: React.ReactNode | React.ReactElement;
};
const defaultTheme = ((typeof window !== "undefined" &&
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) ||
  Theme.DARK) as Theme;

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContex.Provider value={defaultProps}>{children}</ThemeContex.Provider>
  );
};
