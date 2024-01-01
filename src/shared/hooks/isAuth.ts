"use client";
import { getUserData } from "@/app/entries/User";
import { useAppSelector } from "@/store";

export const useIsAuth = () => {
  const userData = useAppSelector(getUserData);
  return userData !== undefined;
};
