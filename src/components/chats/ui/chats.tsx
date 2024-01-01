import Image from "next/image";
import React from "react";
import Text from "@/shared/ui/Text/ui/Text";
import { MoreHorizontal, Plus, ZoomIn } from "lucide-react";
import cls from "./chat.module.scss";
import Input from "@/shared/ui/Input/Input";
import StoryItem from "@/shared/ui/StoryItem/StoryItem";
import avatar from "@/../public/avatar.jpg";
import { UserAvatarBlock } from "@/app/entries/User";
import { ChatList } from "@/app/entries/Chat";
type Props = {};

export const Chats = (props: Props) => {
  return (
    <div className={cls.chat}>
      <div className={cls.info}>
        <UserAvatarBlock
          avatar={avatar}
          text="UX/UI Designer"
          title="Carter Donin"
        />
        <div className="flex items-center">
          <MoreHorizontal className="cursor-pointer" />
        </div>
      </div>
      <div className={cls.input}>
        <div className="flex">
          <ZoomIn className="mr-3" />
          <Input
            className="bg-transparent  outline-none"
            placeholder="People, groups and messages"
          />
        </div>
        <div>
          <Plus className="cursor-pointer" />
        </div>
      </div>
      <div className={cls.stories}>
        <StoryItem isMyStory />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
      <ChatList />
    </div>
  );
};

export default Chats;
