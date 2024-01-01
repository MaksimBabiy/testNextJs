import { Avatar } from "@/app/entries/User";
import Text from "@/shared/ui/Text/ui/Text";
import React from "react";
import avatar from "@/../public/friendAvatar.png";
import cls from "./TextMessage.module.scss";
import { Check, CheckCheck } from "lucide-react";
type Props = {
  isMyMessage: boolean;
  isReaded: boolean;
};

export const TextMessage = ({ isMyMessage, isReaded }: Props) => {
  return isMyMessage ? (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center mr-4">
        <div className={cls.messageBubbleMy}>
          <Text
            classname="p-5"
            text="this is my new shot for dribbble this is my new shot for dribbble this is my new shot for dribbble"
          />
        </div>
        <div className="flex justify-end">
          <Text text="9:45" />
          <div className="ml-2">
            {isReaded ? <CheckCheck color="green" /> : <Check color="green" />}
          </div>
        </div>
      </div>
      <Avatar avatar={avatar} classnames="self-start" />
    </div>
  ) : (
    <div className="flex">
      <Avatar avatar={avatar} classnames="self-start" />
      <div className="flex flex-col justify-center ml-4">
        <div className={cls.messageBubble}>
          <Text
            classname="p-5"
            text="this is my new shot for dribbble this is my new shot for dribbble this is my new shot for dribbble this is my new shot for dribbble"
          />
        </div>
        <Text text="10:00" classname="flex justify-end" />
      </div>
    </div>
  );
};

export default TextMessage;
