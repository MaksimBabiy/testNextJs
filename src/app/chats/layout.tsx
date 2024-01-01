import { Chats } from "@/components/chats";
import { ExtendedChat } from "@/components/layout";

import React from "react";

type Props = {};

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between w-[100%]">
      <Chats />
      {children}
      <ExtendedChat />
    </div>
  );
}
