import React from "react";
import cls from "./page.module.scss";
import avatar from "@/../public/avatar.jpg";
import { MoreHorizontal, Search } from "lucide-react";
import { UserAvatarBlock } from "../entries/User";
import { ChatInput } from "../entries/Chat";
import { TextMessage } from "../entries/Message";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="flex flex-col justify-between flex-1">
      <div className={cls.header}>
        <UserAvatarBlock
          avatar={avatar}
          text="8 members, 5 online"
          title="Design Team"
        />
        <div className="flex items-center mr-4">
          <Search width={30} height={30} />
          <MoreHorizontal width={30} height={30} className="ml-4" />
        </div>
      </div>
      <div className="min-h-[800px] p-5 flex-1">
        <TextMessage isMyMessage={false} isReaded />
        <TextMessage isMyMessage={true} isReaded />
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
