"use client";
import { Shield, Sun } from "lucide-react";
import React, { useEffect, useLayoutEffect } from "react";
import cls from "./SideBar.module.scss";
import Link from "next/link";
import { SideBarItemsList } from "../model/selectors/getSideBarItems";
import { SideBarItem } from "../model/types/types";
import { useTheme } from "@/app/providers/ThemeProvider/model/useTheme";
import { redirect, usePathname } from "next/navigation";
import { useIsAuth } from "@/shared/hooks/isAuth";

type Props = {};

export const Sidebar = (props: Props) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const renderRoutes = (route: SideBarItem, index: number) => {
    return (
      <Link
        href={route.path}
        key={index}
        className={`${pathname == route.path ? cls.active : ""} ${
          cls.sidebaritem
        }`}
      >
        {<route.icon width={50} height={50} className="my-5" />}
      </Link>
    );
  };
  const onHandleTheme = () => {
    toggleTheme();
  };
  return (
    <div className={cls.sidebar}>
      <Shield
        width={50}
        height={50}
        className={`cursor-pointer ${cls.sidebaritem}`}
      />
      <div>{Object.values(SideBarItemsList).map(renderRoutes)}</div>
      <Sun
        width={50}
        height={50}
        className={`cursor-pointer ${cls.sidebaritem}`}
        onClick={onHandleTheme}
      />
    </div>
  );
};
