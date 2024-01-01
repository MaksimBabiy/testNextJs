import { Mic, Paperclip, Smile } from "lucide-react";
import React from "react";
import cls from "./ChatInput.module.scss";
type Props = {};

export const ChatInput = (props: Props) => {
  return (
    <div className={cls.chatbody}>
      <div className="flex items-center">
        <Paperclip className="mr-4 cursor-pointer" width={30} height={30} />
        <input className={cls.input} placeholder="Write a message..." />
      </div>
      <div className="flex items-center">
        <Smile width={30} height={30} className="cursor-pointer" />
        <Mic width={30} height={30} className="ml-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatInput;
