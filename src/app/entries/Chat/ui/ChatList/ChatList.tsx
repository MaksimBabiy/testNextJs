import React from "react";
import cls from "./ChatList.module.scss";
import ChatItem from "../ChatItem/ChatItem";
type Props = {};

export const ChatList = (props: Props) => {
  return (
    <div className={cls.chatList}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
};

export default ChatList;
