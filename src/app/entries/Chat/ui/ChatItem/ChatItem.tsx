import React from "react";
import cls from "./ChatItem.module.scss";
import avatar from "@/../public/friendAvatar.png";
import Text from "@/shared/ui/Text/ui/Text";
import { UnreadCount } from "@/app/entries/Message";
import { UserAvatarBlock } from "@/app/entries/User";
type Props = {};

export const ChatItem = (props: Props) => {
  return (
    <div className={cls.info}>
      <UserAvatarBlock
        title="Carter Donin"
        text="UX/UI Designer"
        avatar={avatar}
      />
      <div className={cls.time}>
        <Text text="9:52" />
        <UnreadCount />
      </div>
    </div>
  );
};

export default ChatItem;
