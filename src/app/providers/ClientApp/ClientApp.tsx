"use client";
import { useIsAuth } from "@/shared/hooks/isAuth";
import React, { useEffect } from "react";
import { useTheme } from "../ThemeProvider";
import { Sidebar } from "@/components/layout/Sidebar";
import { redirect, usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const ClientApp = ({ children }: Props) => {
  const { theme, toggleTheme } = useTheme();
  const isAuth = useIsAuth();
  const pathname = usePathname();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  useEffect(() => {
    if (!isAuth && pathname != "/login") {
      redirect("/login");
    }
  }, [isAuth]);
  return (
    <>
      {isAuth && <Sidebar />}
      {children}
    </>
  );
};

export default ClientApp;
