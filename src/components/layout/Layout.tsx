import React from "react";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
