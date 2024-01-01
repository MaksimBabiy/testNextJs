"use client";
import { AlertCircle, Bell, LogOut, UserPlus } from "lucide-react";
import React, { useState } from "react";
import cls from "./ExtendedChat.module.scss";
import Text from "@/shared/ui/Text/ui/Text";
import {
  SharedFileItem,
  SharedLinkItem,
  SharedMediaItem,
} from "@/app/entries/Media";

type Props = {};

export const ExtendedChat = ({}: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onHandleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return collapsed ? (
    <div className={cls.collapsed}>
      <div className={cls.arrowLeft}></div>
      <div className={cls.arrowLeftInner} onClick={onHandleCollapse}></div>
      <UserPlus width={50} height={50} className="cursor-pointer mb-3" />
      <Bell width={50} height={50} className="cursor-pointer mb-3" />
      <AlertCircle width={50} height={50} className="cursor-pointer mb-3" />
      <LogOut width={50} height={50} className="cursor-pointer mb-3" />
    </div>
  ) : (
    <div className={cls.extended}>
      <div className={cls.arrowRight}></div>
      <div className={cls.arrowRightInner} onClick={onHandleCollapse}></div>
      <div className={cls.header}>
        <UserPlus width={30} height={30} className="cursor-pointer" />
        <Bell width={30} height={30} className="cursor-pointer" />
        <AlertCircle width={30} height={30} className="cursor-pointer" />
        <LogOut width={30} height={30} className="cursor-pointer" />
      </div>
      <div className="px-5 py-10">
        <div className="mb-10">
          <div className="flex justify-between mb-3">
            <Text title="Shared Media" />
            <Text text="Sea ALL" classname="underline cursor-pointer" />
          </div>
          <div className="flex justify-between">
            <SharedMediaItem />
            <SharedMediaItem />
            <SharedMediaItem />
            <SharedMediaItem />
            <SharedMediaItem />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <Text title="Shared Files" />
            <Text text="Sea ALL" classname="underline cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <SharedFileItem />
            <SharedFileItem />
            <SharedFileItem />
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-between mb-3">
              <Text title="Shared Links" />
              <Text text="Sea ALL" classname="underline cursor-pointer" />
            </div>
            <div className="flex flex-col">
              <SharedLinkItem />
              <SharedLinkItem />
              <SharedLinkItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedChat;
